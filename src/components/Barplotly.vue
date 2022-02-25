<template>
    <div class="barplotly"> 
      <div :id="divId">
      </div>
    </div>
</template>

<script>
  import generateBarplot from '../plotly/barplotly'

  export default {
    name: "barplotly",
    props: ['divId', 'track'],
    data() {
      return {
      }
    },
    computed: {
      barplotCategory() { return this.$store.state.barplotCategory },
      colors() {
        let colors = this.trackDetails[this.track].map(el => [el.label, el.color])
        return Object.fromEntries(colors)
      },
      sampleMeta() { return this.$store.state.sampleMeta },
      showText() { return this.$store.state.showText },
      trackDetails() { return this.$store.state.trackDetails },
      view() { return this.$store.state.view },
    },
    watch: {
      barplotCategory() { this.renderBarplot() },
      showText() { this.renderBarplot() },
    },
    methods: {
      clickAutoScaleBarplot() {
        if (this.view === 'Sample dashboard') {
          // console.log('resize?')
          // let el = document.getElementById(this.divId)
          //   .querySelector('[data-title="Autoscale"]')
          // el.click()
        }
      },
      updateCohort({ cohort }) {
        this.$store.dispatch('updateCohort', { cohort })
      },
      renderBarplot() {
          let plot = generateBarplot( { 
            divId: this.divId,
            sampleMeta: this.sampleMeta,
            showText: this.showText,
            track: this.track,
            trackDetails: this.trackDetails,
            xAxisCategory: this.barplotCategory,
          })
        let vm = this
        // if (plot) {
        //   this.clickAutoScaleBarplot()
        //   const divId = this.divId
        //   const track = this.track
        //   // const updateCohort = this.updateCohort
        //   plot.on('plotly_afterplot', function(){      
        //       let cohort = []

        //       const traces = document.getElementById(divId).data
        //       const includedTraces = traces.filter(el => el.visible === undefined || el.visible === true)

        //       includedTraces.forEach((trace) => {
        //         cohort = [...cohort, trace.customdata]
        //       })

        //       // vm.updateCohort({ cohort })
        //   })
        // }
      },
    },

    mounted() {
      this.renderBarplot()
    },
    created() {
      window.addEventListener(
        "resize",
        this.clickAutoScaleBarplot
      )
    },
  }

</script>

<style scoped>
    .barplotly {
      border-top: solid 1px #ededed;
      width: 100%;
    }
</style>