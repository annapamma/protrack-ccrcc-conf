<template>
  <v-app>
    <introduction />
    <main class="main">
        <input-container class="input-container-main" />
        <sample-dashboard :style="showSampleDashboard" view="SampleDashboard" /> 
       <heatmap-container :style="showHeatmap" view="Heatmap"  />
        <!--  <boxplot-container :style="showBoxplot" view="Boxplot" />-->
    </main>
  </v-app>
</template>

<script>
// import BoxplotContainer from './components/BoxplotContainer.vue';
// import Demo from './components/Demo.vue';
import HeatmapContainer from './components/HeatmapContainer.vue';
import InputContainer from './components/InputContainer.vue';
import Introduction from './components/Introduction.vue';
import SampleDashboard from './components/SampleDashboard.vue';

export default {
  name: 'App',

  components: {
    // BoxplotContainer,
    // Demo,
    HeatmapContainer,
    InputContainer,
    Introduction,
    SampleDashboard,
  },

  data: () => ({
  }),

  computed: {
    view() { return this.$store.state.view },
    showBoxplot() { return this.view === 'Boxplot' ? "" : "display: none;" },
    showDemo() { return this.view === 'Demo' ? "" : "display: none;" },
    showHeatmap() { return this.view === 'Heatmap' ? "" : "display: none;" },
    showIprofun() { return this.view === 'Iprofun' ? "" : "display: none;" },
    showSampleDashboard() { return this.view === 'Sample dashboard' ? "" : "display: none;" },
    showScatterplot() { return this.view === 'Scatterplot' ? "" : "display: none;" },
  },

  // mounted() { this.$store.dispatch('sortSamples', { asc: true, series: 'Gender' }) }
};
</script>

<style scoped>
html {
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.main {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
</style>