<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const API = 'https://hekayat-makan-api-production.up.railway.app/api'

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
    <div class="weekly-inner">
      <div class="section-header">
        <div>
          <span class="eyebrow">حكاية الأسبوع</span>
          <h2>مكان واحد.. وحكاية كل أسبوع</h2>
          <div class="ornament">
            <span></span>
            <svg viewBox="0 0 24 24" class="ornament-icon">
              <path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.8 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" />
            </svg>
            <span></span>
          </div>
        </div>
        <RouterLink to="/explore" class="view-all">كل الحكايات ←</RouterLink>
      </div>

      <div class="weekly-container">

        <div class="story-image">
          <img
            :src="getWeeklyPlace().image"
            :alt="getWeeklyPlace().title"
          />
        </div>
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

    </div>
  </section>
</template>

<style scoped>
.weekly-story {
  width: 100%;
  background: #f8f4ed;
  border-block: 1px solid #ece3d2;
}

.weekly-inner {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 64px clamp(16px, 4vw, 48px);
}


.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 12px;
}

.eyebrow {
  display: block;
  color: #6b573f;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 0.3px;
}

.section-header h2 {
  font-family: 'Aref Ruqaa', serif;
  font-size: 2.6rem;
  font-weight: 700;
  margin: 0;
  color: #241a10;
  line-height: 1.3;
}

.ornament {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.ornament span {
  height: 1px;
  width: 60px;
  background: linear-gradient(to left, #b8863b, transparent);
}

.ornament span:last-child {
  background: linear-gradient(to right, #b8863b, transparent);
}

.ornament-icon {
  width: 14px;
  height: 14px;
  fill: #b8863b;
}

.view-all {
  font-weight: 700;
  color: #1e4a45;
  text-decoration: none;
  white-space: nowrap;
  font-size: 1.05rem;
  position: relative;
  padding-bottom: 3px;
  transition: color 0.3s ease;
}

.view-all::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
  background: #b8863b;
  transition: width 0.35s ease;
}

.view-all:hover {
  color: #b8863b;
}

.view-all:hover::after {
  width: 100%;
}


.weekly-container {
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.05fr 1fr;

  background: #fffdf8;

  border: 1px solid #e2d8c4;
  border-radius: 16px;

  overflow: hidden;
  transition: all 0.5s ease-out;
}

.weekly-container:hover {
  box-shadow: 0 10px 40px -15px rgba(30, 74, 69, 0.15);
  border-color: #d9c49a;
}

.story-image {
  min-height: 420px;
  overflow: hidden;
  background: #efe7d8;
}

.story-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.weekly-container:hover .story-image img {
  transform: scale(1.02);
}

.story-content {
  padding: clamp(28px, 4vw, 52px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;

  text-align: right;
}

.story-badge {
  display: inline-block;

  padding: 5px 12px;

  background: #fffdf8;
  color: #241a10;

  border: 1px solid #b8863b;
  border-radius: 999px;

  font-size: 0.72rem;
  font-weight: 700;
}

.story-content h2 {
  margin: 0;

  color: #241a10;

  font-family: 'Aref Ruqaa', serif;
  font-size: clamp(1.7rem, 2.6vw, 2.2rem);
  line-height: 1.4;
  font-weight: 700;
}

.story-content p {
  max-width: 58ch;

  margin: 0;

  color: #6b573f;

  font-size: 0.95rem;
  line-height: 1.9;
}


.story-button {
  margin-top: 8px;
  font-weight: 700;
  color: #1e4a45;
  text-decoration: none;
  font-size: 1.05rem;
  position: relative;
  padding-bottom: 3px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: color 0.3s ease;
}

.story-button::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
  background: #b8863b;
  transition: width 0.35s ease;
}

.story-button:hover {
  color: #b8863b;
}

.story-button:hover::after {
  width: 100%;
}

.story-button span {
  font-size: 1rem;
}

@media (max-width: 900px) {
  .weekly-container {
    grid-template-columns: 1fr;
  }

  .story-image {
    min-height: 260px;
    aspect-ratio: 16 / 10;
  }

  .section-header h2 {
    font-size: 2rem;
  }
}

@media (max-width: 520px) {
  .weekly-inner {
    padding: 44px 16px;
  }

  .story-image {
    aspect-ratio: 4 / 3;
  }
}
</style>