<template>
    <div class="input-sample-dashboard">
        <v-select
          :items="tracks"
          v-model="barplotCategory"
          label="Stratify samples by: "
          outlined
          dense
          single-line
        ></v-select>
        <v-switch
            v-model="showText"
            label="Show counts on bar graph"
        ></v-switch>
        <!-- <div class="cohort-list">
           <div style="background: #e3e3e3; text-align: center; margin: 2px; padding: 5px;">
               <b>Cohort query results</b>
               <p style="background: white;">Click graph legends to filter samples</p>
            </div>
            Samples: 
        </div>  -->
    </div>
</template>

<script>
export default {
    name: "input-sample-dashboard",
    data() {
        return {
        }
    },
    computed: {
        barplotCategory: {
            get() { return this.$store.state.barplotCategory },
            set(barplotCategory) { this.$store.dispatch('setBarplotCategory', { barplotCategory } )}
        },
        showText: {
            get() { return this.$store.state.showText },
            set(showText) { this.$store.dispatch('setShowText', { showText } )}
        },
        cohortSamples() { return this.$store.state.sampleOrder },
        // cohortOpts() { 
        //     let res = {} 
        //     let total = []
        //     this.sortedFilteredTumors.forEach((tumor) => {
        //         let tumorSamples = this.filteredTumorCounts[tumor]
        //         const samples = [...tumorSamples].filter(sample => this.cohortSamples.includes(sample))
        //         total = [...total, ...samples]
        //         res[tumor] = {
        //             label: tumor,
        //             samples,
        //             copyIcon: 'clipboard-multiple-outline',
        //         }
        //     })
        //     res['Total'] = {
        //         label: 'Total',
        //         samples: total,
        //         copyIcon: 'clipboard-multiple-outline',
        //     }
        //     return res
        // },
        // filteredTumorCounts() {
        //     return Object.fromEntries(
        //         Object.entries(this.tumorCounts)
        //             .filter(([tumor, ]) => this.filteredTumors[tumor])
        //     )
        // },
        // filteredTumors() { return this.$store.state.filteredTumors },
        // sortedFilteredTumors() {
        //     let tumors = Object.keys(this.filteredTumors)
        //     tumors.sort()
        //     return tumors
        // },
        tracks() { return this.$store.state.sampleDashboardGraphs },
    },
    methods: {
        // setCustomCohort(samples) {
        //     this.$store.dispatch('setCustomCohort',  { samples })
        //     this.$store.dispatch('toggleUseCustomCohort',  { useCustomCohort: true })
        //     this.$store.dispatch('setView',  { view: 'Heatmap' })
        //     // this.$store.dispatch('updateActiveTabHeatmap', 1)
        // },
        // setGraphs() {
        //     this.$store.dispatch('setFilteredGraphs', 
        //         { filteredGraphs: this.orderedGraphs.filter(el => this.checkboxGroup.includes(el)) }
        //     )
        // },
        // showModal() {
        //     this.$modal.show('customizeGraphsModal')
        // },
        // copySamples(text) {
        //     if (text.length === 0) {
        //         this.hoverLabel = 'No samples to copy'
        //         this.$copyText('')
        //         return
        //     }
        //     this.hoverLabel = 'Copied!'
        //     this.$copyText(text)
        // },
    },
    watch: {
        // selectAll() {
        //     if (this.selectAll) {
        //         this.checkboxGroup = [...this.sampleDashboardGraphs]
        //     } else {
        //         this.checkboxGroup = []
        //     }
        // }
    },
    mounted() {
    }
}
</script>

<style scoped>
    .cohort-menu {
        margin: 2px;
    }
    
    .cohort-list a {
        text-decoration-style: dotted;
    }

    .input-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }


    .list-element {
        cursor: grab;
        margin: 0 auto;
        width: 100%;
        margin-bottom: 2px;
        display: flex;
        flex-direction: row;
        justify-content: left;
    }

    .list-element-button {
        border: solid 1px #bebebe;
        /* border-radius: 10%; */
        margin-right: 5px;
        width: 100%;
        /* width: 260px; */
        padding: 5px;
        overflow-wrap: break-word;
        /* text-overflow: wrap; */
        /* font-size */
    }

    .input-sample-dashboard {
        max-width: 300px;
        min-width: 300px;
        margin-top: 500px;
        overflow-y: scroll;
        margin: 0 auto;
        font-size: 0.9em;
        display: flex;
        flex-direction: column;
    }

    .cohort-list {
        border: solid 1px #bebebe;
        width: 80%;
        margin: 0 auto;
        padding: 10px;
        margin-bottom: 20px;
        font-size: 1.2em;
    }
</style>