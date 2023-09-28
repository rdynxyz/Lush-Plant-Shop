<script setup>
import navbar from  './components/navbar.vue'
import home from  './components/home.vue'
import about from  './components/about.vue'
import offer from  './components/offer.vue'
import services from  './components/services.vue'
import gallery from  './components/gallery.vue'
import testimonials from  './components/testimonials.vue'
import newsletter from  './components/newsletter.vue'
</script>

<template>
  <div class="bg-cover bg-center bg-no-repeat bg-[url('/assets/images/background.webp')] h-[100vh] w-full">
    <div class="h-[100vh] px-6">
      <navbar/>
      <home/>
    </div>
    <div class="container m-auto px-6 space-y-[118px]">
        <about/>
        <offer/>
        <services/>
        <gallery/>
        <testimonials/>
        <newsletter/>
    </div>
  </div>
</template>

<style scoped>

</style>
