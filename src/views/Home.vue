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
        <v-flex v-for="i in 4" :key="`3${i}`" xs3>
          <v-card dark color="secondary">
            <v-card-text class="px-0">3</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
.home-hero {
  width: 100%;
  height: 20%;
}
</style>
