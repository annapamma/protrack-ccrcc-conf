<template>
  <div class="input-boxplot-customize">
      <v-radio-group v-model="boxplotView" label="Organize boxplots:">
        <v-radio
          v-for="el in boxplotViews"
          :key="el.value"
          :label="el.label"
          :value="el.value"
        ></v-radio>
      </v-radio-group>

      <div v-if="boxplotView === 'byGene'">
        <v-select
          :items="boxplotGenes"
          label="Gene"
          v-model="boxplotGene"
        ></v-select>
      </div>

      <div v-if="boxplotView === 'byDataType'">
        <v-select
          :items="dataTypes"
          label="Data type"
          v-model="boxplotDataType"
        ></v-select>
      </div>
<!-- 
      <v-select
        :items="trackDetails"
        label="Stratify the Boxplots according to (x axis):"
        v-model="boxplotCategory2"
      ></v-select> -->

      <v-select
        :items="trackDetails"
        label="Stratify the Boxplots according to:"
        v-model="boxplotCategory"
      ></v-select>
  </div>
</template>

<script>
export default {
    name: "input-boxplot-customize",

    computed: {
      boxplotCategory: {
        get() { return this.$store.state.boxplotCategory },
        set(boxplotCategory) { this.$store.dispatch('setBoxplotCategory', { boxplotCategory }) }
      },
      boxplotDataType: {
        get() { return this.$store.state.boxplotDataType },
        set(boxplotDataType) { this.$store.dispatch('setBoxplotDataType', { boxplotDataType })},
      },
      boxplotGene: {
        get() { return this.$store.state.boxplotGene },
        set(boxplotGene) { this.$store.dispatch('setBoxplotGene', { boxplotGene })},
      },
      boxplotGenes() { return this.$store.state.boxplotGenes },
      boxplotView: {
        get() { return this.$store.state.boxplotView },
        set(boxplotView) { this.$store.dispatch('setBoxplotView', { boxplotView })},
      },
      trackDetails() { return Object.keys(this.$store.state.trackDetails) },
    },
    
    data: () => ({
      dataTypes: ['proteo', 'rna', 'phospho', 'glyco_glyco', 'phospho_glyco'],
      boxplotViews: [
        {
          value: 'byGene', 
          label: 'By Gene', 
        },
        {
          value: 'byDataType', 
          label: 'By Data Type', 
        },
      ],
    }),

    methods: {
    },
}
</script>

<style>
.input-boxplot-customize {
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