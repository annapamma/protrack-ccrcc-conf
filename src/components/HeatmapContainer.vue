<template>
  <div class="heatmap-container">
    <div id="plotly-heatmap">
    </div>
    <heatmap-legend />
  </div>
</template>

<script>
import heatmap from '../plotly/heatmap'
import HeatmapLegend from './HeatmapLegend.vue'

export default {
  components: { HeatmapLegend },
    name: "heatmap-container",

    props: ['view'],

    computed: {
        categoryTracks() { return this.$store.state.categoryTracksFiltered },
        heatmapShownDataTypes() { return this.$store.state.heatmapShownDataTypes },
        k_gene_v_tracks() { return this.$store.state[`${this.view}_k_gene_v_tracks`] },
        k_track_v_data() { return this.$store.state[`${this.view}_k_track_v_data`] },
        sampleMeta() { return this.$store.state.sampleMeta },
        sampleOrderFiltered() { return this.$store.state.sampleOrderFiltered },
        trackDetails() { return this.$store.state.trackDetails },
    },

    watch: {
      categoryTracks() { this.renderHeatmap() },
      heatmapShownDataTypes() { this.renderHeatmap() },
      k_gene_v_tracks() { this.renderHeatmap() },
      k_track_v_data() { this.renderHeatmap() },
      sampleMeta() { this.renderHeatmap() },
      sampleOrderFiltered() { this.renderHeatmap() },
      trackDetails() {  this.renderHeatmap() },
    },

    methods: {
      renderHeatmap() {
        let plot = heatmap(
          {
            categoryTracks: this.categoryTracks,
            k_gene_v_tracks: this.k_gene_v_tracks,
            k_track_v_data: this.k_track_v_data,
            sampleMeta: this.sampleMeta,
            sampleOrder: this.sampleOrderFiltered,
            shownDataTypes: this.heatmapShownDataTypes,
            trackDetails: this.trackDetails,
          }
        )

        if (plot) {
          plot.on('plotly_click', (data) => {
            let selectedValue = null
            const selectedSeries = data.points[0].y
            const selectedSample = data.points[0].x

            if (selectedSeries in this.trackDetails || 
              this.categoryTracks.Numerical.includes(selectedSeries)) {
              selectedValue = this.sampleMeta[selectedSample][selectedSeries]

              this.$store.dispatch(
                'updateSelectedData',
                { selectedSeries: selectedSeries, 
                  selectedSample, 
                  selectedValue,
                  selectedTissue: null,
                }
              )
            } else {
              const selectedSeriesArr = selectedSeries.split(' ')
              const selectedTissue = selectedSeriesArr[selectedSeriesArr.length - 1]
              const selectedSeriesClean = selectedSeriesArr.slice(0, selectedSeriesArr.length - 1).join(' ')
              const sampleWithTissue = `${selectedSample}-${selectedTissue}`
              selectedValue = this.k_track_v_data[selectedSeriesClean][sampleWithTissue]

              this.$store.dispatch(
                'updateSelectedData',
                { selectedSeries: selectedSeriesClean, 
                  selectedSample, 
                  selectedTissue,
                  selectedValue 
                }
              )
            }

          })
        }
      }
    },

    mounted() { this.renderHeatmap() }
}
</script>

<style>
.heatmap-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: scroll;
}
</style>