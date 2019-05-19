<template>
  <span>
    <v-container fluid fill-height class="home-hero">
      <v-layout justify-center align-center column pa-5>
        <h1>Open Tasks</h1>
      </v-layout>
    </v-container>

    <v-tabs fixed-tabs color="rgba(255, 0, 0, 0)">
      <v-tab @click="tab = 0">Open Tasks</v-tab>
      <v-tab @click="tab = 1">Completed Tasks</v-tab>
      <v-tab @click="tab = 2">Validated Tasks</v-tab>
      <!-- to="/validated"  -->
    </v-tabs>

    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex v-for="i in 16" :key="`3${i}`" xs3> <Task></Task></v-flex>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
import Task from "@/components/Task";

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
    Task,
  },
  data() {
    return {
      tab: 0,
    };
  },
};
</script>

<style scoped>
.home-hero {
  width: 100%;
  height: 20%;
}
</style>
