<script setup>
import { ref, onMounted } from 'vue'
import { apiFetch } from '../utils/api.js'

const cities = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    cities.value = await apiFetch('/cities')
  } catch (e) {
    error.value = 'تعذر تحميل المدن.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <!-- صفحة المدن: شبكة بكل مدن الموقع -->
  <main class="page">
    <div class="section-header">
      <div>
        <span class="eyebrow">المدن المصرية</span>
        <h2>لكل مدينة طابعها وحكايتها</h2>
        <p class="subtitle">اختر مدينة لتتعرف على معالمها التاريخية وتستكشف أماكنها الموثقة.</p>
      </div>
    </div>

    <div v-if="loading" class="state-box">جاري تحميل المدن...</div>
    <div v-else-if="error" class="state-box error">{{ error }}</div>

    <div v-else class="grid">
      <router-link v-for="city in cities" :key="city.id" :to="`/cities/${city.id}`" class="card"> 
        <div class="image-wrap">
          <img :src="city.image" :alt="city.name" loading="lazy" />
          <div class="overlay"></div>
          <div class="card-info">
            <span class="region">{{ city.region }}</span>
            <h3>{{ city.name }}</h3>
            <span class="sites">{{ city.sitesCount }} {{ city.sitesLabel }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </main>
</template>

<style scoped>
.page {
  width: 100%;
  min-height: calc(100vh - 82px);
  background: #f4efe6;
  direction: rtl;
  font-family: 'Markazi Text', 'Amiri', serif;
}

.section-header {
  max-width: 1400px;
  margin: 0 auto;
  padding: 64px 24px 0;
}
.eyebrow {
  display: block;
  color: #6b573f;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 0.3px;
}


.section-header h2 {
  font-family: 'Aref Ruqaa', 'Amiri', serif;
  font-size: 2.3rem;
  margin: 0;
  color: #241a10;
  font-weight: 700;
}

.subtitle {
  margin: 8px 0 0;
  color: #6b573f;
  font-size: 1.2rem;
}

.state-box {
  max-width: 1400px;
  margin: 32px auto;
  padding: 40px 20px;
  text-align: center;
  color: #6b573f;
  font-size: 1.15rem;
  border: 1px dashed #d9cfba;
  border-radius: 16px;
  background: #f9f6ee;
}

.state-box.error {
  color: #9a3b26;
  border-color: #e0b3a6;
  background: #faf0ec;
}

.grid {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px 64px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.card {
  display: block;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e2d8c4;
  background: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.4s ease;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 30px -12px rgba(30, 74, 69, 0.3);
  border-color: #b8863b;
}

.image-wrap {
  position: relative;
  aspect-ratio: 2 / 3;
  overflow: hidden;
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.card:hover .image-wrap img {
  transform: scale(1.08);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 25, 23, 0.9) 0%, rgba(15, 25, 23, 0.3) 50%, transparent 80%);
}

.card-info {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px 12px;
  color: #fffdf8;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 2;
  text-align: center;
}

.region {
  font-size: 0.75rem;
  color: #e5b875;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.card-info h3 {
  margin: 0;
  font-family: 'Aref Ruqaa', 'Amiri', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fffdf8;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
}

.sites {
  font-size: 0.85rem;
  color: #f0e6d2;
  font-weight: 500;
}

@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
