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
  background: #f3eee3;
  color: #332e28;
  direction: rtl;
  font-family: "Markazi Text", "Amiri", serif;

  padding: 55px 24px 0;

  border-top: 1px solid #e5dfd3;
}

/* ================================
   MAIN FOOTER
================================ */

.footer-inner {
  width: 100%;
  max-width: 1050px;

  margin: 0 auto;

  display: grid;

  /*
    الترتيب من اليمين:
    حكاية مكان | استكشف | المدن | روابط
  */
  grid-template-columns: 1.8fr 1fr 1fr 1fr;

  column-gap: 55px;

  text-align: right;
}


/* ================================
   BRAND
================================ */

.footer-brand {
  display: flex;
  flex-direction: column;

  gap: 11px;
}

.brand-line {
  display: flex;
  align-items: center;

  justify-content: flex-start;

  gap: 9px;
}

.brand-icon {
  width: 37px;
  height: 37px;

  border-radius: 8px;

  background: #2f7069;
  color: #f3eee3;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;
}

.brand-icon svg {
  width: 17px;
  height: 17px;
}

.brand-name {
  margin: 0;

  font-size: 1.35rem;

  font-weight: 700;

  line-height: 1.2;

  color: #302b26;
}

.brand-desc {
  margin: 0;

  max-width: 300px;

  font-size: 0.88rem;

  line-height: 1.8;

  color: #70685c;
}


/* ================================
   FOOTER COLUMNS
================================ */

.footer-col {
  min-width: 0;
}

.col-title {
  margin: 0 0 16px;

  font-size: 0.98rem;

  font-weight: 700;

  line-height: 1.2;

  color: #302b26;
}

.col-list {
  list-style: none;

  margin: 0;
  padding: 0;

  display: flex;

  flex-direction: column;

  gap: 8px;
}

.col-list a,
.link-button {
  display: inline-block;

  padding: 0;

  margin: 0;

  background: transparent;

  border: none;

  color: #776f63;

  text-decoration: none;

  font-family: inherit;

  font-size: 0.88rem;

  line-height: 1.5;

  cursor: pointer;

  transition: color 0.2s ease;
}

.col-list a:hover,
.col-list a.router-link-active,
.link-button:hover {
  color: #2f7069;
}


/* ================================
   BOTTOM LINE
================================ */

.footer-bottom {
  width: 100%;
  max-width: 1050px;

  margin: 55px auto 0;

  padding: 23px 0 25px;

  border-top: 1px solid #ded8cb;

  display: flex;

  justify-content: space-between;

  align-items: center;

  font-size: 0.78rem;

  line-height: 1.5;

  color: #a39a8a;
}


/* ================================
   TABLET
================================ */

@media (max-width: 860px) {

  .site-footer {
    padding-top: 45px;
  }

  .footer-inner {
    grid-template-columns: 1fr 1fr;

    column-gap: 40px;

    row-gap: 35px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    margin-top: 40px;
  }
}


/* ================================
   MOBILE
================================ */

@media (max-width: 520px) {

  .site-footer {
    padding: 40px 20px 0;
  }

  .footer-inner {
    grid-template-columns: 1fr;

    gap: 28px;
  }

  .footer-brand {
    grid-column: auto;
  }

  .brand-desc {
    max-width: 100%;
  }

  .footer-bottom {
    margin-top: 35px;

    padding: 20px 0;

    flex-direction: column;

    gap: 8px;

    text-align: center;
  }
}
</style>

