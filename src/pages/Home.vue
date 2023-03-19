<script>
export default {
  mounted() {
    document.title = "Asosiasi Pengelasan Indonesia";
  },
};
</script>

<template>
  <section>
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div data-bs-interval="3000" class="carousel-item active">
          <img
            src="http://source.unsplash.com/random/1200x400"
            class="d-block w-100"
            alt="http://source.unsplash.com/random/1200x400"
          />
          <div class="carousel-caption text-white d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div data-bs-interval="3000" class="carousel-item">
          <img
            src="http://source.unsplash.com/random/1200x400"
            class="d-block w-100"
            alt="http://source.unsplash.com/random/1200x400"
          />
          <div class="carousel-caption text-white d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div data-bs-interval="3000" class="carousel-item">
          <img
            src="http://source.unsplash.com/random/1200x400"
            class="d-block w-100"
            alt="http://source.unsplash.com/random/1200x400"
          />
          <div class="carousel-caption text-white d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>

  <div class="text-center container mt-5 p-0">
    <h3 class="mb-4">
      SELAMAT DATANG DI WEBSITE API-IWS (ASOSIASI PENGELASAN INDONESIA)
    </h3>
    <p align="justify" class="container">
      Asosiasi Pengelasan Indonesia (API) berdiri pada tanggal 19 Mei 1994 di
      Jakarta. API merupakan wadah bagi seluruh tenaga kerja dan lembaga serta
      industri atau perusahaan yang berdedikasi pada bidang pengelasan.
      Organisasi profesi non profit ini didirikan dengan tujuan untuk
      mengembangkan SDM Indonesia di bidang pengelasan berbasis kompetensi. Visi
      utama API adalah menjadi organisasi yang mampu meningkatkan kompetensi
      tenaga kerja dan industri pengelasan Indonesia. Upaya yang segenap
      pengurus API lakukan untuk mewujudkan visi tersebut adalah dengan
      mengembangkan sistem pendidikan dan pelatihan serta sistem sertifikasi
      personil pengelasan sesuai standar yang diakui internasional, membangun
      API/ IWS sebagai organisasi yang profesional dan mandiri untuk kepentingan
      anggota dan masyarakat serta industri pengelasan serta meningkatkan peran
      organisasi dalam forum internasional untuk kemajuan anggota dan masyarakat
      serta industri pengelasan Indonesia.
    </p>
  </div>

  <div class="container">
    <h4>Visi:</h4>
    <blockquote>
      Menjadi organisasi yang mampu meningkatkan kompetensi tenaga kerja dan
      industri pengelasan Indonesia menjadi salah satu yang terbaik di dunia.
    </blockquote>
    <h4>Misi:</h4>
    <ol>
      <li>
        Mengembangkan sistem pendidikan dan pelatihan serta sistem sertifikasi
        personil pengelasan sesuai standar yang diakui internasional.
      </li>
      <li>
        Membangun API/ IWS sebagai organisasi yang profesional dan mandiri untuk
        kepentingan anggota dan masyarakat serta industri pengelasan.
      </li>
      <li>
        Meningkatkan peran organisasi dalam forum internasional untuk kemajuan
        anggota dan masyarakat serta industri pengelasan Indonesia.
      </li>
    </ol>
  </div>

  <div class="d-flex justify-content-center">
    <hr style="width: 50%" />
  </div>

  <div class="container-fluid">
    <div class="my-5 text-center">
      <h4>
        <span class="fw-bold">Pakar</span>
        <span class="fw-normal text-secondary">Terbaru</span>
      </h4>
      <p>
        <a
          href="http://arsitekco.proyek.ti.polindra.ac.id/project"
          class="text-decoration-none text-muted fw-bold"
          style="font-size: 14px"
          >Lihat Semua Pakar</a
        >
      </p>
    </div>
    <div class="row mb-3 mx-5">
      <div
        class="col-lg-3 col-sm col-md-4 mb-4"
        v-for="(item, index) in 8"
        :key="index"
      >
        <div class="card displayCard">
          <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            eveniet ipsa aspernatur, nulla explicabo ipsum consequuntur. Modi
            dolores, asperiores ea expedita ratione, adipisci molestiae, illum
            vitae consectetur voluptatibus optio nihil.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center">
    <hr style="width: 50%" />
  </div>

  <div class="container-fluid">
    <div class="my-5 text-center">
      <h4>
        <span class="fw-bold">Perusahaan</span>
        <span class="fw-normal text-secondary">Member</span>
      </h4>
      <p>
        <a
          href="http://arsitekco.proyek.ti.polindra.ac.id/project"
          class="text-decoration-none text-muted fw-bold"
          style="font-size: 14px"
          >Lihat Semua Perusahaan</a
        >
      </p>
    </div>
    <div class="row mb-3 mx-5">
      <div
        class="col-lg-3 col-sm col-md-4 mb-4"
        v-for="(item, index) in 8"
        :key="index"
      >
        <div class="card displayCard">
          <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            eveniet ipsa aspernatur, nulla explicabo ipsum consequuntur. Modi
            dolores, asperiores ea expedita ratione, adipisci molestiae, illum
            vitae consectetur voluptatibus optio nihil.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
