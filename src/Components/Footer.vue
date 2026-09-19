<script setup>
import data from '../../data.json'

const cities = data.cities
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
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

      <nav class="footer-col" aria-label="استكشف">
        <h4 class="col-title">استكشف</h4>
        <ul class="col-list">
          <li><router-link to="/explore">كل الأماكن</router-link></li>
          <li><router-link to="/cities">المدن</router-link></li>
          <li><router-link to="/about">عن المشروع</router-link></li>
          <li><router-link to="/search">البحث</router-link></li>
        </ul>
      </nav>

      <nav class="footer-col" aria-label="المدن">
        <h4 class="col-title">المدن</h4>
        <ul class="col-list">
          <li v-for="city in cities" :key="city.id">
            <router-link :to="`/cities/${city.id}`">
              {{ city.name }}
            </router-link>
          </li>
        </ul>
      </nav>

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
  background: #f4efe6;
  color: #332e28;
  direction: rtl;
  font-family: 'Markazi Text', 'Amiri', serif;
  padding: 70px clamp(16px, 4vw, 48px) 0;
  border-top: 1px solid #e2d8c4;
  position: relative;
}

.footer-inner {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  column-gap: 50px;
  text-align: right;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.brand-line {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}

.brand-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #1e4a45;
  color: #fffdf8;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(30, 74, 69, 0.2);
}

.brand-icon svg {
  width: 18px;
  height: 18px;
}

.brand-name {
  margin: 0;
  font-family: 'Aref Ruqaa', serif;
  font-size: 1.85rem;
  font-weight: 700;
  line-height: 1.2;
  color: #241a10;
  letter-spacing: 0.8px;
  white-space: nowrap;
}

.brand-desc {
  margin: 0;
  max-width: 320px;
  font-size: 0.95rem;
  line-height: 1.9;
  color: #6b573f;
}

.footer-col {
  min-width: 0;
}

.col-title {
  margin: 0 0 18px;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.2;
  color: #241a10;
  position: relative;
  padding-bottom: 6px;
}

.col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 2px;
  background: #b8863b;
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
  display: inline-block;
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  color: #6b573f;
  text-decoration: none;
  font-family: inherit;
  font-size: 0.95rem;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.3s ease;
}

.col-list a:hover,
.col-list a.router-link-active,
.link-button:hover {
  color: #1e4a45;
  transform: translateX(-3px);
}

.col-list a.router-link-active {
  font-weight: 700;
  color: #b8863b;
}

.footer-bottom {
  width: 100%;
  max-width: 1300px;
  margin: 60px auto 0;
  padding: 24px 0 28px;
  border-top: 1px solid #e5dfd3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #8c785f;
  text-align: center;
}

@media (max-width: 860px) {
  .site-footer {
    padding-top: 50px;
  }

  .footer-inner {
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    row-gap: 40px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    margin-top: 45px;
  }
}

@media (max-width: 520px) {
  .site-footer {
    padding: 40px 16px 0;
  }

  .footer-inner {
    grid-template-columns: 1fr;
    gap: 32px;
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