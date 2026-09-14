<script setup>
import Navbar from './Components/Navbar.vue'
import HeroSection from './Components/HeroSection.vue'
import SubscribeSection from './Components/SubscribeSection.vue'
import Footer from './Components/Footer.vue'
</script>

<template>
  <Navbar />
  <main>
    <HeroSection />
    <SubscribeSection />
    <router-view />
  </main>

  <Footer />
</template>