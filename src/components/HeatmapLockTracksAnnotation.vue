<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                color="blue-grey"
                x-small
                class="mt-5 ml-1"
                v-bind="attrs"
                v-on="on"
            >
            <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
      </template>

      <v-card>

        <v-card-text class="pt-5">
            <div style="font-size: 1.3em;">
            <p>You can use the "Lock tracks" functionality for greater customization when you're sorting samples across the heatmap. </p>
            <p>Choose the clinical tracks and set them in the order you would like to lock them in. </p>
            <p>These locked tracks will sort then stay in place, the remaining tracks will sort while staying grouped within locked tracks. </p>
            <p style="font-weight: bold;">Examples:</p>
            </div>
            <div class="heatmap-lock-tracks-visual-example">
                <img src="@/assets/images/lock_track_ex1.png" width="500"/>
                <img src="@/assets/images/lock_track_ex2.png" width="500"/>
            </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Got it
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }


</script>