<template>
  <div class="input-boxplot">
    <v-autocomplete
        v-model="boxplotGenes"
        :items="genes"
        outlined
        chips
        deletable-chips
        small-chips
        :menu-props="{closeOnContentClick: true}"
        dense
        :label="`Select up to ${maxGenes} genes`"
        multiple
        clearable
    >
    </v-autocomplete>

    <v-btn
        v-if="boxplotGenes.length > 0"
        :loading="loaderBoxplot"
        :disabled="loading || !valid"
        color="blue-grey"
        class="ma-2 white--text"
        @click="submitBoxplotGenes"
      >
        
        {{ valid ? 'Render boxplots' : 'Select fewer genes' }}
    </v-btn>
    <input-boxplot-customize />
  </div>
</template>

<script>
import InputBoxplotCustomize from './InputBoxplotCustomize.vue'

export default {
  components: { InputBoxplotCustomize },
    name: "input-boxplot",

    computed: {
        available() { return this.$store.state.available },
        loaderBoxplot() { return this.$store.state.loaderBoxplot },
        genes() { 
            const available = Object.keys(this.available)
            available.sort()
            return available
        },
        valid() { return this.boxplotGenes.length <= this.maxGenes && this.boxplotGenes.length > 0 },
    },
    
    data: () => ({
        boxplotGenes: ['A1BG'],
        loading: false,
        maxGenes: 10,
    }),


    methods: {
        submitBoxplotGenes() {
            this.$store.dispatch('submitBoxplotGenes', 
            { 
              view: 'Boxplot', 
              boxplotGenes: this.boxplotGenes 
            }
          )
        },
    },

    mounted() { this.submitBoxplotGenes() }
}
</script>

<style>
.input-boxplot {
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