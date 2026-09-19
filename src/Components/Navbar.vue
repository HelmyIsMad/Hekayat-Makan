<template>
  <!-- رحمة: ده الـ Navbar الرئيسي للمشروع -->
  <nav class="navbar">

    <!-- رحمة: الحاوية اللي بتجمع مجموعتي الـ Navbar -->
    <div class="navbar-container">

      <!-- رحمة: المجموعة اللي فيها اللوجو وروابط الصفحات -->
      <div class="navbar-right">

        <!-- رحمة: اللوجو واسم المشروع بيرجعوا للصفحة الرئيسية -->
        <router-link to="/" class="logo">

          <!-- رحمة: المربع اللي فيه علامة الموقع -->
          <div class="logo-icon">

            <!-- رحمة: أيقونة تحديد الموقع -->
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <!-- رحمة: رسم شكل علامة الموقع -->
              <path
                d="M12 21C12 21 19 14.8 19 9.5C19 5.91 15.87 3 12 3C8.13 3 5 5.91 5 9.5C5 14.8 12 21 12 21Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <!-- رحمة: الدائرة الموجودة داخل علامة الموقع -->
              <circle
                cx="12"
                cy="9.5"
                r="2.5"
                stroke="currentColor"
                stroke-width="2"
              />

            </svg>

          </div>

          <!-- رحمة: اسم المشروع -->
          <span class="logo-text">حكاية مكان</span>

        </router-link>


        <!-- رحمة: روابط الصفحات الأساسية -->
        <div class="nav-links">

          <!-- رحمة: رابط الصفحة الرئيسية -->
          <router-link
            to="/"
            class="nav-item"
            exact-active-class="active"
          >
            الرئيسية
          </router-link>


          <!-- رحمة: رابط صفحة استكشف -->
          <!-- رحمة: نفس رابط صفحة استكشف اللي موجود في زر ابدأ الاستكشاف -->
          <router-link
            to="/explore"
            class="nav-item"
            active-class="active"
          >
            استكشف
          </router-link>


          <!-- رحمة: رابط صفحة المدن -->
          <router-link
            to="/cities"
            class="nav-item"
            active-class="active"
          >
            المدن
          </router-link>


          <!-- رحمة: رابط صفحة عن المشروع -->
          <router-link
            to="/about"
            class="nav-item"
            active-class="active"
          >
            عن المشروع
          </router-link>

        </div>

      </div>


      <!-- رحمة: المجموعة الخاصة بالبحث وزر ابدأ الاستكشاف -->
      <div class="navbar-actions">

        <!-- رحمة: مربع البحث -->
        <div class="search-box">

          <!-- رحمة: أيقونة البحث -->
          <svg
            class="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <!-- رحمة: الدائرة الأساسية لأيقونة البحث -->
            <circle
              cx="11"
              cy="11"
              r="6.5"
              stroke="currentColor"
              stroke-width="1.8"
            />

            <!-- رحمة: الخط الخارج من عدسة البحث -->
            <path
              d="M16 16L21 21"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />

          </svg>


          <!-- رحمة: حقل البحث عن مكان أو مدينة -->
          <input
            type="text"
            placeholder="ابحث عن مكان أو مدينة..."
          />

        </div>


        <!-- رحمة: زر ابدأ الاستكشاف -->
        <!-- رحمة: الزر ده مربوط بنفس صفحة استكشف -->
        <router-link
          to="/explore"
          class="start-button"
        >
          ابدأ الاستكشاف
        </router-link>

      </div>

    </div>

  </nav>
</template>


<style scoped>
:global(:root) {
  --teal: #1e4a45;
  --dark: #241a10;
  --text: #6b573f;
  --cream: #f4efe6;
  --border: #e2d8c4;
}

:global(html),
:global(body),
:global(#app) {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  background: var(--cream);
}

.navbar {
  width: 100%;
  height: 88px;
  background: rgba(244, 239, 230, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(36, 26, 16, 0.03);
}

.navbar-container {
  width: 100%;
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  padding: 0 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  direction: rtl;
  justify-content: space-between;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 35px;
  flex-shrink: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--dark);
  flex-shrink: 0;
  transition: opacity 0.2s ease;
}

.logo:hover {
  opacity: 0.9;
  text-decoration: none;
}

.logo-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--teal);
  color: #fffdf8;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(30, 74, 69, 0.2);
}

.logo-icon svg {
  width: 20px;
  height: 20px;
}

.logo-text {
  font-family: 'Aref Ruqaa', serif;
  font-size: 1.85rem;
  font-weight: 700;
  white-space: nowrap;
  color: #241a10;
  letter-spacing: 0.8px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.nav-item {
  color: var(--text);
  text-decoration: none;
  font-family: 'Markazi Text', 'Amiri', serif;
  font-size: 1.15rem;
  font-weight: 500;
  white-space: nowrap;
  padding: 8px 14px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.nav-item:hover {
  color: var(--teal);
  background: rgba(30, 74, 69, 0.06);
  text-decoration: none;
  transform: translateY(-1px);
}

.nav-item.active {
  color: #b8863b;
  font-weight: 700;
  background: rgba(184, 134, 59, 0.08);
  text-decoration: none;
}

.nav-item::after {
  display: none;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.search-box {
  width: 270px;
  height: 44px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #faf6ed;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 14px;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(36, 26, 16, 0.02);
}

.search-box:focus-within {
  border-color: var(--teal);
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(30, 74, 69, 0.1), inset 0 2px 4px rgba(36, 26, 16, 0.02);
}

.search-icon {
  width: 18px;
  height: 18px;
  color: #8c785f;
  flex-shrink: 0;
  margin-left: 10px;
}

.search-box input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: var(--dark);
  font-size: 0.95rem;
  font-family: 'Markazi Text', 'Amiri', inherit;
  direction: rtl;
}

.search-box input::placeholder {
  color: #a3927d;
}

.start-button {
  height: 44px;
  padding: 0 22px;
  border-radius: 12px;
  background: var(--teal);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'Markazi Text', 'Amiri', inherit;
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(30, 74, 69, 0.25);
  transition: all 0.3s ease;
}

.start-button:hover {
  background: #153532;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(30, 74, 69, 0.35);
  text-decoration: none;
}

@media (max-width: 1200px) {
  .navbar-container {
    padding: 0 24px;
  }
  .navbar-right {
    gap: 25px;
  }
  .search-box {
    width: 210px;
  }
}

@media (max-width: 950px) {
  .nav-links {
    display: none;
  }
  .search-box {
    width: 190px;
  }
}

@media (max-width: 600px) {
  .navbar {
    height: 76px;
  }
  .navbar-container {
    padding: 0 16px;
  }
  .logo-text {
    font-size: 1.5rem;
  }
  .logo-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
  }
  .search-box {
    display: none;
  }
  .start-button {
    height: 38px;
    padding: 0 14px;
    font-size: 1rem;
  }
}
</style>