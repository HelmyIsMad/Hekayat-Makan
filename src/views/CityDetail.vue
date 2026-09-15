<template>
  <div v-if="city" dir="rtl" class="city-detail">
    <!-- Hero -->
    <div class="city-hero">
      <img :src="city.image" :alt="city.name" />
      <div class="overlay">
        <h1>{{ city.name }}</h1>
        <p>{{ city.region }} · {{ city.sitesCount }} {{ city.sitesLabel }}</p>
      </div>
    </div>

    <!-- Landmarks -->
    <div class="landmarks-section">
      <h2>معالم {{ city.name }}</h2>

      <div v-if="cityLandmarks.length" class="landmarks-grid">
        <div v-for="landmark in cityLandmarks" :key="landmark.id" class="landmark-card">
          <div class="image-wrap">
            <img :src="landmark.image" :alt="landmark.title" />
            <span class="badge">{{ landmark.badge }}</span>
          </div>
          <div class="content">
            <span class="era">{{ landmark.era }}</span>
            <h3>{{ landmark.title }}</h3>
            <p>{{ landmark.description }}</p>
            <span class="hours">🕐 {{ landmark.hours }}</span>
          </div>
        </div>
      </div>

      <p v-else class="empty-state">
        لسه معندناش معالم موثقة لهذه المدينة.
      </p>
    </div>
  </div>

  <div v-else class="not-found">
    <p>المدينة غير موجودة</p>
    <router-link to="/cities">الرجوع لكل المدن</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import data from '../../data.json'

const props = defineProps({
  id: { type: String, required: true }
})

const city = computed(() =>
  data.cities.find((c) => c.id === Number(props.id))
)

const cityLandmarks = computed(() => {
  if (!city.value) return []
  return data.mainCards.filter((card) => card.city === city.value.name)
})
</script>

<style scoped>
.city-hero {
  position: relative;
  height: 320px;
}
.city-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  color: #fff;
}
.overlay h1 {
  font-size: 32px;
  margin: 0 0 6px;
}
.landmarks-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px;
}
.landmarks-section h2 {
  margin-bottom: 24px;
}
.landmarks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}
.landmark-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #eee;
}
.image-wrap {
  position: relative;
  aspect-ratio: 4/3;
}
.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #1D6667;
  color: #fff;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
}
.content {
  padding: 16px;
}
.era {
  font-size: 12px;
  color: #8B8578;
}
h3 {
  margin: 6px 0;
  font-size: 17px;
}
p {
  font-size: 13px;
  color: #5B584F;
  line-height: 1.6;
}
.hours {
  display: block;
  margin-top: 10px;
  font-size: 12px;
  color: #8B8578;
}
.empty-state {
  color: #8B8578;
  text-align: center;
  padding: 40px 0;
}
.not-found {
  text-align: center;
  padding: 80px 20px;
}
</style> 