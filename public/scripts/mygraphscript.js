const graphForm = document.getElementById('graphForm');

graphForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const graphName = document.getElementById('graphName').value;
    const numNodes = parseInt(document.getElementById('numNodes').value);
    const edgesText = document.getElementById('edges').value;

    // Process the edges text into an array of edge pairs
    const edges = edgesText.split('\n').map((line) => {
        const [node1, node2] = line.split(' ');
        return { node1: parseInt(node1), node2: parseInt(node2) };
    });

    // Use the retrieved graph data (name, nodes, edges) for further processing
    console.log('Graph Name:', graphName);
    console.log('Number of Nodes:', numNodes);
    console.log('Edges:', edges);

    for (const element of graphForm.elements) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
            element.value = ''; // Clear the value
        }
    }
    
    // Perform any additional actions or data validation as needed
});

