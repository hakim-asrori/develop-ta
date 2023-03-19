<template>
  <footer class="footer-distributed">
    <div class="footer-left">
      <a
        href="http://arsitekco.proyek.ti.polindra.ac.id"
        class="d-flex align-items-center my-2 my-lg-0 me-lg-5 text-dark text-decoration-none"
      >
        <img
          src="../../assets/images/api-iws.png"
          alt="logo"
          width="100"
          class="mb-0 mt-0"
        />
      </a>
      <p class="footer-links">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        |
        <router-link :to="{ name: 'Article' }">Berita</router-link>
        |
        <router-link :to="{ name: 'Expert' }">Pakar</router-link>
        |
        <router-link :to="{ name: 'Company Member' }"
          >Perusahaan Member</router-link
        >
      </p>

      <p class="footer-company-name">© 2022 Arsitek.co</p>
    </div>

    <div class="footer-center">
      <div>
        <i class="fa fa-map-marker"></i>
        <p>ASOSIASI PENGELASAN INDONESIA</p>
      </div>

      <div>
        <i class="fa fa-phone"></i>
        <p>+62-21-5265526</p>
      </div>
      <div>
        <i class="fa fa-envelope"></i>
        <p>api-iws@yahoogroups.com</p>
      </div>
    </div>
    <div class="footer-right">
      <p class="footer-company-about">
        <span>Tentang Aplikasi</span>
        Sebagai manajemen sertifikasi serta informasi untuk para penggelut dunia
        pengelasan.
      </p>
      <div class="footer-icons">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </footer>
</template>
