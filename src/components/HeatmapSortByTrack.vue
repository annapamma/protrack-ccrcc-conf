<template>
  <div class="sort-by-track">
      <div v-for="[k, v] in selectedData" :key="k">
          <b>{{k}}</b>: {{ v }}
      </div>
      <div class="sort-buttons-container" v-if="selectedSeries">
          <div><b>Sort by {{ selectedSeries }}:</b></div>
          <div class="sort-buttons">
            <v-btn
                v-for="(v, k) in sortButtons"
                :key="k"
                elevation="2"
                raised
                color="cyan lighten-2"
                @click="sortBySeries({ asc: v.asc })"
            >
                <v-icon left>{{ v.icon }}</v-icon>
                {{ v.label }}
            </v-btn>
          </div>
      </div>
      <div v-else>
          Click any track element on heatmap to enable sorting
      </div>

    <div class="lock-tracks-switch">
        <v-switch
        v-model="heatmapLockTracks"
        label='Lock tracks when sorting columns'
        >
        </v-switch>
        <heatmap-lock-tracks-annotation />
    </div>
    <!-- <v-switch
      v-model="heatmapLockTracks"
      label="Lock tracks"
    ></v-switch> -->
    <div v-if="heatmapLockTracks && lockTracks.length > 0">
        <div>Locking by: </div>
        <draggable v-model="lockTracks" @start="drag=true" @end="drag=false">
            <div class="lock-element" v-for="track of lockTracks" :key="track">
                <div class="lock-element-content">
                    <span>
                        <v-icon>
                            mdi-arrow-up-down
                        </v-icon>
                        {{track}}
                    </span> 
                    <v-btn v-if="lockTracks.length > 1" icon xSmall @click="removeTrack(track)">
                        <v-icon dark>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </div>
            </div>
        </draggable>
          <v-autocomplete
            v-model="selectTrack"
            :items="heatmapTracks.filter(track => !lockTracks.includes(track))"
            xSmall
            label="Add track to lock by"
            hide-details
            prepend-icon="mdi-plus"
            append-icon=""
          ></v-autocomplete>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import heatmapLockTracksAnnotation from './HeatmapLockTracksAnnotation.vue'

export default {
    components: {
        draggable,
        heatmapLockTracksAnnotation,
    },
    name: "sort-by-track",

    computed: {
        heatmapLockTracks: {
            get() { return this.$store.state.heatmapLockTracks },
            set(heatmapLockTracks) { this.$store.dispatch('setHeatmapLockTracks', { heatmapLockTracks }) },
        },
        selectedSample() { return this.$store.state.selectedSample },
        selectedSeries() { return this.$store.state.selectedSeries },
        selectedTissue() { return this.$store.state.selectedTissue },
        selectedValue() { return this.$store.state.selectedValue },
        selectedData() { 
            let res = [
                ['Selected series', this.selectedSeries],
                ['Selected sample', this.selectedSample],
                ['Selected value', this.selectedValue],
            ] 
            if (this.selectedTissue) {
                res.push(['Selected tissue', this.selectedTissue])
            }

            return res
        },
        heatmapTracks() { return Object.keys(this.$store.state.trackDetails) }
    },

    data: () => ({
        lockTracks: [],
        selectTrack: '',
        sortButtons: {
            asc: {
                label: 'Asc',
                icon: 'mdi-arrow-up-bold',
                asc: true,
            },
            desc: {
                label: 'Desc',
                icon: 'mdi-arrow-down-bold',
                asc: false,
            },
        }
    }),

    watch: {
        selectTrack() { this.addTrack() },
        lockTracks() { 
            const rev = [...this.lockTracks]
            rev.reverse()
            this.$store.dispatch('setHeatmapTracksToLock', { heatmapTracksToLock: rev })
        }
    },

    methods: {
        lockIdx(i) { return this.lockTracks.length > 1 ? i + 1 : '' },
        sortBySeries({ asc }) {
            this.$store.dispatch('sortSamples', { asc, series: this.selectedSeries })
        },
        removeTrack(track) { 
            const res = this.lockTracks.filter(el => el !== track) 
            this.lockTracks = res
        },
        addTrack() { 
            this.lockTracks.push(this.selectTrack) 
        },
    },

    mounted() { 
        const rev = [...this.$store.state.heatmapTracksToLock]
        rev.reverse()
        this.lockTracks = rev
    },
}
</script>

<style>
.sort-by-track {
    width: 100%;
    margin-top: 10px;
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

.lock-tracks-switch {
    display: flex;
    flex-direction: row;
}
</style>