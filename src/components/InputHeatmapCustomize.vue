<template>
  <div class="input-heatmap-customize">
    <v-expansion-panels focusable v-model="panel" multiple>

      <v-expansion-panel>
        <v-expansion-panel-header>
          Sort by track
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <heatmap-sort-by-track />
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
           Hide/show/reorder clinical tracks
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <heatmap-clinical-track-selector-container />
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
           Hide/show molecular data types
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <heatmap-data-type-selector />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-- <v-expansion-panel>
        <v-expansion-panel-header>
          Hide/show data types
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <heatmap-data-type-selector />
        </v-expansion-panel-content>
      </v-expansion-panel> -->

    </v-expansion-panels>
  </div>
</template>

<script>
import HeatmapSortByTrack from './HeatmapSortByTrack.vue'
import HeatmapDataTypeSelector from './HeatmapDataTypeSelector.vue'
import HeatmapClinicalTrackSelectorContainer from './HeatmapClinicalTrackSelectorContainer.vue'

export default {
    components: { 
      HeatmapSortByTrack,
      HeatmapClinicalTrackSelectorContainer,
      HeatmapDataTypeSelector,
    },
    
    name: "input-heatmap-customize",

    computed: {
    },
    
    data: () => ({
      panel: [0, 2], 
    }),

    methods: {
    },
}
</script>

<style>
.input-heatmap-customize {
    margin: 10px;
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>