<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="light-blue darken-3"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              {{ item.title }}
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="light-blue darken-4" dark>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-chip color="blue darken-3" class="margin-left"
        >My Balance: 0.32 ETH</v-chip
      >

      <v-spacer class="hidden-sm-and-down"></v-spacer>

      <router-link :to="{ name: 'home' }">
        <v-btn flat class="hidden-sm-and-down">Overview</v-btn>
      </router-link>

      <router-link :to="{ name: 'about' }">
        <v-btn flat class="hidden-sm-and-down">About</v-btn>
      </router-link>

      <router-link :to="{ name: 'newTask' }">
        <v-btn color="light-blue darken-2" class="hidden-sm-and-down"
          >New Task</v-btn
        >
      </router-link>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      appTitle: "Microtasks",
      drawer: false,
      items: [{ title: "Menu" }, { title: "Sign In" }, { title: "Sign Up" }],
    };
  },
};
</script>

<style scoped>
nav a {
  text-decoration: none;
}
.margin-left {
  margin-left: 20px;
}
</style>
