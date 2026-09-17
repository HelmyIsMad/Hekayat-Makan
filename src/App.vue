<script setup>
import Navbar from './Components/Navbar.vue'
import WeeklyStory from './Components/WeeklyStory.vue'
import SubscribeSection from './Components/SubscribeSection.vue'
import Footer from './Components/Footer.vue'
</script>

<template>
  <Navbar />
<<<<<<< HEAD

  <main>
    <!-- الرئيسية -->
    <HeroSection />

    <!-- حكاية الأسبوع -->
    <WeeklyStory />

    <!-- الاشتراك -->
=======
  <main class="page-fade-wrap">
    <Transition name="page" mode="out-in">
      <router-view />
    </Transition>
>>>>>>> e12253778d5ad7f57e0bff06772fa84616990459
    <SubscribeSection />
  </main>

  <Footer />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>