<script setup>
import SubscribeSection from './Components/SubscribeSection.vue'
import Footer from './Components/Footer.vue'
import Navbar from './Components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main>
    <SubscribeSection />
    <router-view />
  </main>

  <Footer />
</template>