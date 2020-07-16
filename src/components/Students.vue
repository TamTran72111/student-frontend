<template>
  <div>
    <h3 class="title is-size-3 has-text-centered">Students</h3>
    <div class="table-container">
      <table class="table">
        <thead>
          <th>First name</th>
          <th>Last name</th>
        </thead>
        <tbody>
          <Student
            v-for="student in students"
            :key="student._id"
            :student="student"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Student from "./Student.vue";

export default {
  props: ["students"],
  components: {
    Student
  }
};
</script>

<style scoped>
table.table {
  margin: auto !important;
  width: 70% !important;
}
</style>
