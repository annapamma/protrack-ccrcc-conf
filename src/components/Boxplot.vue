<template>
  <div class="boxplot">
      <div :id="divId">
      </div>
  </div>
</template>

<script>
import boxplot from '../plotly/boxplotly'

export default {
    name: "boxplot",

    props: [ 'track' ],
    
    data: () => ({
        view: 'Boxplot',
    }),

    computed: {
        boxplotGenes() { return this.$store.state.boxplotGenes },
        boxplotCategory() { return this.$store.state.boxplotCategory },
        boxplotCategory2() { return this.$store.state.boxplotCategory2 },
        divId() { return `${this.track.split(' ').join('-')}-${this.view}` },
        k_gene_v_tracks() { return this.$store.state[`${this.view}_k_gene_v_tracks`] },
        k_track_v_data() { return this.$store.state[`${this.view}_k_track_v_data`] },
        sampleMeta() { return this.$store.state.sampleMeta },
    },

    watch: {
        boxplotCategory() { this.generateBoxplot() },
        boxplotCategory2() { this.generateBoxplot() },
        boxplotGenes() { this.generateBoxplot() },
        track() { this.generateBoxplot() },
        k_gene_v_tracks() { this.generateBoxplot() },
        k_track_v_data() { this.generateBoxplot() },
        sampleMeta() { this.generateBoxplot() },
    },

    methods: {
        generateBoxplot() { 
            boxplot({
                k_track_v_data: this.k_track_v_data,
                sampleMeta: this.sampleMeta,
                track: this.track,
                xAxisCategory: this.boxplotCategory,
                responseCategory: this.boxplotCategory2,
                divId: this.divId,
            })
        }
    },

    mounted() { this.generateBoxplot() }
}
</script>

<style>
.boxplot-container {
    width: 100%;
}
</style>