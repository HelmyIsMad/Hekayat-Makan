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

/* رحمة: الألوان الأساسية اللي مستخدماها في المشروع */
:global(:root) {
  --teal: #176F73;
  --dark: #30251F;
  --text: #6F665E;
  --cream: #F8F4ED;
  --border: #DED8CF;
}


/* رحمة: ظبطت الخلفية العامة عشان ميبقاش فيه لون أبيض */
:global(html),
:global(body),
:global(#app) {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  background: var(--cream);
}


/* رحمة: الشكل الأساسي للـ Navbar */
.navbar {
  width: 100%;
  height: 82px;

  /* رحمة: لون خلفية الـ Navbar */
  background: var(--cream);

  /* رحمة: الخط الفاصل الخفيف تحت الـ Navbar */
  border-bottom: 1px solid #E1DCD4;

  /* رحمة: خليت الـ border محسوب داخل الحجم */
  box-sizing: border-box;
}


/* رحمة: الحاوية اللي بتجمع مجموعتي الـ Navbar */
.navbar-container {
  width: 100%;
  height: 100%;

  /* رحمة: خليت المحتوى بعيد شوية عن أطراف الشاشة */
  padding: 0 75px;

  /* رحمة: خليت الـ padding والـ border داخل الحجم */
  box-sizing: border-box;

  /* رحمة: استخدمت Flex لترتيب المجموعتين */
  display: flex;

  /* رحمة: خليت العناصر في منتصف ارتفاع الـ Navbar */
  align-items: center;

  /* رحمة: اتجاه الصفحة عربي */
  direction: rtl;

  /* رحمة: خليت كل مجموعة في ناحية */
  justify-content: space-between;
}


/* رحمة: المجموعة اللي فيها اللوجو وروابط الصفحات */
.navbar-right {
  display: flex;
  align-items: center;

  /* رحمة: المسافة بين اللوجو ومجموعة الروابط */
  gap: 30px;

  /* رحمة: منعت المجموعة من إنها تتمدد */
  flex-shrink: 0;

  /* رحمة: حركت المجموعة كلها ناحية السيرش */
  transform: translateX(-120px);
}


/* رحمة: شكل اللوجو بالكامل */
.logo {
  display: flex;
  align-items: center;

  /* رحمة: المسافة بين أيقونة الموقع واسم المشروع */
  gap: 9px;

  /* رحمة: شلت الخط اللي تحت اللوجو */
  text-decoration: none;

  /* رحمة: لون اسم المشروع */
  color: var(--dark);

  /* رحمة: منعت اللوجو من التقلص */
  flex-shrink: 0;
}


/* رحمة: المربع اللي موجود فيه Icon الموقع */
.logo-icon {
  width: 44px;
  height: 44px;

  /* رحمة: خليت الحواف ناعمة */
  border-radius: 12px;

  /* رحمة: لون خلفية الأيقونة */
  background: var(--teal);

  /* رحمة: لون الأيقونة */
  color: white;

  /* رحمة: خليت الأيقونة في المنتصف */
  display: flex;
  align-items: center;
  justify-content: center;
}


/* رحمة: حجم أيقونة الموقع */
.logo-icon svg {
  width: 23px;
  height: 23px;
}


/* رحمة: اسم حكاية مكان */
.logo-text {
  font-size: 24px;

  /* رحمة: وزن متوسط من غير ما يكون Bold قوي */
  font-weight: 500;

  /* رحمة: منعت الاسم من النزول لسطر تاني */
  white-space: nowrap;
}


/* رحمة: مجموعة روابط الصفحات */
.nav-links {
  display: flex;
  align-items: center;

  /* رحمة: المسافة بين كل رابط والتاني */
  gap: 22px;

  /* رحمة: منعت المجموعة من التمدد */
  flex-shrink: 0;
}


/* رحمة: شكل روابط الصفحات */
.nav-item {
  /* رحمة: لون الرابط قبل الـ Hover */
  color: var(--text);

  /* رحمة: شلت الخط اللي تحت الرابط */
  text-decoration: none;

  /* رحمة: حجم الخط */
  font-size: 18px;

  /* رحمة: خليت الخط عادي ومش Bold */
  font-weight: 400;

  /* رحمة: منعت الكلام من النزول لسطر تاني */
  white-space: nowrap;

  /* رحمة: حجزت مساحة الـ Hover من البداية */
  padding: 8px 10px;

  /* رحمة: خليت حواف مربع الـ Hover ناعمة */
  border-radius: 8px;

  /* رحمة: خليت تغيير اللون والخلفية ناعم */
  transition:
    color 0.2s ease,
    background 0.2s ease;
}


/* رحمة: لما أقف على أي رابط يظهر مربع خفيف جدًا */
.nav-item:hover {
  /* رحمة: لون الكلام يتحول للـ Teal */
  color: var(--teal);

  /* رحمة: الخلفية خفيفة جدًا عشان متبقاش واضحة زيادة */
  background: rgba(23, 111, 115, 0.06);

  /* رحمة: تأكيد إن مفيش خط تحت الرابط */
  text-decoration: none;
}


/* رحمة: الصفحة الحالية تفضل باللون الـ Teal */
.nav-item.active {
  /* رحمة: لون الصفحة الحالية */
  color: var(--teal);

  /* رحمة: خليت الخط عادي من غير Bold */
  font-weight: 400;

  /* رحمة: مفيش underline */
  text-decoration: none;
}


/* رحمة: تأكيد إن مفيش أي خط إضافي تحت الروابط */
.nav-item::after {
  display: none;
}


