<script setup>
const cities = [
  { name: 'القاهرة', slug: 'cairo' },
  { name: 'الجيزة', slug: 'giza' },
  { name: 'الأقصر', slug: 'luxor' },
  { name: 'أسوان', slug: 'aswan' },
  { name: 'الإسكندرية', slug: 'alexandria' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <!-- شعار حكاية مكان -->
      <div class="footer-brand">
        <div class="brand-line">
          <span class="brand-icon">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 12 2a7 7 0 0 1 7 7.5C19 14.8 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.2" />
            </svg>
          </span>
          <h3 class="brand-name">حكاية مكان</h3>
        </div>
        <p class="brand-desc">
          دليلٌ تفاعلي يروي حكايات المعالم التاريخية والثقافية في مصر، ويأخذك في رحلةٍ عبر الزمن من القراءة إلى اليوم.
        </p>
      </div>

      <!-- استكشف -->
      <nav class="footer-col" aria-label="استكشف">
        <h4 class="col-title">استكشف</h4>
        <ul class="col-list">
          <li><router-link to="/explore">كل الأماكن</router-link></li>
          <li><router-link to="/cities">المدن</router-link></li>
          <li><router-link to="/about">عن المشروع</router-link></li>
          <li><router-link to="/search">البحث</router-link></li>
        </ul>
      </nav>

      <!-- المدن -->
      <nav class="footer-col" aria-label="المدن">
        <h4 class="col-title">المدن</h4>
        <ul class="col-list">
          <li v-for="city in cities" :key="city.slug">
            <router-link :to="`/cities/${city.slug}`">
              {{ city.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- روابط -->
      <nav class="footer-col" aria-label="روابط">
        <h4 class="col-title">روابط</h4>
        <ul class="col-list">
          <li><router-link to="/about#faq">الأسئلة الشائعة</router-link></li>
          <li><router-link to="/privacy">سياسة الخصوصية</router-link></li>
          <li><router-link to="/terms">شروط الاستخدام</router-link></li>
        </ul>
      </nav>
    </div>

    <div class="footer-bottom">
      <span>صُمّم لعشّاق التاريخ المصري</span>
      <span>© 2026 حكاية مكان. جميع الحقوق محفوظة.</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #f2ede1;
  color: #3a332b;
  padding: 56px 24px 32px;
  direction: rtl;
  font-family: 'Markazi Text', 'Amiri', serif;
  border-top: 1px solid #e3dac7;
}

.footer-inner {
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 32px;
  text-align: right;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.brand-line {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  justify-content: flex-end;
}

.brand-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: #2f6f68;
  color: #f2ede1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.brand-desc {
  font-size: 0.95rem;
  line-height: 1.9;
  color: #6b6255;
  margin: 0;
  max-width: 34ch;
  margin-inline-start: auto;
}

.col-title {
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 14px;
}

.col-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.col-list a,
.link-button {
  color: #6b6255;
  text-decoration: none;
  font-size: 0.95rem;
  font-family: inherit;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-block;
  transition: color 0.15s ease;
}

.col-list a:hover,
.col-list a.router-link-active,
.link-button:hover {
  color: #2f6f68;
}

@media (max-width: 860px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 520px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }
}

.footer-bottom {
  max-width: 1140px;
  margin: 40px auto 0;
  padding-top: 24px;
  border-top: 1px solid #e3dac7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #a89c86;
}

@media (max-width: 520px) {
  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
