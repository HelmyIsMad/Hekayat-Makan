<template>
  <section class="hero-section d-flex align-items-center text-center">
    <div class="container position-relative py-5">

      <p class="mb-2 fw-light">دليل الأماكن التاريخية والثقافية في مصر</p>

      <h1 class="display-5 fw-bold mb-3">
        لكل مكانٍ في مصر حكاية تستحق أن تُروى
      </h1>

      <p class="lead mb-4 mx-auto" style="max-width: 600px;">
        اكتشف المعابد والأهرامات والمساجد والقلاع والمتاحف، مرتبةً حسب المدينة والحقبة الزمنية، واقرأ قصة كل معلمٍ من بدايته حتى اليوم.
      </p>

      <div class="input-group mb-5 mx-auto" style="max-width: 500px;">
        <input
          type="text"
          class="form-control"
          placeholder="ابحث عن مكان..."
          v-model="searchQuery"
        />
        <button class="btn btn-warning" type="button" @click="onSearch">
          بحث
        </button>
      </div>

      <div class="d-flex justify-content-center gap-3 mb-5 flex-wrap">
        <a href="#" class="btn btn-success px-4 py-2 text-white">استكشف الأماكن</a>
        <a href="#" class="btn btn-outline-dark px-4 py-2">عن المشروع</a>
      </div>

      <div class="row justify-content-center text-center">
        <div class="col-4 col-md-3">
          <h3 class="fw-bold mb-0">+15</h3>
          <small>موقعًا موثّقًا</small>
        </div>
        <div class="col-4 col-md-3">
          <h3 class="fw-bold mb-0">6</h3>
          <small>مدنًا مصرية</small>
        </div>
        <div class="col-4 col-md-3">
          <h3 class="fw-bold mb-0">5</h3>
          <small>حقبًا تاريخية</small>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')

function onSearch() {
  console.log('بحث عن:', searchQuery.value)
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background-color: #f7f2ea;
  background-image:
    linear-gradient(to bottom, rgba(247, 242, 234, 0.75), rgba(247, 242, 234, 0.95)),
    url('/images/hero-egypt.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.container {
  z-index: 1;
}
</style>