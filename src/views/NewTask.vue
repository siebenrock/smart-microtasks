<template>
  <span>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Description</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Details</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Reward</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-5" color="grey lighten-1" height="200px"
            >Step 3</v-card
          >

          <v-btn color="primary" @click="e1 = 2">
            Continue
          </v-btn>

          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-5" color="grey lighten-1" height="200px"
            >Step 2</v-card
          >

          <v-btn color="primary" @click="e1 = 3">
            Continue
          </v-btn>

          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-5" color="grey lighten-1" height="200px"
            >Step 3</v-card
          >

          <v-btn color="primary" @click="e1 = 1">
            Continue
          </v-btn>

          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </span>
</template>

<script>
export default {
  data() {
    return {
      e1: 0,
    };
  },
};
</script>

<style scoped></style>
