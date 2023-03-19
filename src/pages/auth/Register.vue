<script>
import cookie from "js-cookie";

export default {
  mounted() {
    document.title = "Register";
    this.isLoggedIn();
  },
  methods: {
    isLoggedIn() {
      if (cookie.get("token")) {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm col-md col-lg-4">
        <div class="mt-3 mb-4 text-center">
          <h5>
            <span class="fw-normal">Silahkan&nbsp;</span>
            <span class="fw-bold">Registrasi</span>
          </h5>
        </div>

        <form action="" method="post">
          <div class="mb-3">
            <label>Nama Lengkap<span class="text-danger">*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label>Email<span class="text-danger">*</span></label>
            <input type="email" class="form-control" />
          </div>
          <div class="mb-3">
            <label>Password<span class="text-danger">*</span></label>
            <input type="password" class="form-control" />
          </div>
          <div class="mb-3">
            <label>Ulangi Password<span class="text-danger">*</span></label>
            <input type="password" class="form-control" />
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary btn-block">Daftar</button>
          </div>
          <div class="mt-5 text-center">
            Jika sudah memiliki akun?
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
