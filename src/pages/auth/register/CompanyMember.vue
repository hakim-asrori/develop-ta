<script>
export default {
  data() {
    return {
      skills: [
        "Welder Plate",
        "Welder Pipe",
        "Welding Supervisor",
        "Welding Specialist",
        "Welding Inspector ",
        "Welding Engineer",
      ],
    };
  },
  methods: {
    onCancel() {
      this.$router.push({ name: "Register Level" });
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm col-md col-lg">
        <div class="mt-3 mb-4 text-center">
          <h3>
            <span class="fw-normal">Daftar Member&nbsp;</span>
            <span class="fw-bold">Welder</span>
          </h3>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <label>Nama Perusahaan</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label>Penanggung Jawab</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label>Email Perusahaan</label>
              <input type="email" class="form-control" />
            </div>
            <div class="mb-3">
              <label>Profil Perusahaan</label>
              <textarea class="form-control" rows="5"></textarea>
            </div>
            <div class="mb-3">
              <label>No Telepon Perusahaan</label>
              <input type="number" class="form-control" />
            </div>
            <div class="mb-3">
              <label>No Faximile</label>
              <input type="number" class="form-control" />
            </div>
            <div class="mb-3">
              <label>Alamat Perusahaan</label>
              <textarea class="form-control"></textarea>
            </div>
            <div class="mb-3">
              <label>Legalitas Perusahaan</label>
              <input type="file" class="form-control" />
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn btn-secondary btn-sm" @click="onCancel">
              Batal
            </button>
            <button class="btn btn-primary btn-sm">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
