<template>
  <span>
    <v-container fluid fill-height class="home-hero">
      <v-layout justify-center align-center column pa-5>
        <h1>Open Tasks</h1>
      </v-layout>
    </v-container>

    <v-tabs fixed-tabs color="rgba(255, 0, 0, 0)">
      <v-tab to="/open" @click="tab = 0">Open Tasks</v-tab>
      <v-tab to="/completed" @click="tab = 1">Completed Tasks</v-tab>
      <v-tab to="/validated" @click="tab = 2">Validated Tasks</v-tab>
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
