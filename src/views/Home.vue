<template>
  <!-- رحمة: الصفحة الرئيسية -->
  <main class="page">
    
    <!-- Hero -->
    <HeroSection />

    <!--   حكاية الأسبوع ساندي -->
    <WeeklyStory />

    <!-- باقي محتوى الصفحة -->
    <Main />

  </main>
</template>

<script setup>
import Main from '../Components/Main.vue'
import HeroSection from '../Components/HeroSection.vue'
import WeeklyStory from '../Components/WeeklyStory.vue'
</script>

<style scoped>
/* رحمة: مساحة الصفحة بنفس لون الـ Navbar */
.page {
  width: 100%;
  min-height: calc(100vh - 82px);
  background: #F8F4ED;
}
</style>