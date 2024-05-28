function generatePointsOnCircle(n) {
    // Validate input parameter
    if (!n || n <= 0) {
      console.error("Invalid number of points: ", n);
      return;
    }
  
    // Calculate angle step for equal spacing
    const angleStep = 360 / n;
  
    // Create a container element (e.g., a div) to hold the points
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '300px'; // Adjust as needed
    container.style.height = '300px'; // Adjust as needed
    container.style.margin = '0 auto'; // Center the container
  
    // Calculate point positions and create DOM elements
    for (let i = 0; i < n; i++) {
      const angle = (angleStep * i) * Math.PI / 180; // Convert to radians
      const x = 150 * Math.cos(angle); // Calculate x-coordinate
      const y = 150 * Math.sin(angle); // Calculate y-coordinate
  
      const pointElement = document.createElement('span');
      pointElement.style.position = 'absolute';
      pointElement.style.left = `${x + 150}px`; // Adjust for center of container
      pointElement.style.top = `${y + 150}px`; // Adjust for center of container
      pointElement.style.width = '5px'; // Adjust size as needed
      pointElement.style.height = '5px'; // Adjust size as needed
      pointElement.style.borderRadius = '50%'; // Create a circle
      pointElement.style.backgroundColor = 'black'; // Adjust color as needed
  
      container.appendChild(pointElement);
    }
  
    // Append the container to the body (or desired location)
    document.body.appendChild(container);
  }