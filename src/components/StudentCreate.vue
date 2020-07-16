<template>
  <div class="container">
    <h3 class="has-text-centered title is-size-3">Create a Student</h3>
    <div class="field">
      <label class="label">First Name *</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Student first name"
          v-model="firstname"
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
          placeholder="Student last name"
          v-model="lastname"
        />
      </div>
      <span v-if="errors.lastname" class="has-text-danger">{{
        errors.lastname
      }}</span>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button @click="submit" class="button is-link">Update</button>
      </div>
      <div class="control">
        <button @click="resetData" class="button is-link is-light">
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createStudent } from "../api";
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      errors: {}
    };
  },
  methods: {
    resetData() {
      this.firstname = "";
      this.firstname = "";
    },
    submit() {
      createStudent({
        firstname: this.firstname,
        lastname: this.lastname
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          if (err && err.response) this.errors = err.response.data;
          else this.$router.push("/");
        });
    }
  }
};
</script>
