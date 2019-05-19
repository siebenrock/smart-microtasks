<template>
  <span>
    <v-card color="white">
      <v-card-title primary-title>
        <div>
          <h3 class="headline">{{ taskData.title }}</h3>
          <div>
            Due: <i>{{ taskData.dueDate }}</i>
          </div>
          <div>
            Reward: <i>{{ taskData.reward }} ETH</i>
          </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <!-- <v-btn flat color="blue" @click="dialog = true">View Details</v-btn> -->

        <v-dialog v-model="dialog" width="95%" maxWidth="600px">
          <template v-slot:activator="{ on }">
            <v-btn flat color="blue" @click="dialog = true">
              View Details
            </v-btn>
          </template>

          <v-card>
            <span>
              <v-card-title class="headline blue-grey lighten-5" primary-title>
                {{ taskData.title }}
              </v-card-title>

              <v-card-text>
                <div>
                  Deadline: <i>{{ taskData.dueDate }}</i>
                </div>
                <div>
                  Reward: <i>{{ taskData.reward }} ETH</i>
                </div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text>
                {{ taskData.description }}
              </v-card-text>

              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue" flat @click="dialog = false">
                  Close
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="blue" flat @click="dialog = false">
                  Task Completed
                </v-btn>
              </v-card-actions>
            </span>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </span>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
  },
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    taskData () {
      return this.task;
    }
  }
};
</script>

<style scoped>
.headline {
  margin-bottom: 12px;
}
</style>
