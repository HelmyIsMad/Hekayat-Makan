<template>
  <section class="page-wrap">
    <div class="page">
      <h1>شروط الاستخدام</h1>
      <p class="updated">آخر تحديث: 2026</p>

      <div class="block">
        <h2>قبول الشروط</h2>
        <p>باستخدامك لموقع حكاية مكان فإنك توافق على هذه الشروط. إذا كنت لا توافق عليها، يُرجى عدم استخدام الموقع.</p>
      </div>

      <div class="block">
        <h2>استخدام المحتوى</h2>
        <p>المحتوى المنشور لأغراض التعريف والتثقيف. يمكنك مشاركته مع الإشارة إلى المصدر، ولا يجوز إعادة نشره تجاريًا دون إذن.</p>
      </div>

      <div class="block">
        <h2>دقة المعلومات</h2>
        <p>نبذل جهدنا لضمان دقة المعلومات التاريخية، لكننا لا نضمن خلوّها تمامًا من الأخطاء، ونرحّب بأي تصحيح عبر صفحة التواصل.</p>
      </div>

      <div class="block">
        <h2>الملكية الفكرية</h2>
        <p>جميع النصوص والتصاميم والعلامات الخاصة بالموقع مملوكة لحكاية مكان، وتخضع لقوانين الملكية الفكرية المعمول بها.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-wrap {
  width: 100%;
  background-color: #f4efe6;
  direction: rtl;
  min-height: calc(100vh - 82px);
  padding: 20px 0;
}
.page {
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px;
  text-align: right;
  font-family: 'Markazi Text', 'Amiri', serif;
  color: #241a10;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  border: 1px solid #e2d8c4;
}
h1 {
  font-family: 'Aref Ruqaa', 'Amiri', serif;
  font-size: 2.75rem;
  font-weight: 700;
  color: #1e4a45;
  margin-bottom: 4px;
  line-height: 1.3;
}
.updated { 
  color: #b8863b; 
  margin-bottom: 32px; 
  font-size: 1rem; 
  font-weight: 600;
}
.block { 
  margin-bottom: 28px; 
  padding-bottom: 20px;
  border-bottom: 1px solid #f0eaf0;
}
.block:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
h2 {
  font-family: 'Aref Ruqaa', 'Amiri', serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #1e4a45;
  margin-bottom: 8px;
}
p { 
  color: #5b584f; 
  line-height: 1.9; 
  font-size: 1.15rem;
  margin: 0;
}
</style>