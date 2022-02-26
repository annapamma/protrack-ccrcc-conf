<template>
  <div class="boxplot-container">
    <div v-if="tracks && tracks.length > 0">
      <boxplot v-for="track in tracks" :key="track" :track="track" />
    </div>
  </div>
</template>

<script>
import Boxplot from './Boxplot.vue'

export default {
    components: { Boxplot },
    name: "boxplot-container",

    props: ['view'],

    data: () => ({
    }),
    
    computed: {
        boxplotGene() { return this.$store.state.boxplotGene },
        boxplotDataType() { return this.$store.state.boxplotDataType },
        boxplotView() { return this.$store.state.boxplotView },
        k_gene_v_tracks() { return this.$store.state[`${this.view}_k_gene_v_tracks`] },
        k_dataType_v_tracks() { 
          if (!this.k_gene_v_tracks) { return null }
          let dataTypes = {
            'proteo': [],
            'rna': [],
            'phospho': [],
            'glyco_glyco': [],
            'phospho_glyco': []
          }
          Object.keys(dataTypes).forEach((dataType) => {
            Object.entries(this.k_gene_v_tracks).forEach(([, tracks]) => {
              tracks.forEach((track) => {
                if (track.split(' ')[1] === dataType) {
                  dataTypes[dataType].push(track)
                }
              })
            })
          })

          return dataTypes
        },
        tracks() { 
          if (!this.k_gene_v_tracks) { return [] }

          if (this.boxplotView === 'byGene') {
              return this.k_gene_v_tracks[this.boxplotGene]
          }

          if (this.boxplotView === 'byDataType') {
            return this.k_dataType_v_tracks[this.boxplotDataType]
          }

          return []
        },
    },
}
</script>

<style>
.boxplot-container {
    width: 100%;
}
</style>