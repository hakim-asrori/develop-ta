<script>
export default {
  mounted() {
    document.title = "Register";
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm col-md col-lg">
        <div class="mt-3 mb-4 text-center">
          <h3>
            <span class="fw-normal">Daftar&nbsp;</span>
            <span class="fw-bold">Member</span>
          </h3>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 offset-lg-2">
        <div class="card displayCard">
          <div class="card-body">
            <div class="text-center">
              <h5>Welder Member</h5>
              <hr />
            </div>

            <ul>
              <li v-for="(item, index) in 10" :key="index">
                Aturan {{ index + 1 }}
              </li>
            </ul>

            <hr />
            <router-link
              :to="{ name: 'Register Welder Member' }"
              class="btn btn-primary"
              style="width: 100%"
            >
              Daftar
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card displayCard">
          <div class="card-body">
            <div class="text-center">
              <h5>Perusahaan Member</h5>
              <hr />
            </div>

            <ul>
              <li v-for="(item, index) in 10" :key="index">
                Aturan {{ index + 1 }}
              </li>
            </ul>

            <hr />
            <router-link
              :to="{ name: 'Register Company Member' }"
              class="btn btn-primary"
              style="width: 100%"
            >
              Daftar
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
