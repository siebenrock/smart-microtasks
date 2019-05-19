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
                        WORK_ON_TASK
                      </v-card-title>

                      <v-card-text>
                        <div>
                          <form action="/">
                            <fieldset>
                              <legend>Upload photo</legend>
                              <input type="file" name="photo" :id="'photo'+taskData.id">
                              <a type="button" @click="upload(taskData.id)">Upload</a>
                            </fieldset>
                          </form>
                          </br>
                          </br>
                          <a id="url"></a>
                          </br>
                          </br>
                          <img id="output">                        </div>
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-text>
                        INFO2
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
                            (dialogTaskComplete = false), (dialog = false)
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
  </span>
</template>

<script>
export default {
  methods:{
    upload: function(id) {
      console.log(id);
      const reader = new FileReader();
      reader.onloadend = function() {
        const ipfs = window.IpfsApi('localhost', 5001) // Connect to IPFS
        const buf = buffer.Buffer(reader.result) // Convert data into buffer
        ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
          if(err) {
            console.error(err)
            return
          }
          let url = `https://ipfs.io/ipfs/${result[0].hash}`
          console.log(`Url --> ${url}`)
          document.getElementById("url").innerHTML= url
          document.getElementById("url").href= url
          document.getElementById("output").src = url
        })
      }
      const photo = document.getElementById("photo"+id);
      console.log(photo.files[0])
      reader.readAsArrayBuffer(photo.files[0]); // Read Provided File
    }
  },
  name: "Task",
  props: {
    task: Object
  },
  data() {
    return {
      dialog: false,
<<<<<<< HEAD
      dialogTaskComplete: false,
      taskData: {
        title: "Test",
        dueDate: "2019-05-15",
        reward: 0.05,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    };
=======
    }
>>>>>>> develop
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
