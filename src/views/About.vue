<template>
  <!-- صفحة عن المشروع: وصف بسيط + أسئلة شائعة -->
  <main class="page">
    <div class="wrap">
      <span class="eyebrow">عن المشروع</span>
      <h1>حكاية مكان</h1>
      <p class="lead">
        «حكاية مكان» دليل الأماكن التاريخية والثقافية في مصر. لكل مكانٍ في مصر حكاية تستحق أن تُروى،
        لذلك جمعنا المعابد والأهرامات والمساجد والقلاع والمتاحف في مكان واحد، مرتبةً حسب المدينة
        والحقبة الزمنية، مع قصة كل معلمٍ من بدايته حتى اليوم.
      </p>

      <div class="features">
        <RouterLink to="/explore" class="feature">
          <strong>استكشف المعالم</strong>
          <span>تصفح كل المواقع الموثقة في مكان واحد.</span>
        </RouterLink>
        <RouterLink to="/cities" class="feature">
          <strong>مدن مصر</strong>
          <span>اختر مدينة وتعرف على معالمها وحكايتها.</span>
        </RouterLink>
        <RouterLink to="/search" class="feature">
          <strong>ابحث بسرعة</strong>
          <span>دوّر على أي مكان أو مدينة أو حقبة.</span>
        </RouterLink>
      </div>

      <h2 id="faq">أسئلة شائعة</h2>
      <div class="faq">
        <details open>
          <summary>ما هو مشروع «حكاية مكان»؟</summary>
          <p>
            مشروع يعرض أبرز المعالم التاريخية والثقافية في مصر: صورها، ومواعيد زيارتها، وحكاية كل
            معلم. البيانات معروضة حسب المدينة والحقبة الزمنية لتسهيل الاستكشاف.
          </p>
        </details>
        <details>
          <summary>كيف أستكشف المعالم والمدن؟</summary>
          <p>
            من صفحة «استكشف» تشوف كل المعالم مرة واحدة، ومن صفحة «المدن» تختار مدينة لتعرض تفاصيلها
            ومعالمها، والضغط على أي معلم يفتح صفحته الخاصة بقصته الكاملة ومواعيد زيارته.
          </p>
        </details>
        <details>
          <summary>ما أفضل وقت لزيارة المعابد والمناطق الأثرية؟</summary>
          <p>
            الفترة من أكتوبر إلى أبريل هي الأنسب لاعتدال الجو، ويفضل الزيارة في الصباح الباكر
            (وقت الفتح) أو آخر النهار لتفادي شمس الظهيرة والزحام، والإضاءة وقتها أفضل للصور.
            معظم المواقع تفتح حوالي السادسة صباحًا وتغلق الخامسة مساءً، مع اختلافات موسمية.
          </p>
        </details>
        <details>
          <summary>هل أحتاج حجز التذاكر مسبقًا؟</summary>
          <p>
            الحجز المسبق عبر الإنترنت يوفر وقت الانتظار عند المداخل خصوصًا في المواسم والأعياد،
            مع وجود تخفيضات للطلبة ببطاقة سارية. احتفظ بتذكرتك معك طوال الزيارة، وآخر دخول
            عادةً قبل موعد الإغلاق بساعة.
          </p>
        </details>
        <details>
          <summary>هل التصوير مسموح داخل المعابد والمقابر؟</summary>
          <p>
            التصوير الخارجي متاح غالبًا ضمن التذكرة، لكن التصوير الداخلي يحتاج في كثير من المواقع
            تذكرة تصوير منفصلة، والفلاش ممنوع تمامًا لأنه يتلف الألوان القديمة، وبعض المقابر
            تمنع التصوير نهائيًا. راجع تعليمات كل موقع قبل الزيارة.
          </p>
        </details>
        <details>
          <summary>ماذا آخذ معي في الزيارة؟</summary>
          <p>
            مياه للشرب، وقبعة وواقي شمس، وحذاء مريح مغلق للأرضيات غير المستوية، وملابس خفيفة
            بأكمام تحمي من الشمس وتناسب قدسية الأماكن الدينية.
          </p>
        </details>
        <details>
          <summary>هل أحتاج مرشدًا سياحيًا؟</summary>
          <p>
            ليس إلزاميًا، لكن مرشدًا متخصصًا في علم المصريات يضيف الكثير لفهم النقوش وقصص
            الملوك، خصوصًا في المجمعات الكبيرة مثل الكرنك ووادي الملوك.
          </p>
        </details>
      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.page {
  width: 100%;
  min-height: calc(100vh - 82px);
  background: #F8F4ED;
  direction: rtl;
}

.wrap {
  max-width: 900px;
  margin: 0 auto;
  padding: 64px 24px;
}

.eyebrow {
  display: block;
  color: #6b573f;
  font-weight: 600;
  margin-bottom: 6px;
}

h1 {
  font-size: 2.5rem;
  margin: 0 0 16px;
  color: #241a10;
}

.lead {
  font-size: 1.1rem;
  line-height: 1.9;
  color: #3a332b;
  margin: 0 0 40px;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 56px;
}

.feature {
  background: #fff;
  border: 1px solid #e2d8c4;
  border-radius: 14px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.feature:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 30px -18px rgba(30, 74, 69, 0.4);
  border-color: #b8863b;
}

.feature strong {
  color: #1e4a45;
  font-size: 1.05rem;
}

.feature span {
  font-size: 0.9rem;
  color: #6b573f;
  line-height: 1.6;
}

h2 {
  font-size: 1.6rem;
  margin: 0 0 20px;
  color: #241a10;
}

.faq {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

details {
  background: #fff;
  border: 1px solid #e2d8c4;
  border-radius: 14px;
  overflow: hidden;
}

details[open] {
  border-color: #b8863b;
}

summary {
  padding: 18px 20px;
  cursor: pointer;
  font-weight: 700;
  color: #241a10;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

summary::-webkit-details-marker {
  display: none;
}

summary::after {
  content: '+';
  color: #b8863b;
  font-size: 1.4rem;
  font-weight: 400;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

details[open] summary::after {
  transform: rotate(45deg);
}

details p {
  margin: 0;
  padding: 0 20px 20px;
  color: #6b573f;
  line-height: 1.9;
  font-size: 0.95rem;
}

@media (max-width: 700px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
