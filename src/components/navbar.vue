<template lang="">
    <div class="w-full md:container m-auto flex justify-between md:h-28 items-center text-white z-[1] bg-primary backdrop-blur-sm md:bg-transparent fixed md:relative left-0 md:left-auto px-6 py-3 md:px-0">
      <div class="mr-5 md:pr-0">
        <img src="/assets/icons/Lush.svg" alt="" class="w-28" />
      </div>
  
      <!-- 🔧 Dibungkus div dengan overflow-x-auto dan whitespace-nowrap -->
      <div class="text-lg font-Lato font-medium block overflow-x-auto md:overflow-visible whitespace-nowrap scroll-hidden">
        <ul class="flex md:space-x-14 space-x-8 flex-nowrap">
          <!-- 🔧 flex-nowrap + space-x-8 biar tetap satu baris & responsif -->
          <li v-for="link in links" :key="link" class="flex justify-center items-center">
            <a
              :href="link.link"
              @click="handler"
              class="relative after:contents-[''] after:h-[1px] after:w-0 after:left-0 after:bg-white after:absolute after:bottom-[-6px] after:duration-300 hover:after:w-full cursor-pointer"
            >
              {{ link.name }}
            </a>
          </li>
          <li class="inline-block">
            <!-- 🔧 dibungkus <li> biar tetap inline -->
            <button class="outline outline-1 px-8 py-1 rounded-[3px] bg-white md:bg-transparent md:hover:bg-primary text-primary md:text-white hover:outline-none duration-150">
              Call Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    setup() {
      let links = [
        { name: "Home", link: "#", id: "home" },
        { name: "About Us", link: "#about" },
        { name: "Planters", link: "#gallery" },
        { name: "Contact", link: "#footer" },
      ];
      return { links };
    },
  };
  </script>
  
  <style>
  .scroll-hidden::-webkit-scrollbar {
  display: none;
}
.scroll-hidden {
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
}
  </style>
 