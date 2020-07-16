<template>
  <div class="has-text-centered">
    <div class="mb-3">
      <label class="label">Search</label>
      <div class="field is-grouped">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Search name"
            v-model="searchName"
            @keyup.enter="search"
          />
        </div>
        <div class="select">
          <select v-model="selected">
            <option value="first">By first name</option>
            <option value="last">By last name</option>
          </select>
        </div>
      </div>
    </div>

    <h3 v-if="error" class="has-text-danger is-size-3">{{ error }}</h3>
    <Students :students="students" />
  </div>
</template>

<script>
import Students from "./Students.vue";
import { getStudents } from "../api";

export default {
  components: {
    Students
  },
  data() {
    return {
      students: [],
      error: "",
      searchName: "",
      selected: "first"
    };
  },
  mounted() {
    this.loadStudents();
  },
  watch: {
    "$route.query"() {
      this.loadStudents();
    }
  },
  methods: {
    loadStudents() {
      const query = Object.keys(this.$route.query);
      if (query.length == 1) {
        this.searchName = this.$route.query[query[0]];
      }
      getStudents(this.$route.query)
        .then(response => {
          this.students = response.data;
        })
        .catch(err => {
          this.error = "Server Error cannot get data!";
        });
    },
    search() {
      const query = {};
      if (this.searchName !== "") {
        if (this.selected === "first") {
          query.firstname = this.searchName;
        } else {
          query.lastname = this.searchName;
        }
      }
      this.$router
        .push({
          path: "/",
          query
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped>
.field {
  width: 300px;
  margin: auto;
}
</style>
