<script>
import Pagination from "../components/Pagination.vue";

export default {
  mounted() {
    document.title = "Perusahaan Member";
  },
  components: { Pagination },
};
</script>
<template>
  <div class="container my-5">
    <div class="d-md-flex justify-content-between align-items-center">
      <div class="me-md-2 me-0">
        <input type="search" class="form-control" placeholder="pencarian" />
      </div>

      <Pagination />
    </div>
    <hr />
    <div class="row mb-3">
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
