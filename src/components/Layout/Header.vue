<script>
import cookie from "js-cookie";

export default {
  props: ["isLoggedIn", "user"],
  watch: {},
  methods: {
    handleLogout() {
      this.$store
        .dispatch("postData", ["auth/logout", {}])
        .then((response) => {
          cookie.remove("token");
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {});
    },
  },
};
</script>
<template>
  <div class="px-3 py-2 text-white border-bottom">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="d-flex align-items-center my-2 my-lg-0 me-lg-5 text-dark text-decoration-none"
        >
          <img
            src="../../assets/images/api-iws.png"
            alt="logo"
            height="50"
            class="mb-0 mt-0"
          />
        </router-link>

        <div class="ms-auto" v-if="!isLoggedIn">
          <router-link
            :to="{ name: 'Login' }"
            class="me-3 btn btn-primary btn-sm"
            >Login</router-link
          >
          <router-link :to="{ name: 'Register' }" class="btn btn-success btn-sm"
            >Register</router-link
          >
        </div>
        <div class="ms-auto d-flex" v-else>
          <router-link
            :to="{ name: 'Register Level' }"
            class="me-3 btn btn-primary btn-sm"
            >Daftar Member</router-link
          >
          <div class="flex-shrink-0 dropdown ms-auto">
            <a
              href="#"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                :src="`https://ui-avatars.com/api/?background=random&size=35&rounded=true&length=2&name=${user.name}`"
                alt="image"
                class="rounded-circle pp"
              />
            </a>
            <ul
              class="dropdown-menu text-small shadow"
              aria-labelledby="dropdownUser2"
            >
              <li>
                <router-link class="dropdown-item" :to="{ name: 'My Profile' }"
                  >Profil</router-link
                >
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a
                  class="dropdown-item logout"
                  href="#logout"
                  @click="handleLogout"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
