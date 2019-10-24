<template>
  <span>
    <v-card color="white">
      <v-card-title primary-title>
        <div>
          <h3 class="headline">{{ taskSampleData.title }}</h3>
          <div>
            Due: <i>{{ taskSampleData.dueDate }}</i>
          </div>
          <div>
            Reward: <i>{{ taskSampleData.reward }} ETH</i>
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
                {{ taskSampleData.title }}
              </v-card-title>

              <v-card-text>
                <div>
                  Deadline: <i>{{ taskSampleData.dueDate }}</i>
                </div>
                <div>
                  Reward: <i>{{ taskSampleData.reward }} ETH</i>
                </div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text>
                {{ taskSampleData.description }}
              </v-card-text>

              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue" flat @click="dialog = false">
                  Close
                </v-btn>
                <v-spacer></v-spacer>

                <v-dialog
                  v-model="dialogTaskComplete"
                  width="95%"
                  maxWidth="600px"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn flat color="blue" @click="dialogTaskComplete = true">
                      Do Task
                    </v-btn>
                  </template>

                  <v-card>
                    <span>
                      <v-card-title
                        class="headline blue-grey lighten-5"
                        primary-title
                      >
                        Confirm Task Completion
                      </v-card-title>

                      <v-card-text>
                        <div>
                          <form action="/">
                            <fieldset>
                              <legend>Upload Photo</legend>
                              <input
                                type="file"
                                name="photo"
                                :id="'photo' + taskData.id"
                              />
                              <v-btn
                                color="blue"
                                flat
                                @click="upload(taskData.id)"
                              >
                                Upload
                              </v-btn>
                            </fieldset>
                          </form>

                          <a id="url"></a>

                          <img id="output" />
                        </div>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-btn
                          color="blue"
                          flat
                          @click="dialogTaskComplete = false"
                        >
                          Close
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue"
                          flat
                          @click="
                            (dialogTaskComplete = false),
                              (dialog = false),
                              (this.snackbar = true)
                          "
                        >
                          Task Completed
                        </v-btn>
                      </v-card-actions>
                    </span>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </span>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>

    <v-snackbar v-model="snackbar" color="green" timeout="4000" vertical="true">
      Task completion successful!
      <v-btn dark flat @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </span>
</template>

<script>
import FileSerializer from "@/FileSerializer";

export default {
  methods: {
    upload: function(id) {
      console.log(id);
      const reader = new FileReader();
      reader.onloadend = function() {
        const ipfs = window.IpfsApi("localhost", 5001); // Connect to IPFS
        const buf = buffer.Buffer(reader.result); // Convert data into buffer
        ipfs.files.add(buf, (err, result) => {
          // Upload buffer to IPFS
          if (err) {
            console.error(err);
            return;
          }
          let url = `https://ipfs.io/ipfs/${result[0].hash}`;
          console.log(`Url --> ${url}`);
          document.getElementById("url").innerHTML = url;
          document.getElementById("url").href = url;
          document.getElementById("output").src = url;
        });
      };
      const photo = document.getElementById("photo" + id);
      console.log(photo.files[0]);
      let fs = new FileSerializer();
      fs.createZip(
        {
          title: "Test Task",
        },
        photo.files,
      );
      reader.readAsArrayBuffer(photo.files[0]); // Read Provided File
    },
  },
  name: "Task",
  props: {
    task: Object,
  },
  data() {
    return {
      dialog: false,
      dialogTaskComplete: false,
      snackbar: false,
      taskSampleData: {
        title: "Test",
        dueDate: "2019-05-25",
        reward: 0.002,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    };
  },
  computed: {
    taskData() {
      return this.task;
    },
  },
};
</script>

<style scoped>
.headline {
  margin-bottom: 12px;
}
</style>
