<template>
  <section class="hero-section d-flex align-items-center text-center">
    <div class="overlay"></div>

    <div class="container position-relative py-5">

      <p class="eyebrow mb-2 fade-up hover-text" style="animation-delay: 0.1s;">دليل الأماكن التاريخية والثقافية في مصر</p>

      <h1 class="display-5 fw-bold mb-3 fade-up hover-text" style="animation-delay: 0.25s;">
        لكل مكانٍ في مصر حكاية تستحق أن تُروى
      </h1>

      <p class="lead mb-4 mx-auto fade-up hover-text" style="max-width: 600px; animation-delay: 0.4s;">
        اكتشف المعابد والأهرامات والمساجد والقلاع والمتاحف، مرتبةً حسب المدينة والحقبة الزمنية، واقرأ قصة كل معلمٍ من بدايته حتى اليوم.
      </p>

      <div class="d-flex justify-content-center gap-3 mb-5 flex-wrap fade-up" style="animation-delay: 0.55s;">
        <router-link to="/explore" class="btn btn-brand btn-start btn-tilt">
          ابدأ الاستكشاف
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </router-link>
      </div>

      <div class="row justify-content-center text-center fade-up" style="animation-delay: 0.85s;">
        <div class="col-4 col-md-3">
          <h3 class="stat-number fw-bold mb-0 hover-text">+{{ sitesCount }}</h3>
          <small class="stat-label hover-text">موقعًا موثّقًا</small>
        </div>
        <div class="col-4 col-md-3">
          <h3 class="stat-number fw-bold mb-0 hover-text">{{ citiesCount }}</h3>
          <small class="stat-label hover-text">مدنًا مصرية</small>
        </div>
        <div class="col-4 col-md-3">
          <h3 class="stat-number fw-bold mb-0 hover-text">5</h3>
          <small class="stat-label hover-text">حقبًا تاريخية</small>
        </div>
      </div>

    </div>


    <a href="#next-section" class="scroll-indicator">
      <span>استمر في الاستكشاف</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
    </a>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { apiFetch } from '../utils/api.js'

const router = useRouter()
const searchQuery = ref('')
const citiesCount = ref(0)
const sitesCount = ref(0)

function onSearch() {
  if (searchQuery.value.trim()) router.push({ path: '/search', query: { q: searchQuery.value.trim() } })
}

onMounted(async () => {
  try {
    const cities = await apiFetch('/cities')
    citiesCount.value = cities.length
    sitesCount.value = cities.reduce((sum, city) => sum + city.sitesCount, 0)
  } catch {}
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
  font-family: 'Cairo', 'Tajawal', sans-serif;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

.container {
  z-index: 2;
}

.hero-section h1,
.hero-section p,
.hero-section h3,
.hero-section small {
  color: #f3ecd9;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

.fade-up {
  opacity: 0;
  transform: translateY(25px);
  animation: fadeUp 0.7s ease forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.hover-text {
  transition: transform 0.3s ease, text-shadow 0.3s ease;
  cursor: default;
}

.hover-text:hover {
  transform: translateY(-4px) scale(1.03);
  text-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
}

.eyebrow {
  font-family: 'Tajawal', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  color: #d8cba8;
  text-transform: uppercase;
}

.hero-section h1 {
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
  line-height: 1.5;
}

.hero-section p.lead {
  font-family: 'Tajawal', sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 2;
  color: #f3ecd9;
}

.stat-number {
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
  font-size: 2rem;
}

.stat-label {
  font-family: 'Tajawal', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  color: #e5dcc3;
}

.btn-brand {
  background-color: #0f6d66;
  border-color: #0f6d66;
  color: #f3ecd9;
  font-family: 'Tajawal', sans-serif;
  font-weight: 600;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

.btn-brand:hover,
.btn-brand:active,
.btn-brand:focus,
.btn-brand:focus-visible {
  background-color: #0c5a54 !important;
  border-color: #0c5a54 !important;
  color: #f3ecd9 !important;
  box-shadow: none !important;
  opacity: 1 !important;
}

.btn-start {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 38px;
  border-radius: 999px;
  font-size: 1.25rem;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
}

.btn-start svg {
  transition: transform 0.25s ease;
}

.btn-start:hover svg {
  transform: translateX(-5px);
}

.btn-tilt {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  will-change: transform;
}

.btn-tilt:hover {
  transform: perspective(400px) rotateX(6deg) rotateY(-4deg) translateY(-3px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35) !important;
}

.scroll-indicator {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #f3ecd9;
  text-decoration: none;
  font-family: 'Tajawal', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  z-index: 2;
  animation: bounce 2s infinite;
}

.scroll-indicator:hover {
  color: #f3ecd9;
}

@keyframes bounce {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 8px); }
}
</style>