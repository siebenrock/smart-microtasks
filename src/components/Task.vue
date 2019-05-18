<template>
  <v-card color="white">
    <v-card-title primary-title>
      <div>
        <h3 class="headline">Task</h3>
        <div>Deadline: <i>2019-05-15</i></div>
        <div>Reward: <i>$5.00</i></div>
      </div>
    </v-card-title>

    <v-card-actions>
      <TaskDialog :taskProp="taskData"></TaskDialog>
    </v-card-actions>
  </v-card>
</template>

<script>
import TaskDialog from "@/components/TaskDialog";

export default {
  name: "Task",
  components: {
    TaskDialog,
  },
};
</script>

<style scoped>
.headline {
  margin-bottom: 12px;
}
</style>
