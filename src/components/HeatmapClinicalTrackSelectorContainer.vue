<template>
  <div class="heatmap-clinical-track-selector-container">
    <div>
        <div v-for="tracks, category in categoryTracks" :key="category">
            <heatmap-clinical-track-selector 
                :category="category" 
                :tracks="tracks"
                @childevent="updateparent"
            />
        </div>
    </div>
    <v-btn 
        elevation=1 
        class="yellow lighten-4 mt-4" 
        @click="setClinicalTracks">
        Redraw
    </v-btn>
  </div>
</template>

<script>
import HeatmapClinicalTrackSelector from './HeatmapClinicalTrackSelector.vue'

export default {
    components: {
        HeatmapClinicalTrackSelector
    },
    name: "heatmap-clinical-track-selector-container",

    computed: {
        categoryTracks() { return this.$store.state.categoryTracks },
        trackDetails() { return this.$store.state.trackDetails },
        // filteredCategoryTracks() {},
    },

    data: () => ({
        categoryTracksFiltered: {},
        lockTracks: [],
        selected: [],
    }),

    watch: {
    },

    methods: {
        setClinicalTracks() {
            this.$store.dispatch(
                'setCategoryTracksFiltered', 
                { categoryTracksFiltered: this.categoryTracksFiltered }
            )
        },
        updateparent({ category, shownTracks }) {
            this.categoryTracksFiltered[category] = shownTracks
        }
    },

    mounted() { 
        this.filteredCategoryTracks = {...this.categoryTracks}
    },
}
</script>

<style>
.heatmap-clinical-track-selector-container {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}

.sort-buttons-container {
    text-align: center;
    background-color: #ebebeb;
    padding: 10px;
    margin: 4px;
}

.sort-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.lock-element {
    border: solid 1px #ebebeb;
}

.lock-element-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>