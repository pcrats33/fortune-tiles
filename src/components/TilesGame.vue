<template>
  <div id="boardblock">
    <!-- widthX: width of this (sub)-board, also height
         tiles[0].nodes.length: tileMax-X
         tiles.length: tileMax-Y
    -->
    <template v-for="row in tiles">
      <template v-for="cell in row.nodes">
        <template v-if="cell.state == 0">
          <!-- pos[{{cell.id}}, {{row.id}}] -->
            <Tile :key="row.id+'-'+cell.id"
                  :gfxCanvas="gfxCanvas" :iX=cell.id :iY=row.id
                  :upperLeftX="tilePos(cell.id, largeTileSz(row.nodes.length, widthX), upperLeftX)"
                  :upperLeftY="tilePos(row.id, largeTileSz(tiles.length, widthY), upperLeftY)"
                  :upperLeftZ="depthZ(depth)" 
                  :sizex="largeTileSz(row.nodes.length, widthX)"
                  :sizey="largeTileSz(tiles.length, widthY)" 
                  :luck=0 
                  @tilePlucked="openTile($event)" />
        </template>
        <template v-else-if="cell.state == 1 && depth < 6" >
          <TilesGame :key="row.id+'-'+cell.id"
                     :gfxCanvas="gfxCanvas"
                     :upperLeftX="tilePos(cell.id, largeTileSz(row.nodes.length, widthX), upperLeftX)"
                     :upperLeftY="tilePos(row.id, largeTileSz(tiles.length, widthY), upperLeftY)"
                     :upperLeftZ="depthZ(depth)" 
                     :widthX="largeTileSz(row.nodes.length, widthX)"
                     :widthY="largeTileSz(tiles.length, widthY)"
                     :depth="increment(depth)" />
        </template>
      </template>
    </template>
  </div>
</template>

<script>
import Tile from './Tile.vue'
import TilesGame from './TilesGame.vue'
import * as BABYLON from 'babylonjs'


export default {
  name: 'TilesGame',
  components: {
    Tile,
    TilesGame
  },
  props: {
    gfxCanvas: Object,
    upperLeftX: Number,
    upperLeftY: Number,
    upperLeftZ: Number,
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

    tilePos: function(i, size, offs) {
      return i*size + offs
    },
    largeTileSz: function(len, size) {
        return size/len
    },
    depthZ: function(depth) {
      return 0.8 * depth;
    },
    openTile(pos) {
      // console.log("tile clicked " + pos.x + " x " + pos.y)
      this.inspectTile(pos.y, pos.x)
      let camera = this.gfxCanvas.activeCamera;
      BABYLON.Animation.CreateAndStartAnimation(
        "slideIn",
        camera,
        "position",
        60,
        4 * 60,
        camera.position,
        new BABYLON.Vector3(pos.actualX, pos.actualY, pos.actualZ),
        0
        // BABYLON.EasingFunction.CircleEase,
        // () => {
        //     BABYLON.Animation.CreateAndStartAnimation(
        //       "rotate",
        //       this.gfxCanvas.activeCamera,
        //       "rotation",
        //       60,
        //       4 * 60,
        //       this.gfxCanvas.activeCamera.rotation,
        //       new BABYLON.Vector3(0, 0, 0),
        //       0
        //     );    
        // }
      );
      
        BABYLON.Animation.CreateAndStartAnimation(
              "rotate",
              this.gfxCanvas.activeCamera,
              "rotation",
              60,
              4 * 60,
              this.gfxCanvas.activeCamera.rotation,
              new BABYLON.Vector3(0, 0, 0),
              0,
              BABYLON.EasingFunction.BackEase
            );  
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
  display: block;
  margin: 0 auto;
}
.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  clear: all;
}
.cell {
  display: inline-block;
  margin: 0.25em;
}
</style>
