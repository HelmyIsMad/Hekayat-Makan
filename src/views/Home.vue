<template>
  <!-- رحمة: الصفحة الرئيسية حالياً فاضية لأن محتوى الـ Hero هيتضاف بعدين -->
  <main class="page">
    <HeroSection />
    <Main />
  </main>
</template>

<script setup>
import Main from '../Components/Main.vue'
import HeroSection from '../Components/HeroSection.vue'
</script>

<style scoped>
/* رحمة: خليت مساحة الصفحة بنفس لون الـ Navbar */
.page {
  width: 100%;
  min-height: calc(100vh - 82px);
  background: #F8F4ED;
}
</style>