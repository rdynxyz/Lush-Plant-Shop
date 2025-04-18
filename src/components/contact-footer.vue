<template lang="">
  <footer id="contact" class="bg-primary w-full relative  flex flex-col items-center justify-between overflow-hidden mt-[118px]">
    <img src="/assets/icons/foot_plant_1.svg" alt="" class="absolute left-16 top-20 opacity-10 md:opacity-20 z-0 ">
    <img src="/assets/icons/foot_plant_2.svg" alt="" class="absolute right-16 top-44 opacity-0 md:opacity-20 z-0 ">
    <div  class="container items-center flex flex-col justify-center min-h-[334px] gap-9 z-10">
      <h1 class="font-Lato font-bold text-3xl sm:text-[32px] text-white z-50 text-center content-center" >
        Feel free to contact us
      </h1>
      <div class="flex gap-5 md:gap-[72px]">
        <div v-for="socMed in socialMedia" :key="socMed" class="h-14 w-14 border-2 rounded-full flex justify-center items-center hover:-translate-y-1 transition-transform duration-200">
          <a :href="socMed.link" >
            <img :src="`/assets/icons/social media/${socMed.img}`" alt="">
          </a>
        </div>
      </div>
      <div class="text-white/80 flex flex-wrap justify-center md:flex-row first-letter:first-line: gap-x-14 md:gap-x-[60px] gap-y-6 md:gap-y-0 text-base font-bold text-center px-6 md:px-0">
        <a v-for="nav in navbar" :key="nav" :href="nav.link"
          class="relative after:contents-[''] after:h-[1px] after:w-0 after:left-0 after:bg-white after:absolute after:bottom-[-6px] after:duration-300 hover:after:w-full cursor-pointer">
          {{nav.name}}
        </a>
      </div>
    </div>
    <div id="footer" class="bg-black h-10 content-end w-full text-white/80 flex items-center justify-center text-base font-bold z-10">
      <p>Copyright © 2021 Lush. All rights reserved.</p>
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