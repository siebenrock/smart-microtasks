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
                <v-list-tile-title>0xBB9bc2</v-list-tile-title>
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
  margin: 5px;
  width: 250px;
  height: 50px;
}
</style>
