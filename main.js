import cytoscape from 'cytoscape' // cytoscapeをインポート

// HTMLの初期構成
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Cytoscape.js Sample</h1>
    <div id="cy" style="width: 800px; height: 600px; border: 1px solid black;"></div>
    <button id="addNode">Add Node</button>
    <button id="addEdge">Add Edge</button>
  </div>
`

// Cytoscape.jsのインスタンスを作成
const cy = cytoscape({
  container: document.getElementById('cy'),
  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(name)',
        'text-valign': 'center',
        'text-halign': 'center',
        'background-color': '#0074D9',
        'color': '#fff',
        'text-outline-color': '#0074D9',
        'text-outline-width': 2
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 4,
        'line-color': '#ddd',
        'target-arrow-color': '#ddd',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier',
        'label': 'data(name)',
        'text-background-opacity': 1,
        'text-background-color': 'white'
      }
    }
  ],
  elements: []
});

let nodeNameCounter = 0;
let edgeNameCounter = 0;

function addNode() {
  nodeNameCounter++;
  cy.add({
    data: { name: `n${nodeNameCounter}` },
    position: { x: Math.random() * 800, y: Math.random() * 600 }
  });
}

function addEdge() {
  const nodes = cy.nodes();
  if (nodes.length < 2) {
    return;
  }
  const sourceNode = nodes[Math.floor(Math.random() * nodes.length)];
  let targetNode = nodes[Math.floor(Math.random() * nodes.length)];
  while (sourceNode === targetNode) {
    targetNode = nodes[Math.floor(Math.random() * nodes.length)];
  }
  edgeNameCounter++;
  cy.add({
    data: {
      source: sourceNode.id(),
      target: targetNode.id(),
      // name: `${sourceNode.data('name')}-${targetNode.data('name')}`
      name: `e${edgeNameCounter}`
    }
  });
}


document.getElementById('addNode').addEventListener('click', addNode);
document.getElementById('addEdge').addEventListener('click', addEdge);


