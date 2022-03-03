<template>
  <div class="heatmap-legend">
    <div style="text-align: center; font-weight: bold;">Interactive Legend</div>
    <v-container>
      <v-row no-gutters>
        <v-col md="6">
          <heatmap-legend-element 
              v-for="(trackData, track) in col2"
              :key="track"
              :trackData="trackData"
              :track="track"
          />
        </v-col>
        <v-col md="6">
            <heatmap-legend-element 
              v-for="(trackData, track) in col1"
              :key="track"
              :trackData="trackData"
              :track="track"
          />
        </v-col>
      </v-row> 
    </v-container>
  </div>
</template>

<script>
import HeatmapLegendElement from './HeatmapLegendElement.vue'

export default {
  components: { HeatmapLegendElement },
    name: "heatmap-legend",

    computed: {
        categoryTracks() { return this.$store.state.categoryTracksFiltered },
        otherCategories() {
          return Object.entries(this.$store.state.categoryTracksFiltered)
            .filter(([category, tracks]) => category !== 'Ungrouped' && category !== 'Numerical' && tracks.length > 0)
            .map(([category, tracks]) => category)
        },
        ungrouped() { return this.$store.state.categoryTracksFiltered.Ungrouped },
        k_otherCategory_v_trackDetails() { 
          let res = {}
          this.otherCategories.forEach((otherCategory) => {
              const opts = this.categoryTracks[otherCategory]
              res[otherCategory] = this.trackDetails[opts[0]]
          })
          return res
        },
        trackDetails() { return this.$store.state.trackDetails },
    },

    data: () => ({
      col1: {},
      col2: {},
    }),

    mounted() {
      this.createColLists()
    },

    watch: {
      categoryTracks() { this.createColLists() },
    },

    methods: {
      createColLists() {
          let col1 = []
          let col2 = []
                    Object.entries(this.k_otherCategory_v_trackDetails)
            .forEach((track, i) => {
              // if (i % 2 === 0) {
                col2.push(track)
              // } else {
                // col2.push(track)
              // }
            })
          Object.entries(this.trackDetails)
            .filter(([name,]) => {
              return this.ungrouped.includes(name)
            }
            ).forEach((track, i) => {
              if (i % 2 === 0) {
                col1.push(track)
              } else {
                col2.push(track)
              }
            })

          this.col1 = Object.fromEntries(col1)
          this.col2 = Object.fromEntries(col2)
      }
    }
}
</script>

<style>
.heatmap-legend {
    width: 100%;
    margin-top: 50px;
    min-width: 500px;
}
</style>