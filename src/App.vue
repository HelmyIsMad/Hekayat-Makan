<script setup>
import SubscribeSection from './Components/SubscribeSection.vue'
import Footer from './Components/Footer.vue'
</script>

<template>
  <main>
    <SubscribeSection />
    <router-view />
  </main>

  <Footer />
</template>