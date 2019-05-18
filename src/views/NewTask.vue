<template>
  <span>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-container fill-height>
          <v-stepper-step :complete="e1 > 1" step="1"
            >Description</v-stepper-step
          >
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2">Details</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">Reward</v-stepper-step>
        </v-container>
      </v-stepper-header>

      <v-stepper-items>
        <v-container fill-height>
          <v-stepper-content step="1">
            <v-textarea
              outline
              name="Description"
              label="Description"
              value="Please enter a detailed description of the task."
              clearable="true"
              autofocus="true"
            ></v-textarea>

            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-layout justify-center align-center>
              <v-date-picker
                v-model="picker"
                first-day-of-week="1"
              ></v-date-picker>
            </v-layout>

            <v-btn color="primary" @click="e1 = 3">
              Continue
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-5" color="grey lighten-1" height="200px"
              >Step 3</v-card
            >

            <v-text-field
              label="MyAddress"
              placeholder="00000"
              disabled="true"
              outline
            ></v-text-field>

            <v-text-field
              label="MyAddress"
              placeholder="00000"
              clearable="true"
              autofocus="true"
              outline
            ></v-text-field>

            <v-btn color="primary" @click="e1 = 1">
              Continue
            </v-btn>
          </v-stepper-content>
        </v-container>
      </v-stepper-items>
    </v-stepper>
  </span>
</template>

<script>
export default {
  data() {
    return {
      e1: 0,
      picker: new Date().toISOString().substr(0, 10),
    };
  },
};
</script>

<style scoped>
li a {
  text-decoration: none;
}
div {
  text-decoration: none;
}
</style>
