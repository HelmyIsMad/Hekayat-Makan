<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Navbar from './Components/Navbar.vue'
import SubscribeSection from './Components/SubscribeSection.vue'
import Footer from './Components/Footer.vue'

const route = useRoute()

// رحمة: نخفي الاشتراك والفوتر من صفحة تفاصيل المكان
const isPlaceDetail = computed(() => {
  return route.name === 'PlaceDetail'
})
</script>

<template>
  <Navbar />

  <main>
    <router-view />

    <!-- رحمة: يظهر الاشتراك في باقي الصفحات فقط -->
    <SubscribeSection v-if="!isPlaceDetail" />
  </main>

  <!-- رحمة: الفوتر يظهر في باقي الصفحات فقط -->
  <Footer v-if="!isPlaceDetail" />
</template>
