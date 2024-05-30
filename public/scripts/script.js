function addEdgeField() {
    const edgesContainer = document.getElementById('edges-container');
    const newEdge = document.createElement('div');
    newEdge.innerHTML = `
        <input type="number" name="edgesList[][0]" placeholder="Node 1" required>
        <input type="number" name="edgesList[][1]" placeholder="Node 2" required>
    `;
    edgesContainer.appendChild(newEdge);
}