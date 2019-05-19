<template>
  <span>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-container fill-height>
          <v-stepper-step :complete="e1 > 1" step="1"
            >Description</v-stepper-step
          >
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2">Due Date</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">Reward</v-stepper-step>
        </v-container>
      </v-stepper-header>

      <v-stepper-items>
        <v-container fill-height>
          <v-stepper-content step="1">
            <h2>Task Description</h2>
            <v-textarea
              outline
              name="Description"
              label="Description"
              value="Please enter a detailed description of the task."
              clearable="true"
              autofocus="true"
            ></v-textarea>
            <router-link :to="{ name: 'home' }">
              <v-btn flat>Back</v-btn>
            </router-link>
            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <h2>Task Due Date</h2>
            <v-layout justify-center align-center>
              <v-date-picker
                v-model="picker"
                first-day-of-week="1"
                :min="todayDate"
              ></v-date-picker>
            </v-layout>
            <v-btn flat @click="e1 = 1">Back</v-btn>
            <v-btn color="primary" @click="e1 = 3">
              Continue
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <h2>Completion Reward</h2>
            <v-text-field
              name="MyAddress"
              label="My Address"
              placeholder="00000"
              disabled="true"
              outline
            ></v-text-field>
            <v-text-field
              name="Reward"
              label="Reward"
              placeholder="0"
              clearable="true"
              autofocus="true"
              outline
            ></v-text-field>

            <v-btn flat @click="e1 = 2">Back</v-btn>
            <v-btn color="primary" @click="snackbar = true">
              Submit
            </v-btn>

            <v-snackbar
              v-model="snackbar"
              color="green"
              timeout="4000"
              vertical="true"
            >
              Task submission successful!
              <v-btn dark flat @click="snackbar = false">
                Close
              </v-btn>
            </v-snackbar>
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
      todayDate: new Date().toISOString().substr(0, 10),
      snackbar: false,
    };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
p {
  text-decoration: none;
}
div {
  text-decoration: none;
}
a {
  text-decoration: none;
}
</style>
