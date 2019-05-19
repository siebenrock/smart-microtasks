<template>
  <span>
    <v-card color="white">
      <v-card-title primary-title>
        <div>
          <h3 class="headline">{{ taskData.title }}</h3>
          <div>
            Deadline: <i>{{ taskData.dueDate }}</i>
          </div>
          <div>
            Reward: <i>{{ taskData.reward }} ETH</i>
          </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <!-- <v-btn flat color="blue" @click="dialog = true">View Details</v-btn> -->

        <v-dialog v-model="dialog" width="500">
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
  data() {
    return {
      dialog: false,
      taskData: {
        title: "Test",
        dueDate: "2019-05-15",
        reward: 0.05,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    };
  },
};
</script>

<style scoped>
.headline {
  margin-bottom: 12px;
}
</style>
