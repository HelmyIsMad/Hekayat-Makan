<script setup>
import { useRoute, RouterLink } from 'vue-router'
import data from '../../data.json'

const route = useRoute()
const place = data.mainCards.find(p => String(p.id) === route.params.id)

const tips = {
  'أثري': [
    'الأفضل تزوري الموقع بدري الصبح قبل الزحمة والحر',
    'خدي معاكي حاجة تغطي بيها من الشمس ومياه كفاية',
    'ينفع تحجزي جولة بمرشد سياحي عشان تعرفي تفاصيل أكتر',
  ],
  'ديني': [
    'الزي المحتشم مطلوب عند الدخول',
    'احترمي مواعيد الصلاة لو زرتي وقت الأذان',
    'اسألي عن قواعد التصوير جوه قبل ما تبدئي',
  ],
  'معماري': [
    'وقت الغروب بيدي أحلى إضاءة للتصوير',
    'فيه جولات متخصصة بتشرح تفاصيل العمارة والزخارف',
  ],
  'متحف': [
    'خدي بالك، هتحتاجي كذا ساعة عشان تشوفي المكان كويس',
    'فيه Audio Guide متاح بلغات مختلفة في الغالب',
    'التصوير بالفلاش ممنوع في أغلب الأجزاء',
  ],
}

const placeTips = place ? (tips[place.badge] || []) : []
</script>

<template>
  <section v-if="place" class="place-detail">
    <RouterLink to="/explore" class="back-link">← رجوع لكل الأماكن</RouterLink>

    <div class="hero-image">
      <img :src="place.image" :alt="place.title" />
      <span class="badge">{{ place.badge }}</span>
    </div>

    <div class="content">
      <p class="meta">{{ place.city }} · {{ place.era }}</p>
      <h1>{{ place.title }}</h1>

      <p class="intro">
        {{ place.title }} من أبرز المعالم في {{ place.city }}، ويرجع لعصر
        {{ place.era }}. {{ place.description }}
      </p>

      <div class="info-box">
        <span class="info-icon">🕐</span>
        <div>
          <strong>مواعيد الزيارة</strong>
          <p>{{ place.hours }}</p>
        </div>
      </div>

      <div v-if="placeTips.length" class="tips-box">
        <h2>نصايح للزوار</h2>
        <ul>
          <li v-for="(tip, i) in placeTips" :key="i">{{ tip }}</li>
        </ul>
      </div>
    </div>
  </section>

  <section v-else class="place-detail">
    <p>هذا المكان غير موجود.</p>
    <RouterLink to="/explore" class="back-link">← رجوع لكل الأماكن</RouterLink>
  </section>
</template>

<style scoped>
.place-detail {
  max-width: 820px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: #1e4a45;
  font-weight: 600;
  text-decoration: none;
}

.hero-image {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 28px;
}

.hero-image img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  display: block;
}

.badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #fff;
  color: #241a10;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
}

.meta {
  color: #6b573f;
  font-weight: 600;
  margin-bottom: 8px;
}

h1 {
  font-size: 2.1rem;
  margin: 0 0 18px;
  color: #241a10;
}

.intro {
  font-size: 1.05rem;
  line-height: 2;
  color: #3a2f22;
  margin-bottom: 28px;
}

.info-box {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: #fff;
  border: 1px solid #e2d8c4;
  border-radius: 10px;
  padding: 18px 20px;
  margin-bottom: 28px;
}

.info-icon {
  font-size: 1.4rem;
}

.info-box strong {
  display: block;
  margin-bottom: 4px;
}

.info-box p {
  margin: 0;
  color: #6b573f;
}

.tips-box {
  background: #f1ead9;
  border-radius: 10px;
  padding: 24px;
}

.tips-box h2 {
  font-size: 1.2rem;
  margin: 0 0 14px;
}

.tips-box ul {
  margin: 0;
  padding-inline-start: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tips-box li {
  color: #3a2f22;
  line-height: 1.6;
}
</style>