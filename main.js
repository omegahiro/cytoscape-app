import cytoscape from 'cytoscape' // cytoscapeをインポート

// HTMLの初期構成
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Cytoscape.js Sample</h1>
    <div id="cy" style="width: 800px; height: 600px; border: 1px solid black;"></div>
  </div>
`

// Cytoscape.jsのインスタンスを作成
const cy = cytoscape({
  container: document.querySelector('#cy'), // グラフを描画するDOM要素

  elements: [ // グラフのノードとエッジの定義
    { data: { id: 'a' } },
    { data: { id: 'b' } },
    { data: { id: 'c' } },
    { data: { id: 'd' } },
    { data: { id: 'e' } },

    { data: { source: 'a', target: 'b' } },
    { data: { source: 'b', target: 'c' } },
    { data: { source: 'c', target: 'd' } },
    { data: { source: 'd', target: 'e' } },
    { data: { source: 'e', target: 'a' } }
  ],

  style: [ // グラフのスタイル設定
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 2,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ],

  layout: { // レイアウトの設定
    name: 'grid',
    rows: 2
  }
})
