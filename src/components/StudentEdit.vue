<template>
  <div class="container">
    <h3 class="has-text-centered title is-size-3">
      Edit Student Info
    </h3>
    <div class="field">
      <label class="label">First Name *</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="new_firstname"
        />
      </div>
      <span v-if="errors.firstname" class="has-text-danger">{{
        errors.firstname
      }}</span>
    </div>
    <div class="field">
      <label class="label">Last Name *</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="new_lastname"
        />
      </div>
      <span v-if="errors.lastname" class="has-text-danger">{{
        errors.lastname
      }}</span>
    </div>
    <div class="field has-text-centered is-grouped">
      <div class="control has-text-centered">
        <button @click="submit" class="button is-link">Update</button>
      </div>
      <div class="control has-text-centered">
        <button @click="resetData" class="button is-link is-light">
          Reset
        </button>
      </div>
      <div class="control has-text-centered">
        <button @click="deleteStudentHandler" class="button is-danger">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getStudentById, updateStudent, deleteStudent } from "../api";
export default {
  data() {
    return {
      new_firstname: "",
      new_lastname: "",
      firstname: "",
      lastname: "",
      errors: {}
    };
  },
  mounted() {
    getStudentById(this.$route.params.id)
      .then(data => {
        this.firstname = data.data.firstname;
        this.lastname = data.data.lastname;
        this.new_firstname = data.data.firstname;
        this.new_lastname = data.data.lastname;
      })
      .catch(err => {
        this.$router.push("/");
      });
  },
  methods: {
    resetData() {
      this.new_firstname = this.firstname;
      this.new_lastname = this.lastname;
    },
    submit() {
      updateStudent(this.$route.params.id, {
        firstname: this.new_firstname,
        lastname: this.new_lastname
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          if (err && err.response) this.errors = err.response.data;
          else this.$router.push("/");
        });
    },
    deleteStudentHandler() {
      deleteStudent(this.$route.params.id);
      // Wait for database deleting the student
      setTimeout(() => this.$router.push("/"), 300);
    }
  }
};
</script>
