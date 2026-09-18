<<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const API = 'http://localhost:3000'

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
        <p class="intro">{{ place.story || place.description }}</p>
        <div class="hours">🕐 {{ place.hours }}</div>
      </div>
    </div>

    <div v-if="placeTips().length" class="tips-box">
      <h2>نصايح للزوار</h2>
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
}

.state-box {
  text-align: center;
  padding: 80px 24px;
  color: #6b573f;
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
  min-height: 88vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(20, 14, 8, 0.88) 0%,
    rgba(20, 14, 8, 0.55) 45%,
    rgba(20, 14, 8, 0.1) 75%
  );
}

.back-link {
  position: relative;
  z-index: 2;
  align-self: flex-start;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.15);
  padding: 8px 16px;
  border-radius: 999px;
  backdrop-filter: blur(4px);
  margin-bottom: auto;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 620px;
  color: #fff;
}

.badge {
  display: inline-block;
  background: #b8863b;
  color: #fff;
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 14px;
}

.meta {
  font-weight: 600;
  opacity: 0.9;
  margin-bottom: 6px;
}

.hero-content h1 {
  font-size: 2.6rem;
  margin: 0 0 16px;
  color: #fff;
}

.intro {
  font-size: 1.05rem;
  line-height: 1.9;
  opacity: 0.95;
  margin-bottom: 18px;
}

.hours {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  padding: 8px 16px;
  border-radius: 8px;
  backdrop-filter: blur(4px);
}

.tips-box {
  max-width: 820px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

.tips-box h2 {
  font-size: 1.3rem;
  margin-bottom: 16px;
}

.tips-box ul {
  margin: 0;
  padding-inline-start: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f1ead9;
  border-radius: 10px;
  padding: 24px 24px 24px 44px;
}

.tips-box li {
  color: #3a2f22;
  line-height: 1.6;
}
</style>