<script setup>
import { ref, onMounted } from 'vue'

const API = 'http://localhost:3000'

const cities = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const res = await fetch(`${API}/cities`)
    if (!res.ok) throw new Error('تعذر جلب البيانات')
    cities.value = await res.json()
  } catch (e) {
    error.value = 'تعذر تحميل المدن. تأكد من تشغيل خادم البيانات (npm run server).'
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
/* نفس هوية ولون صفحة التصميم */
.page {
  width: 100%;
  min-height: calc(100vh - 82px);
  background: #F8F4ED;
  direction: rtl;
}

.section-header {
  max-width: 1180px;
  margin: 0 auto;
  padding: 64px 24px 0;
}

.eyebrow {
  display: block;
  color: #6b573f;
  font-weight: 600;
  margin-bottom: 6px;
}

.section-header h2 {
  font-size: 2rem;
  margin: 0;
  color: #241a10;
}

.subtitle {
  margin: 8px 0 0;
  color: #6b573f;
}

.state-box {
  max-width: 1180px;
  margin: 32px auto;
  padding: 40px 20px;
  text-align: center;
  color: #6b573f;
  border: 1px dashed #d9cfba;
  border-radius: 12px;
  background: #f9f6ee;
}

.state-box.error {
  color: #9a3b26;
  border-color: #e0b3a6;
  background: #faf0ec;
}

.grid {
  max-width: 1180px;
  margin: 0 auto;
  padding: 32px 24px 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  display: block;
  border-radius: 18px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e2d8c4;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.4s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.015);
  box-shadow: 0 26px 40px -20px rgba(30, 74, 69, 0.4);
  border-color: #b8863b;
}

.image-wrap {
  position: relative;
  aspect-ratio: 3 / 4;
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
  background: linear-gradient(to top, rgba(20, 14, 8, 0.85) 0%, rgba(20, 14, 8, 0.25) 45%, transparent 70%);
}

.card-info {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.region {
  font-size: 0.8rem;
  opacity: 0.85;
}

.card-info h3 {
  margin: 0;
  font-size: 1.4rem;
}

.sites {
  font-size: 0.85rem;
  color: #e8d9b8;
  font-weight: 600;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .image-wrap {
    aspect-ratio: 4 / 3;
  }
}
</style>
