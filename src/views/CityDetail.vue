<template>
  <div v-if="city" dir="rtl" class="city-detail-page">
    <div class="city-hero">
      <img :src="city.image" :alt="city.name" class="hero-bg" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="city-badge">{{ city.region }}</span>
        <h1>{{ city.name }}</h1>
        <p class="city-subtitle">
          اكتشف عراقة التاريخ وأصالة الحكايات في معالم <span>{{ city.name }}</span> الموثقة
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <strong>{{ city.sitesCount }}</strong>
            <span>{{ city.sitesLabel }}</span>
          </div>
        </div>
      </div>
    </div>
    <section class="landmarks-section">
      <div class="section-title-wrap">
        <h2>معالم ومزارات {{ city.name }}</h2>
        <p>جولة مصورة بين أبرز الشواهد التاريخية والحضارية</p>
      </div>

      <div v-if="cityLandmarks.length" class="landmarks-grid">
        <div v-for="landmark in cityLandmarks" :key="landmark.id" class="landmark-card">
          <div class="image-wrap">
            <img :src="landmark.image" :alt="landmark.title" loading="lazy" />
            <div class="card-overlay"></div>
            <span class="badge">{{ landmark.badge }}</span>
            <span class="era-tag">{{ landmark.era }}</span>
          </div>
          
          <div class="content">
            <h3>{{ landmark.title }}</h3>
            <p class="description">{{ landmark.description }}</p>
            
            <div class="story-box" v-if="landmark.story">
              <span class="story-title">حكاية الأثر:</span>
              <p>{{ landmark.story }}</p>
            </div>

            <div class="card-footer">
              <span class="hours">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                {{ landmark.hours }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="empty-state">
        <div class="empty-icon">🏛️</div>
        <p>لسه معندناش معالم موثقة لهذه المدينة، ترقبونا قريباً!</p>
      </div>
    </section>
  </div>

  <div v-else class="not-found" dir="rtl">
    <div class="not-found-content">
      <h2>عذراً، المدينة غير موجودة</h2>
      <p>يبدو أن الرابط غير صحيح أو تم إزالة هذه المدينة مؤقتاً.</p>
      <router-link to="/cities" class="back-btn">الرجوع لكل المدن</router-link>
    </div>
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
.city-detail-page {
  background: #f4efe6;
  min-height: calc(100vh - 82px);
  font-family: 'Markazi Text', 'Amiri', serif;
  color: #241a10;
  padding-bottom: 80px;
}

.city-hero {
  position: relative;
  height: 420px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  animation: slowZoom 15s infinite alternate;
}

@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.08); }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 25, 23, 0.95) 10%, rgba(15, 25, 23, 0.5) 60%, rgba(15, 25, 23, 0.2) 100%);
}

.hero-content {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 24px 48px;
  color: #fffdf8;
  z-index: 2;
}

.city-badge {
  display: inline-block;
  background: rgba(184, 134, 59, 0.25);
  border: 1px solid #b8863b;
  color: #f3d59e;
  padding: 4px 16px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.hero-content h1 {
  font-family: 'Aref Ruqaa', 'Amiri', serif;
  font-size: 3.2rem;
  margin: 0 0 8px;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.city-subtitle {
  font-size: 1.25rem;
  color: #e2d8c4;
  margin: 0 0 20px;
}

.city-subtitle span {
  color: #e5b875;
  font-weight: bold;
}

.hero-stats {
  display: flex;
  gap: 16px;
}

.stat-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 8px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-item strong {
  font-size: 1.2rem;
  color: #e5b875;
}

.stat-item span {
  font-size: 1rem;
  color: #fffdf8;
}

.landmarks-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px 0;
}

.section-title-wrap {
  text-align: center;
  margin-bottom: 40px;
}

.section-title-wrap h2 {
  font-family: 'Aref Ruqaa', 'Amiri', serif;
  font-size: 2.3rem;
  color: #241a10;
  margin: 0 0 8px;
}

.section-title-wrap p {
  color: #6b573f;
  font-size: 1.2rem;
  margin: 0;
}

.landmarks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 32px;
}

.landmark-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e2d8c4;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  display: flex;
  flex-direction: column;
}

.landmark-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -15px rgba(30, 74, 69, 0.2);
  border-color: #b8863b;
}

.image-wrap {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.landmark-card:hover .image-wrap img {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%);
}

.badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #1e4a45;
  color: #fff;
  font-size: 0.9rem;
  padding: 4px 14px;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.era-tag {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(20, 14, 8, 0.75);
  backdrop-filter: blur(4px);
  color: #e5b875;
  font-size: 0.85rem;
  padding: 2px 12px;
  border-radius: 6px;
  font-weight: 600;
}

.content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.content h3 {
  font-family: 'Aref Ruqaa', 'Amiri', serif;
  margin: 0 0 10px;
  font-size: 1.6rem;
  color: #241a10;
}

.description {
  font-size: 1.05rem;
  color: #5b584f;
  line-height: 1.7;
  margin: 0 0 16px;
}

.story-box {
  background: #f9f6ee;
  border-right: 3px solid #b8863b;
  padding: 12px 16px;
  border-radius: 0 12px 12px 0;
  margin-bottom: 20px;
}

.story-title {
  display: block;
  font-weight: 700;
  color: #1e4a45;
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.story-box p {
  margin: 0;
  font-size: 0.95rem;
  color: #6b573f;
  line-height: 1.6;
}

.card-footer {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #f0eaf0;
}

.hours {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: #6b573f;
}

.hours svg {
  color: #b8863b;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: #fff;
  border-radius: 20px;
  border: 1px dashed #d9cfba;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.empty-state p {
  color: #6b573f;
  font-size: 1.2rem;
  margin: 0;
}

.not-found {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background: #f4efe6;
}

.not-found-content h2 {
  font-family: 'Aref Ruqaa', 'Amiri', serif;
  font-size: 2.2rem;
  color: #241a10;
  margin-bottom: 10px;
}

.not-found-content p {
  color: #6b573f;
  font-size: 1.15rem;
  margin-bottom: 24px;
}

.back-btn {
  display: inline-block;
  background: #1e4a45;
  color: #fff;
  padding: 10px 28px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease;
}

.back-btn:hover {
  background: #143330;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  .landmarks-grid {
    grid-template-columns: 1fr;
  }
}
</style>