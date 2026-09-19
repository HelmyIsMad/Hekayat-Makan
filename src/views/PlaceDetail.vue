<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const API = 'https://hekayat-makan-api-production.up.railway.app/api'

const route = useRoute()
const place = ref(null)
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const res = await fetch(`${API}/mainCards/${route.params.id}`)
    if (!res.ok) throw new Error('تعذر جلب البيانات')
    place.value = await res.json()
  } catch (e) {
    error.value = 'تعذر تحميل بيانات المكان. تأكد من تشغيل خادم البيانات (npm run server).'
  } finally {
    loading.value = false
  }
})

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

const placeTips = () => (place.value ? tips[place.value.badge] || [] : [])
</script>

<template>
  <section v-if="loading" class="place-detail state-box">
    جاري تحميل بيانات المكان...
  </section>

  <section v-else-if="error" class="place-detail state-box error">
    {{ error }}
    <RouterLink to="/" class="back-link">← رجوع للرئيسية</RouterLink>
  </section>

  <section v-else-if="place" class="place-detail">
    <div class="hero" :style="{ backgroundImage: `url(${place.image})` }">
      <RouterLink to="/" class="back-link">← رجوع للرئيسية</RouterLink>

      <div class="hero-content">
        <span class="badge">{{ place.badge }}</span>
        <p class="meta">{{ place.city }} · {{ place.era }}</p>
        <h1>{{ place.title }}</h1>
        <div class="ornament">
          <span></span>
          <svg viewBox="0 0 24 24" class="ornament-icon"><path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.8 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" /></svg>
          <span></span>
        </div>
        <p class="intro">{{ place.story || place.description }}</p>
        <div class="hours">🕐 {{ place.hours }}</div>
      </div>
    </div>

    <div v-if="placeTips().length" class="tips-box">
      <div class="tips-header">
        <div class="ornament">
          <span></span>
          <svg viewBox="0 0 24 24" class="ornament-icon"><path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.8 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" /></svg>
          <span></span>
        </div>
        <h2>نصايح للزوار</h2>
      </div>
      <ul>
        <li v-for="(tip, i) in placeTips()" :key="i">{{ tip }}</li>
      </ul>
    </div>
  </section>

  <section v-else class="place-detail">
    <p>هذا المكان غير موجود.</p>
    <RouterLink to="/" class="back-link">← رجوع للرئيسية</RouterLink>
  </section>
</template>

<style scoped>
.place-detail {
  width: 100%;
  background: #F8F4ED;
}

.state-box {
  text-align: center;
  padding: 80px 24px;
  color: #6b573f;
  font-size: 1.05rem;
}

.state-box.error {
  color: #9a3b26;
}

.state-box .back-link {
  display: inline-block;
  margin-top: 16px;
  color: #1e4a45;
}

.hero {
  position: relative;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 56px clamp(24px, 6vw, 80px);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(15, 10, 5, 0.92) 0%,
    rgba(15, 10, 5, 0.62) 45%,
    rgba(15, 10, 5, 0.15) 80%
  );
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15, 10, 5, 0.5) 0%,
    transparent 30%
  );
}

.back-link {
  position: relative;
  z-index: 2;
  align-self: flex-start;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 9px 18px;
  border-radius: 999px;
  backdrop-filter: blur(6px);
  margin-bottom: auto;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.back-link:hover {
  background: rgba(184, 134, 59, 0.35);
  border-color: #b8863b;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 680px;
  color: #fff;
}

.badge {
  display: inline-block;
  background: transparent;
  color: #e8c789;
  padding: 5px 0;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 10px;
  border-bottom: 1px solid #b8863b;
}

.meta {
  font-weight: 600;
  color: #d8c9a8;
  margin-bottom: 14px;
  font-size: 0.95rem;
}

.hero-content h1 {
  font-family: 'Aref Ruqaa', serif;
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  font-weight: 700;
  margin: 0;
  color: #fff;
  line-height: 1.25;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4);
}

.ornament {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 18px 0;
}

.ornament span {
  height: 1px;
  width: 50px;
  background: linear-gradient(to left, #b8863b, transparent);
}

.ornament span:last-child {
  background: linear-gradient(to right, #b8863b, transparent);
}

.ornament-icon {
  width: 13px;
  height: 13px;
  fill: #b8863b;
  flex-shrink: 0;
  
}

.intro {
  font-size: 1.1rem;
  line-height: 2;
  color: #f0e6d2;
  margin-bottom: 22px;
  max-width: 60ch;
}

.hours {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(184, 134, 59, 0.2);
  border: 1px solid rgba(184, 134, 59, 0.5);
  color: #f0e6d2;
  padding: 9px 18px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
}

.scroll-hint {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.75rem;
  animation: bounce 2.4s ease-in-out infinite;
}

.scroll-icon {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
}

@keyframes bounce {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 8px); }
}

.tips-box {
  max-width: 760px;
  margin: 0 auto;
  padding: 72px 24px 96px;
  text-align: center;
}

.tips-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tips-box h2 {
  font-family: 'Aref Ruqaa', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #241a10;
  margin: 0 0 32px;
}

.tips-box ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-align: right;
}

.tips-box li {
  color: #3a2f22;
  line-height: 1.8;
  font-size: 1rem;
  background: #fffdf8;
  border: 1px solid #e2d8c4;
  border-radius: 12px;
  padding: 18px 24px;
}

@media (max-width: 600px) {
  .hero {
    padding: 40px 20px;
  }
}
</style>