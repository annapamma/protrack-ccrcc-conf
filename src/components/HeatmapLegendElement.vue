<template>
  <div class="heatmap-legend-element" style="display: flex; flex-direction: column;">
      <div>{{ track }}</div>
      <v-btn-toggle multiple v-model="shownFeatures">
        <div style="display: flex; flex-direction: column;">
            <v-btn
                v-for="el in trackData"
                :key="el.value"
                :value="el.value"
                small
                :class="getTextColor(el)"
                elevation="0"
                :plain="!el.value"
                :color="getBackgroundColor(el)"
            >
                <span style="">
                    {{ getButtonLabel(el) }}
                </span>
            </v-btn>

        </div> 
      </v-btn-toggle>
  </div>
</template>

<script>
export default {
    name: "heatmap-legend-element",

    props: ['track', 'trackData'],

    data: () => ({
        shownFeatures: [],
        isLoaded: false,
    }),

    computed: {
        trackIsUngrouped() { return Object.keys(this.$store.state.trackDetails).includes(this.track) },
    },

    methods: {
        getButtonLabel(el) {
            if (el.label.length === 0) { return 'Missing value' }
            
            // if (el.label.includes('.')) { return el.label.split('.')[0] }
            
            // if (el.label.includes(',')) { return el.label.split(',').join(',\n') }
            //  ? el.label.split('.')[0] : 'Missing value' }}
            return el.label

        },
        getBackgroundColor(el) {
            return this.shownFeatures.includes(el.value) ? hexToRgbA(el.color) : '#ffffff'
        },
        getTextColor(el) {
            let res = {
                'black--text': false,
                'white--text': false,
                'disable-events': !this.trackIsUngrouped,
                'cursor-not-allowed': !this.trackIsUngrouped,
            }
            // if (!el.value || !this.shownFeatures.includes(el.value)) { 
            //     res['black--text'] = true 
            // } else {
            //     res['white--text'] = true
            // }            
            res['black--text'] = true 

            return res
        },
        
    },

    watch: {
        shownFeatures() {
            if (this.isLoaded && this.trackIsUngrouped) {
                this.$store.dispatch('updateShownFeatures', 
                { track: this.track, shownFeatures: this.shownFeatures }) 
            }
            this.isLoaded = true
        },
    },

    mounted() { 
        this.shownFeatures = this.trackData.map(el => el.value) 
    }

}

function hexToRgbA(hex){
    return hex
    // var c;
    // if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    //     c= hex.substring(1).split('');
    //     if(c.length== 3){
    //         c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    //     }
    //     c= '0x'+c.join('');
    //     return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.7)';
    // }
    // throw new Error('Bad Hex');
}

</script>

<style>
.heatmap-legend-element {
    width: 100%;
    margin-top: 10px;
    min-width: 120px;
}

.heatmap-legend-element .v-btn {
    border: solid 1px #000000;
}

.disable-events {
  pointer-events: none;
}
</style>