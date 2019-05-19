<template>
  <span>
    <v-container fluid fill-height class="home-hero">
      <v-layout justify-center align-center column pa-5>
        <h1>Open Tasks</h1>

        <v-layout row wrap>
          <v-card dark color="light-blue darken-2" class="me">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="white">perm_identity</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Max Mustermann</v-list-tile-title>
                <v-list-tile-sub-title>Name</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-card>
          <v-card dark color="light-blue darken-2" class="me">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="white">language</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{walletAddress}}</v-list-tile-title>
                <v-list-tile-sub-title>Address</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-card>
        </v-layout>
      </v-layout>
    </v-container>

    <v-tabs fixed-tabs color="rgba(255, 0, 0, 0)">
      <v-tab @click="tab = 0">Open</v-tab>
      <v-tab @click="tab = 1">Completed</v-tab>
      <v-tab @click="tab = 2">Validated</v-tab>
      <!-- to="/validated"  -->
    </v-tabs>

    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex v-for="task in allTasks" :key="task.id" xs6 md3> 
          <Task :task="task"></Task>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
import Task from "@/components/Task";
import MTMTContractWorker from "@/MTMTContractWorker";

export default {
  methods:{
    upload: function() {
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
      const photo = document.getElementById("photo");
      console.log(photo.files[0])
      reader.readAsArrayBuffer(photo.files[0]); // Read Provided File
    }
  },
  name: "home",
  components: {
    Task
  },
  data() {
    return {
      tab: 0,
      contractWorker: new MTMTContractWorker(this.$store)
    };
  },
  mounted () {  
    this.contractWorker.getAllTasks()
  },
  computed: {
    allTasks () {
      return this.$store.getters['getAllTasks'];
    },
    walletAddress () {
      return this.$store.getters['getWalletAddress']
    }
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 15px;
}
.home-hero {
  width: 100%;
  height: 250px;
  padding-bottom: 20px;
}
.me {
  padding: 5px;
  margin: 5px;
  width: 250px;
  height: 56px;
}
</style>
