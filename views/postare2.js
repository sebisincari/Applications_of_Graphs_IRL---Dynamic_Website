document.addEventListener('DOMContentLoaded', function() {
  const numOfNodes = parseInt(document.currentScript.getAttribute('data-num-of-nodes'));

  // if (isNaN(numOfNodes) || numOfNodes <= 0) {
  //   console.error('Invalid number of nodes');
  //   return;
  // }

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("viewBox", "0 0 100 100");

  const centerX = 50;
  const centerY = 50;
  const radius = 20;
  const angleIncrement = (2 * Math.PI) / numOfNodes;

  for (let i = 0; i < numOfNodes; i++) {
    const angle = i * angleIncrement;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "1");
    circle.setAttribute("fill", "black");

    svg.appendChild(circle);
  }

  // Adaugă elementul svg în DOM sau utilizează-l în alt mod, după cum dorești
  document.body.appendChild(svg); // Adaugă svg la corpul paginii, de exemplu
});