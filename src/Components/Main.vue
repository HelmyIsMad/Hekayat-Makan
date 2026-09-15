<script setup>
import data from '../../data.json'
import { RouterLink } from 'vue-router'

const places = data.mainCards
</script>

<template>
  <section class="main-section">
    <div class="section-header">
      <div>
        <span class="eyebrow">أماكن مختارة</span>
        <h2>معالم لا تفوّت زيارتها</h2>
      </div>
      <RouterLink to="/explore" class="view-all">عرض الكل ←</RouterLink>
    </div>

    <div class="grid">
      	<article v-for="place in places" :key="place.id" class="card">
			<div class="image-wrap">
				<img :src="place.image" :alt="place.title" />
				<span class="badge">{{ place.badge }}</span>
			</div>
			<div class="card-body">
				<span class="meta">{{ place.city }} · {{ place.era }}</span>
				<h3>{{ place.title }}</h3>
				<p>{{ place.description }}</p>
				<span class="hours">🕐 {{ place.hours }}</span>
			</div>
		</article>
    </div>
  </section>
</template>

<style scoped>
.main-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: 64px 24px;
}

.section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 12px;
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
}

.view-all {
  font-weight: 600;
  color: #1e4a45;
  text-decoration: none;
  white-space: nowrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  display: block;
  background: #fff;
  border: 1px solid #e2d8c4;
  border-radius: 18px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
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
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.card:hover .image-wrap img {
  transform: scale(1.12) rotate(-0.5deg);
}

.badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(255, 255, 255, 0.92);
  color: #241a10;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  backdrop-filter: blur(3px);
}

.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.meta {
  font-size: 0.85rem;
  color: #6b573f;
  font-weight: 600;
}

.card-body h3 {
  margin: 0;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.card:hover .card-body h3 {
  color: #1e4a45;
}

.card-body p {
  margin: 0;
  font-size: 0.9rem;
  color: #6b573f;
  line-height: 1.6;
}

.hours {
  font-size: 0.8rem;
  color: #b8863b;
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
}
</style>