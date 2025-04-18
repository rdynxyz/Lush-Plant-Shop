<script setup>
import navbar from  './components/navbar.vue'
import home from  './components/home.vue'
import about from  './components/about.vue'
import offer from  './components/offer.vue'
import services from  './components/services.vue'
import gallery from  './components/gallery.vue'
import testimonials from  './components/testimonials.vue'
import newsletter from  './components/newsletter.vue'
import blog from  './components/blog.vue'
import contactFooter from  './components/contact-footer.vue'
import LoadingScreen from './components/LoadingScreen.vue'
// import YourStuff from './components/YourStuff.vue'
</script>

<template>
  <LoadingScreen>
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
    </div>
      <newsletter/>
    <div class="container m-auto px-6 space-y-[118px]">
        <blog/>
      </div>
      <contactFooter/>
  </div>
  </LoadingScreen>
</template>

<style scoped>

</style>