/* رحمة: مجموعة البحث وزر ابدأ الاستكشاف */
.navbar-actions {
  display: flex;
  align-items: center;

  /* رحمة: خليت البحث والزر قريبين من بعض */
  gap: 9px;

  /* رحمة: منعت المجموعة من التمدد */
  flex-shrink: 0;

  /* رحمة: قربت المجموعة ناحية الروابط */
  margin-left: 80px;
}


/* رحمة: شكل مربع البحث */
.search-box {
  width: 300px;
  height: 44px;

  /* رحمة: حدود خفيفة لمربع البحث */
  border: 1px solid var(--border);

  /* رحمة: تدوير الحواف */
  border-radius: 13px;

  /* رحمة: لون خلفية البحث */
  background: #FCFAF6;

  /* رحمة: استخدمت Flex لترتيب عناصر البحث */
  display: flex;
  align-items: center;

  /* رحمة: خليت الـ padding داخل حجم العنصر */
  box-sizing: border-box;

  /* رحمة: المسافة الداخلية لمربع البحث */
  padding: 0 14px;
}


/* رحمة: شكل أيقونة البحث */
.search-icon {
  width: 21px;
  height: 21px;

  /* رحمة: لون الأيقونة */
  color: #706961;

  /* رحمة: منعت الأيقونة من التقلص */
  flex-shrink: 0;

  /* رحمة: مسافة بين الأيقونة والكتابة */
  margin-left: 9px;
}


/* رحمة: حقل الكتابة داخل مربع البحث */
.search-box input {
  width: 100%;

  /* رحمة: شلت الحدود الافتراضية */
  border: none;

  /* رحمة: شلت الـ outline */
  outline: none;

  /* رحمة: خليت الخلفية شفافة */
  background: transparent;

  /* رحمة: لون الكتابة */
  color: var(--dark);

  /* رحمة: حجم النص */
  font-size: 15px;

  /* رحمة: استخدمت نفس خط المشروع */
  font-family: inherit;

  /* رحمة: خليت اتجاه الكتابة عربي */
  direction: rtl;
}


/* رحمة: لون الـ Placeholder */
.search-box input::placeholder {
  color: #918980;
}


/* رحمة: زر ابدأ الاستكشاف */
.start-button {
  height: 44px;

  /* رحمة: المسافة الداخلية للزر */
  padding: 0 20px;

  /* رحمة: تدوير حواف الزر */
  border-radius: 12px;

  /* رحمة: لون الزر */
  background: var(--teal);

  /* رحمة: لون النص */
  color: white;

  /* رحمة: خليت الكلام في المنتصف */
  display: flex;
  align-items: center;
  justify-content: center;

  /* رحمة: شلت الخط اللي تحت الزر */
  text-decoration: none;

  /* رحمة: حجم النص */
  font-size: 15px;

  /* رحمة: وزن متوسط */
  font-weight: 500;

  /* رحمة: منعت النص من النزول لسطر تاني */
  white-space: nowrap;

  /* رحمة: خليت حركة الزر ناعمة */
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}


/* رحمة: لما أقف على زر ابدأ الاستكشاف */
.start-button:hover {
  /* رحمة: غمقت لون الزر درجة بسيطة */
  background: #126367;

  /* رحمة: حركة بسيطة لفوق */
  transform: translateY(-1px);

  /* رحمة: تأكيد عدم وجود underline */
  text-decoration: none;
}


/* رحمة: اللوجو مفيش تحته خط حتى عند الـ Hover */
.logo:hover {
  text-decoration: none;
}


/* رحمة: إعدادات الشاشات المتوسطة */
@media (max-width: 1200px) {

  /* رحمة: قللت المسافة من أطراف الشاشة */
  .navbar-container {
    padding: 0 35px;
  }

  /* رحمة: قللت المسافات على الشاشة المتوسطة */
  .navbar-right {
    gap: 20px;

    /* رحمة: قللت حركة المجموعة */
    transform: translateX(-40px);
  }

  /* رحمة: قللت المسافة بين الروابط */
  .nav-links {
    gap: 16px;
  }

  /* رحمة: صغرت مربع البحث */
  .search-box {
    width: 230px;
  }

  /* رحمة: قللت المسافة بين المجموعتين */
  .navbar-actions {
    margin-left: 25px;
  }
}


/* رحمة: إعدادات الشاشات الأصغر */
@media (max-width: 950px) {

  /* رحمة: أخفيت روابط الـ Navbar لتوفير المساحة */
  .nav-links {
    display: none;
  }

  /* رحمة: قللت المسافة من الأطراف */
  .navbar-container {
    padding: 0 25px;
  }

  /* رحمة: رجعت المجموعة لمكانها الطبيعي */
  .navbar-right {
    transform: translateX(0);
  }

  /* رحمة: خليت البحث أصغر */
  .search-box {
    width: 220px;
  }

  /* رحمة: شلت المسافة الإضافية */
  .navbar-actions {
    margin-left: 0;
  }
}


/* رحمة: إعدادات الموبايل */
@media (max-width: 600px) {

  /* رحمة: قللت المسافة من الأطراف */
  .navbar-container {
    padding: 0 12px;
  }

  /* رحمة: صغرت اسم المشروع */
  .logo-text {
    font-size: 21px;
  }

  /* رحمة: صغرت أيقونة اللوجو */
  .logo-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  /* رحمة: أخفيت مربع البحث على الموبايل */
  .search-box {
    display: none;
  }

  /* رحمة: صغرت زر الاستكشاف */
  .start-button {
    height: 40px;
    padding: 0 14px;
    font-size: 13px;
  }
}

</style>