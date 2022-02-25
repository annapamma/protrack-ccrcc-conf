<template>
    <div class="sample-dashboard">
      <div class="sample-dashboard-header">Stratified by: {{ barplotCategory }}</div>
      <v-container>
        <v-row no-gutters>
          <v-col md="6">
            <barplotly 
              v-for="colTrack in col1"
              :key="colTrack"
              :divId="`barplot-${colTrack}`"
              :track="colTrack"
            />
          </v-col>
          <v-col md="6">
              <barplotly 
                :key="colTrack"
                v-for="colTrack in col2"
                :divId="`barplot-${colTrack}`"
                :track="colTrack"
            />
          </v-col>
        </v-row> 
      </v-container>
    </div>
</template>

<script>
import Barplotly from './Barplotly.vue'

  export default {
    components: { Barplotly },
    name: "sample-dashboard",

    data: () => ({
      col1: [],
      col2: [],
      col3: [],
    }),
    
    computed: {
      barplotCategory() { return this.$store.state.barplotCategory },
      trackDetails() { return this.$store.state.trackDetails }, 
      graphs() { return this.$store.state.sampleDashboardGraphs },
    },

    mounted() {
      let colChunks = splitToChunks(
        [...this.graphs],
        2
      )
      this.col1 = colChunks[0]
      this.col2 = colChunks[1]
      // this.col3 = colChunks[2]
    }
  }


function splitToChunks(array, parts) {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}
</script>

<style scoped>
    .sample-dashboard {
        width: 75%;
        min-width: 600px;
        display: flex;
        flex-direction: column;
        margin: 10px;
        padding-left: 10px;
        overflow: scroll;
    }

    .sample-dashboard-header {
      margin: 0 auto;
      font-size: 1.2em;
      font-weight: bold;
    }
</style>