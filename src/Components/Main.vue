<script setup>
import data from '../../data.json'
import { RouterLink } from 'vue-router'

const places = data.mainCards.slice(0, 3)
</script>

<template>
  <section class="main-section">
    <div class="section-header">
      <div>
        <span class="eyebrow">أماكن مختارة</span>
        <h2>معالم لا تفوّت زيارتها</h2>
        <div class="ornament">
          <span></span>
          <svg viewBox="0 0 24 24" class="ornament-icon"><path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.8 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" /></svg>
          <span></span>
        </div>
      </div>
      <RouterLink to="/explore" class="view-all">عرض الكل ←</RouterLink>
    </div>

    <div class="grid">
      <RouterLink
        :to="`/place/${place.id}`"
        v-for="place in places"
        :key="place.id"
        class="card"
      >
        <div class="image-wrap">
          <img :src="place.image" :alt="place.title" />
          <span class="badge">{{ place.badge }}</span>
          <div class="image-overlay">
            <h3>{{ place.title }}</h3>
            <span class="meta">{{ place.city }} · {{ place.era }}</span>
          </div>
        </div>
        <div class="card-body">
          <span class="meta">{{ place.city }} · {{ place.era }}</span>
          <h3>{{ place.title }}</h3>
          <p>{{ place.description }}</p>
          <span class="hours">🕐 {{ place.hours }}</span>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.main-section {
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

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.card {
  display: block;
  background: #fffdf8;
  border: 1px solid #e2d8c4;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  position: relative;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.45s ease;
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, #b8863b, transparent 30%) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 3;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 38px -18px rgba(30, 74, 69, 0.4);
  border-color: #b8863b;
}

.card:hover::before {
  opacity: 1;
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
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.card:hover .image-wrap img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  background: linear-gradient(
    to top,
    rgba(20, 14, 8, 0.92) 0%,
    rgba(20, 14, 8, 0.35) 55%,
    transparent 100%
  );
}

.image-overlay h3 {
  font-family: 'Aref Ruqaa', serif;
  color: #fff;
  font-size: 1.35rem;
  margin: 0 0 4px;
  line-height: 1.3;
}

.image-overlay .meta {
  color: #e8d9b8;
  font-size: 0.8rem;
  font-weight: 600;
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 253, 248, 0.95);
  color: #241a10;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  border: 1px solid #b8863b;
  z-index: 2;
}

.card-body {
  padding: 16px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-body p {
  margin: 0;
  font-size: 0.88rem;
  color: #6b573f;
  line-height: 1.7;
  min-height: 3.4em;
}

.hours {
  font-size: 0.78rem;
  color: #b8863b;
  font-weight: 700;
}

@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>