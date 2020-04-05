<template>
  <div id="boardblock" :style="{ width: widthX + 'px', height: widthY + 'px' }">
    <table class="board">
      <tr v-for="row in tiles" :key="row.id" class="row">
        <div v-for="cell in row.nodes" :key="cell.id" class="cell">
          <div v-if="cell.state == 0" @click="inspectTile(row.id, cell.id)">
            <Tile :sizex=largeTileWx(row.length) :sizey=largeTileWy(tiles.length) :luck=0 />
          </div>
          <div v-else-if="cell.state == 1 && depth < 6" >
            <TilesGame :widthX=largeTileWx(row.length) :widthY=largeTileWy(tiles.length) :depth=increment(depth) />
          </div>
        </div>
      </tr>
    </table>
  </div>
</template>

<script>
import Tile from './Tile.vue'
import TilesGame from './TilesGame.vue'

export default {
  name: 'TilesGame',
  components: {
    Tile,
    TilesGame
  },
  props: {
    widthX: Number,
    widthY: Number,
    depth: Number
  },
  data () {
    return {
      tiles: []
      // tiles: [{ id: 0, nodes: [{id: 0, nodes: []},
      //                         {id: 1, nodes: []},
      //                         {id: 2, nodes: []}]},
      //         { id: 1, nodes: [{id: 3, nodes: []},
      //                         {id: 4, nodes: []},
      //                         {id: 5, nodes: []}]},                             
      //         { id: 2, nodes: [{id: 6, nodes: []},
      //                         {id: 7, nodes: []},
      //                         {id: 8, nodes: []}]},                             
      //       ]
      }
  },
  methods: {
    newBoard: function() {
      var size = Math.trunc(Math.random() * 10) + 2; 
      var i, j;
      for (i = 0; i < size; i++) {
          var row = []
          for (j = 0; j < size; j++) {
              row.push({
                id: j,
                state: 0,
                nodes: []
              })
          }
          this.tiles.push({
            id: i,
            state: 0,
            nodes: row
          })
      }
    },
    largeTileWx: function(n) {
      return Math.trunc(this.widthX / n)
    },
    largeTileWy: function(n) {
      return Math.trunc(this.widthY / n)
    },
    inspectTile: function(rowId, cellId) {
      var row = this.tiles.filter(function(rows) {
        if (rows.id == rowId) return rows
      })
      var cell = row[0].nodes.filter(function(cells) {
        if (cells.id == cellId) return cells
      })
      cell[0].state = cell[0].state ^ 1
    },
    increment: function(x) {
      return x + 1
    }
  },
  created() {
    this.newBoard()
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board {
  position: relative;
  display: table;
  margin: 0 auto;
}
.board .row {
  display: table-row;
}
.board .cell {
  display: table-cell;
}
</style>
