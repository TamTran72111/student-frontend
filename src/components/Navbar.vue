<template>
  <div class="mt-3 mb-3">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger burger"
          :class="active ? 'is-active' : null"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="active = !active"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="active ? 'is-active' : null"
      >
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>

          <router-link to="/students/create" class="navbar-item">
            New Student
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  }
};
</script>
