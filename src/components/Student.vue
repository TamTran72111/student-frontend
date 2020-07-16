<template>
  <tr @click="gotoEdit">
    <td>{{ student.firstname }}</td>
    <td>{{ student.lastname }}</td>
  </tr>
</template>

<script>
export default {
  props: ["student"],
  methods: {
    gotoEdit() {
      this.$router.push({
        name: "Edit-Student",
        params: { id: this.student._id }
      });
    }
  }
};
</script>
<style scoped>
tr:hover td {
  cursor: pointer !important;
}
</style>
