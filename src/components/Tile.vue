<template>
    <td class="tile-outer" :style="{ width: sizex + 'px', height: sizey + 'px' }">
        <div class="tile">
            <div class="tile-inner">
                <span class="tile-place">
                    {{ fortune() }}                    
                </span>
            </div>
        </div>
    </td>    
</template>

<script>
export default {
  name: 'TilesGame',
  props: {
    sizex: Number,
    sizey: Number,
    luck: Number
  },
  methods: {
      fortune: function() {
          return "tbd!"
      }
  }
}
</script>

<style scoped>
.tile-outer {
    margin: 0 auto;
    border-radius:0.25em;
    background-color: #888;    
    vertical-align: middle;
}

.tile {
    display: block;
    width: 70%;
    height: 70%;
    margin: 0 auto;
    background-color: #aaa;
    padding: 0.25em;
}

.tile-inner {
    width: 100%;
    display: block;
    top: 45%;
    position: relative;
}

.tile-place {
  font-family:Arial, Helvetica, sans-serif;
  font-size:16px;
    text-align: center;
}
</style>