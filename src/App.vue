<script setup>
import HeroSection from './Components/HeroSection.vue'
import Navbar from './Components/Navbar.vue'
import WeeklyStory from './Components/WeeklyStory.vue'
import SubscribeSection from './Components/SubscribeSection.vue'
import Footer from './Components/Footer.vue'
</script>

<template>
  <Navbar />

  <main>
    <!-- الرئيسية -->
    <HeroSection />

    <!-- حكاية الأسبوع -->
    <WeeklyStory />

    <!-- الاشتراك -->
    <SubscribeSection />
  </main>

  <Footer />
</template>