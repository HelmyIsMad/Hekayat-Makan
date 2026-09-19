<template>
  <main class="page">
    <div class="wrap">
      <h1>الصفحة غير موجودة</h1>
      <p>عذراً، الرابط غير صحيح.</p>
      <router-link to="/" class="back">العودة للرئيسية ←</router-link>
    </div>
  </main>
</template>

<style scoped>
.page { min-height: calc(100vh - 82px); background: #F8F4ED; display: grid; place-items: center; direction: rtl; }
.wrap { text-align: center; padding: 40px 24px; }
h1 { color: #241a10; }
p { color: #6b573f; }
.back { color: #176F73; font-weight: 600; text-decoration: none; }
</style>
