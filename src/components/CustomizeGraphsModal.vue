<template>
  <div class="customize-graphs-modal">
        <div style="font-size: 1.2em; font-weight: bold; display: flex; flex-direction: row; justify-content: space-between;">
            <span>Drag graphs to order</span>
            <b-button type="is-text" size="is-small" @click="clearGraphs">Clear all</b-button>
        </div>
        <draggable v-model="orderedGraphs" @start="drag=true" @end="drag=false">
            <div 
                class="list-element"
                v-for="element in orderedGraphs" 
                :key="`element-${element}`"
            >
            <b-checkbox 
                v-model="checkboxGroup"
                :native-value="element"
            >
            </b-checkbox>
            <div class="list-element-button">
                <span>{{element}}</span>
            </div>
            </div>
        </draggable>
    <b-button expanded rounded type="is-success" @click="updateShownGraphs">Save</b-button>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    data() {
        return {
            selectAll: true,
            orderedGraphs: [],
            checkboxGroup: [],
            tooltipOpen: false,
        }
    },
    components: {
        draggable,
    },
    computed: {
        sampleDashboardGraphs() { return this.$store.state.sampleDashboardGraphs },
        filteredGraphs() { return this.$store.state.filteredGraphs },
    },
    methods: {
        clearGraphs() { this.checkboxGroup = [] },
        updateShownGraphs() {
            this.$store.dispatch('setFilteredGraphs',
                { filteredGraphs: this.orderedGraphs.filter(el => this.checkboxGroup.includes(el)) }
            )
            this.$modal.hide('customizeGraphsModal')
        }
    },
    mounted() {
        this.orderedGraphs = [...this.sampleDashboardGraphs]
        this.checkboxGroup = [...this.filteredGraphs]
    }

}
</script>

<style>
.customize-graphs-modal {
    padding: 20px;
}

.show-track-options {
    display: flex;
    flex-direction: column;
}

.show-track-options-checkbox {
    margin: 2px;
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
</style>