<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const API = 'http://localhost:3000'

const places = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch(`${API}/mainCards`)

    if (!res.ok) {
      throw new Error('تعذر جلب البيانات')
    }

    places.value = await res.json()
  } catch (error) {
    console.error('Weekly Story Error:', error)
  } finally {
    loading.value = false
  }
})

// اختيار مكان مختلف كل أسبوع
const getWeeklyPlace = () => {
  if (!places.value.length) return null

  const startDate = new Date('2026-01-01')
  const now = new Date()

  const weekNumber = Math.floor(
    (now - startDate) / (1000 * 60 * 60 * 24 * 7)
  )

  return places.value[weekNumber % places.value.length]
}
</script>

<template>
  <section
    v-if="!loading && getWeeklyPlace()"
    class="weekly-story"
    dir="rtl"
  >
    <div class="weekly-container">

      <!-- الصورة -->
      <div class="story-image">
        <img
          :src="getWeeklyPlace().image"
          :alt="getWeeklyPlace().title"
        />
      </div>

      <!-- المحتوى -->
      <div class="story-content">

        <span class="story-badge">
          حكاية الأسبوع
        </span>

        <h2>
          {{ getWeeklyPlace().title }}
        </h2>

        <p>
          {{ getWeeklyPlace().description }}
        </p>

        <RouterLink
          :to="`/explore/${getWeeklyPlace().id}`"
          class="story-button"
        >
          اقرأ الحكاية كاملة
          <span>←</span>
        </RouterLink>

      </div>

    </div>
  </section>
</template>

<style scoped>
.weekly-story {
  width: 100%;
  padding: 45px 24px;
  background: #F8F4ED;
}

.weekly-container {
  max-width: 1180px;
  min-height: 335px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;

  background: #fff;

  border: 1px solid #e2d8c4;
  border-radius: 18px;

  overflow: hidden;
}

.story-image {
  min-height: 335px;
}

.story-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.story-content {
  padding: 45px 55px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  text-align: right;
}

.story-badge {
  display: inline-block;

  padding: 6px 14px;
  margin-bottom: 14px;

  background: #f6ead8;
  color: #66513a;

  border-radius: 20px;

  font-size: 14px;
  font-weight: 600;
}

.story-content h2 {
  margin: 0 0 16px;

  color: #241a10;

  font-family: 'Amiri', serif;
  font-size: 30px;
  line-height: 1.5;
}

.story-content p {
  max-width: 550px;

  margin: 0 0 22px;

  color: #6b573f;

  font-family: 'Markazi Text', serif;
  font-size: 18px;
  line-height: 1.8;
}

.story-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 9px 16px;

  background: #216c6c;
  color: white;

  border-radius: 8px;

  text-decoration: none;

  font-family: 'Markazi Text', serif;
  font-size: 16px;

  transition: 0.3s;
}

.story-button:hover {
  background: #1a5757;
}

.story-button span {
  font-size: 20px;
}

@media (max-width: 768px) {
  .weekly-story {
    padding: 30px 16px;
  }

  .weekly-container {
    grid-template-columns: 1fr;
  }

  .story-image {
    min-height: 230px;
  }

  .story-content {
    padding: 30px 25px;
  }

  .story-content h2 {
    font-size: 25px;
  }

  .story-content p {
    font-size: 17px;
  }
}
</style>