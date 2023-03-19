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
              <label>NIK</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label>Tempat Lahir</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label>Tanggal Lahir</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label>Status Bekerja</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" />
                <label class="form-check-label"> Ya </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" />
                <label class="form-check-label"> Tidak </label>
              </div>
            </div>
            <div class="mb-3">
              <label>Jenis Kompetensi</label>
              <select class="form-select" aria-label="Default select example">
                <option selected disabled></option>
                <option
                  v-for="(skill, index) in skills"
                  :key="index"
                  :value="skill"
                >
                  {{ skill }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label>Pas Foto Formal Berwarna</label>
              <input type="file" class="form-control" />
            </div>
            <div class="mb-3">
              <label>Ijazah Pendidikan Formal</label>
              <input type="file" class="form-control" />
            </div>
            <div class="mb-3">
              <label
                >Sertifikat Pelatihan/Kompetensi Keahlian Pengelasan
              </label>
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
