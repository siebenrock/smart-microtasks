<template>
  <span>
    <v-container fluid fill-height class="home-hero">
      <v-layout justify-center align-center column pa-5>
        <h1>Open Tasks</h1>
      </v-layout>
    </v-container>

    <v-tabs fixed-tabs color="rgba(255, 0, 0, 0)">
      <v-tab to="/open">Open Tasks</v-tab>
      <v-tab to="/completed">Completed Tasks</v-tab>
      <v-tab to="/validated">Validated Tasks</v-tab>
    </v-tabs>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs3>
          <v-card dark color="secondary">
        <form action="/">
          <fieldset>
            <legend>Upload photo</legend>
            <input type="file" name="photo" id="photo">
            <a @click="upload">Upload</a>
          </fieldset>
        </form>
        </br>
        </br>
        <a id="url"></a>
        </br>
        </br>
        <img id="output">
            <v-card-text class="px-0">3</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
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
};
</script>

<style scoped>
.home-hero {
  width: 100%;
  height: 20%;
}
</style>
