<template>
    <div v-if="!loaded" class="loader">Sabar..</div>
    <div v-else class="main-app">
      <slot />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const loaded = ref(false)
  
  onMounted(() => {
    window.addEventListener('load', () => {
      loaded.value = true
    })
  })
  </script>
  
  <style>
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    z-index: 9999;
  }
  </style>
  