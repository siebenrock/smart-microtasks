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
        <v-flex v-for="task in allTasks" :key="task.id" xs3> 
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
.home-hero {
  width: 100%;
  height: 20%;
}
</style>
