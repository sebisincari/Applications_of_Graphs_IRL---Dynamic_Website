let edgeIndex = 0;

  function addEdgeField() {
    const edgesContainer = document.getElementById('edges-container');
    const newEdge = document.createElement('div');
    newEdge.innerHTML = `
        <input type="number" name="edgesList[${edgeIndex}][0]" placeholder="Node 1" class="inputNod" required>
        <input type="number" name="edgesList[${edgeIndex}][1]" placeholder="Node 2" class="inputNod" required>
    `;
    newEdge.className = 'noduriPereche'
    edgesContainer.appendChild(newEdge);
    edgeIndex++;
  }


  //crearea grafului
  document.addEventListener('DOMContentLoaded', function () {
    try{
    const numOfNodes = parseInt(document.getElementById('graph-container').getAttribute('data-num-of-nodes'));
    const edgesList = JSON.parse(document.getElementById('graph-container').getAttribute('data-edges-list'));
    const centerX = 50;
    const centerY = 50;
    const radius = 20;
    const angleIncrement = (2 * Math.PI) / numOfNodes;

    const nodes = [];

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 100 100");

    for (let i = 0; i < numOfNodes; i++) {
        const angle = i * angleIncrement;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        nodes.push({ x, y });

        // Crează cercul
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", "1");
        circle.setAttribute("fill", "black");

        // Adaugă cercul la SVG
        svg.appendChild(circle);
    }

    edgesList.forEach(edge => {
        const [start, end] = edge.map(index => index - 1); // Ajustează indicii nodurilor
        if (start >= 0 && start < numOfNodes && end >= 0 && end < numOfNodes) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", nodes[start].x);
            line.setAttribute("y1", nodes[start].y);
            line.setAttribute("x2", nodes[end].x);
            line.setAttribute("y2", nodes[end].y);
            line.setAttribute("stroke", "black");
            line.setAttribute("stroke-width", "0.5");

            svg.appendChild(line);
        }
    });

    // Adăugarea numerelor în exteriorul grafului
    const labelRadius = radius + 5; // Setează raza pentru a plasa etichetele în exteriorul cercului

    for (let i = 0; i < numOfNodes; i++) {
        const angle = i * angleIncrement;
        const x = centerX + labelRadius * Math.cos(angle);
        const y = centerY + labelRadius * Math.sin(angle);

        // Crează eticheta de text pentru numerotarea nodului
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.setAttribute("fill", "black"); // Setează culoarea textului
        text.setAttribute("font-size", "5"); // Setează dimensiunea fontului pentru a face numerele mai mici
        text.setAttribute("text-anchor", "middle"); // Așează textul la mijlocul punctului
        text.setAttribute("dominant-baseline", "central"); // Așează textul pe mijlocul punctului
        text.textContent = i + 1; // Setează conținutul textului

        // Adaugă eticheta la SVG
        svg.appendChild(text);
    }

    document.getElementById('graph-container').appendChild(svg);
  
  }catch(error){
      console.log(error);
    }

    
});
