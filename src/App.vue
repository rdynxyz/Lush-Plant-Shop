<script setup>
import navbar from  './components/navbar.vue'
import home from  './components/home.vue'
import secondPage from  './components/second-page.vue'
import thirdPage from  './components/third-page.vue'
</script>

<template>
  <div class="bg-cover bg-center bg-no-repeat bg-[url('/assets/images`/background.webp')] h-[100vh] w-full">
    <div class="h-[100vh] px-6">
      <navbar/>
      <home/>
    </div>
    <div class="container m-auto px-6 space-y-[118px]">
        <secondPage/>
        <thirdPage/>
    </div>
  </div>
</template>

<style scoped>

</style>
