<template>
  <section class="hero-section d-flex align-items-center text-center">
    <div class="overlay"></div>
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
          class="form-control search-beige"
          placeholder="ابحث عن مكان..."
          v-model="searchQuery"
        />
        <button class="btn btn-brand" type="button" @click="onSearch">
          بحث
        </button>
      </div>

      <div class="d-flex justify-content-center gap-3 mb-5 flex-wrap">
        <a href="#" class="btn btn-brand px-4 py-2">استكشف الأماكن</a>
        <a href="#" class="btn btn-outline-beige px-4 py-2">عن المشروع</a>
      </div>

      <div class="row justify-content-center text-center">
        <div class="col-4 col-md-3">
          <h3 class="fw-bold mb-0">+{{ sitesCount }}</h3>
          <small>موقعًا موثّقًا</small>
        </div>
        <div class="col-4 col-md-3">
          <h3 class="fw-bold mb-0">{{ citiesCount }}</h3>
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
import { ref, onMounted } from 'vue'

const searchQuery = ref('')
const citiesCount = ref(0)
const sitesCount = ref(0)

function onSearch() {
  console.log('بحث عن:', searchQuery.value)
}

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/cities')
    const cities = await res.json()

    citiesCount.value = cities.length
    sitesCount.value = cities.reduce((sum, city) => sum + city.sitesCount, 0)
  } catch (error) {
    console.error('حصل خطأ في جلب البيانات:', error)
  }
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background-image: url('/images/hero-egypt.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  color: #f3ecd9;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

.container {
  z-index: 1;
}

.hero-section p,
.hero-section h1,
.hero-section h3,
.hero-section small {
  color: #f3ecd9;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

.search-beige {
  background-color: #f3ecd9;
  border-color: #f3ecd9;
  color: #0f6d66;
}

.search-beige::placeholder {
  color: #6b6250;
}

.search-beige:focus {
  background-color: #f3ecd9;
  border-color: #0f6d66;
  box-shadow: none;
}

.btn-brand {
  background-color: #0f6d66;
  border-color: #0f6d66;
  color: #f3ecd9;
  font-weight: 600;
}

.btn-brand:hover {
  background-color: #0c5a54;
  border-color: #0c5a54;
  color: #f3ecd9;
}

.btn-outline-beige {
  border-color: #f3ecd9;
  color: #f3ecd9;
  font-weight: 600;
}

.btn-outline-beige:hover {
  background-color: #f3ecd9;
  color: #0f6d66;
}
</style>