<script>
import cookie from "js-cookie";

export default {
  props: ["isLoggedIn"],
  watch: {},
  methods: {},
};
</script>

<template>
  <div class="px-1 py-2 border-bottom bg-white">
    <div class="container">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link fw-semibold" :to="{ name: 'Home' }"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link fw-semibold" :to="{ name: 'Article' }"
            >Berita</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link fw-semibold" :to="{ name: 'Expert' }"
            >Pakar</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link fw-semibold"
            :to="{ name: 'Company Member' }"
            >Perusahaan Member</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
