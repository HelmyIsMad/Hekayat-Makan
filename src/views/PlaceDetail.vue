<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const API = 'http://localhost:3000'

const route = useRoute()

const place = ref(null)
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const id = route.params.id

    const res = await fetch(`${API}/mainCards/${id}`)

    if (!res.ok) {
      throw new Error('تعذر جلب بيانات المكان')
    }

    place.value = await res.json()
  } catch (e) {
    error.value = 'تعذر تحميل تفاصيل المكان.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main class="page">

    <!-- Loading -->
    <div v-if="loading" class="state-box">
      جاري تحميل تفاصيل المكان...
    </div>

    <!-- Error -->
    <div v-else-if="error" class="state-box error">
      {{ error }}
    </div>

    <!-- Place Details -->
    <section v-else-if="place" class="details">

      <div class="hero-image">
        <img
          :src="place.image"
          :alt="place.title"
        />

        <span class="badge">
          {{ place.badge }}
        </span>
      </div>

      <div class="content">

        <div class="meta">
          {{ place.city }} · {{ place.era }}
        </div>

        <h1>
          {{ place.title }}
        </h1>

        <p class="description">
          {{ place.description }}
        </p>

        <div class="info">

          <div class="info-item">
            <span class="label">المدينة</span>
            <span class="value">{{ place.city }}</span>
          </div>

          <div class="info-item">
            <span class="label">العصر</span>
            <span class="value">{{ place.era }}</span>
          </div>

          <div class="info-item">
            <span class="label">مواعيد الزيارة</span>
            <span class="value">{{ place.hours }}</span>
          </div>

        </div>

        <router-link
          to="/explore"
          class="back-button"
        >
          العودة إلى استكشف
        </router-link>

      </div>

    </section>

  </main>
</template>

<style scoped>
.page {
  min-height: calc(100vh - 82px);
  background: #F8F4ED;
  direction: rtl;
  padding: 50px 24px 80px;
}

.details {
  max-width: 1100px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(48, 37, 31, 0.08);
}

.hero-image {
  position: relative;
  width: 100%;
  height: 480px;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.94);
  color: #241a10;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
}

.content {
  padding: 40px 50px 50px;
}

.meta {
  color: #6b573f;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
}

h1 {
  margin: 0 0 20px;
  color: #241a10;
  font-size: 38px;
}

.description {
  color: #6b573f;
  font-size: 17px;
  line-height: 1.9;
  margin-bottom: 35px;
}

.info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 35px;
}

.info-item {
  background: #F8F4ED;
  border-radius: 14px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.label {
  color: #8b8178;
  font-size: 13px;
}

.value {
  color: #30251F;
  font-size: 16px;
  font-weight: 600;
}

.back-button {
  display: inline-block;
  background: #176F73;
  color: white;
  text-decoration: none;
  padding: 13px 24px;
  border-radius: 12px;
  transition: 0.25s ease;
}

.back-button:hover {
  background: #125b5f;
  transform: translateY(-2px);
}

.state-box {
  max-width: 900px;
  margin: 60px auto;
  padding: 50px 20px;
  text-align: center;
  color: #6b573f;
  border: 1px dashed #d9cfba;
  border-radius: 16px;
  background: #ffffff;
}

.state-box.error {
  color: #9a3b26;
  border-color: #e0b3a6;
  background: #faf0ec;
}

@media (max-width: 700px) {
  .hero-image {
    height: 300px;
  }

  .content {
    padding: 30px 25px;
  }

  h1 {
    font-size: 30px;
  }

  .info {
    grid-template-columns: 1fr;
  }
}
</style>