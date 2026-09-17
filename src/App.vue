<script setup>
import Navbar from './Components/Navbar.vue'
import SubscribeSection from './Components/SubscribeSection.vue'
import Footer from './Components/Footer.vue'
</script>

<template>
  <Navbar />
  <main>
    <router-view />
    <SubscribeSection />
  </main>
  <Footer />
</template>