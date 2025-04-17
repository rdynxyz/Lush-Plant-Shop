<template lang="">
  <footer class="bg-primary absolute right-0 left-0 w-full flex flex-col items-center justify-between">
    <div id="contact" class="container items-center flex flex-col justify-center h-[334px] gap-9">
      <h1 class="font-Lato font-bold text-3xl sm:text-[32px] text-white z-50 text-center content-center" >
        Feel free to contact us
      </h1>
      <div class="flex gap-[72px]">
        <div v-for="socMed in socialMedia" :key="socMed" class="h-14 w-14 border-2 rounded-full flex justify-center items-center">
          <a :href="socMed.link">
            <img :src="`/assets/icons/social media/${socMed.img}`" alt="">
          </a>
        </div>
      </div>
      <div class="text-white flex gap-16 text-base font-bold">
        <a v-for="nav in navbar" :key="nav" :href="nav.link">{{nav.name}}</a>
      </div>
    </div>
    <div id="footer" class="bg-black h-10 content-end w-full text-white/80 flex items-center justify-center text-base font-bold">
      <p>Copyright © 2022 Radyan. All rights reserved.</p>
    </div>
  </footer>

</template>
<script>
import {ref} from 'vue'
export default {
  setup(){
    let socialMedia = [
      {
        img: "instagram.svg",
        link: "https://www.instagram.com/radyanbintang/"
      },
      { 
        img: "facebook.svg",
        link: "https://www.facebook.com/radyanbintangh"
      },
      { 
        img: "twitter.svg",
        link: "https://www.facebook.com/radyanbintangh"
      },
    ];

    let navbar = [
      {
        name: 'Home',
        link: '#home'
      },
      {
        name: 'About Us',
        link: '#about'},
      {
        name: 'Plants',
        link: '#about'},
      {
        name: 'Delivery',
        link: '#about'},
      {
        name: 'Blog',
        link: '#blog'},
      {
        name: 'Contact Us',
        link: '#'},
    ]
    return {socialMedia, navbar}
  }
}
</script>
<style lang="">
  
</style>