<template lang="">
  <section id="gallery">
    <div class="">
      <h1 class="text-primary text-2xl sm:text-4xl font-Lato font-extrabold text-center">Our Gallery View</h1>
      <div  class="flex flex-col lg:flex-row gap-[10px] mt-9 ">
        
        <div class="w-full lg:w-1/3 aspect-square lg:aspect-auto overflow-hidden">
          <img src="/assets/images/gallery/gallery1.webp" alt="" srcset="" class="w-full h-full object-cover">
        </div>
        
        <div class=" w-full lg:w-2/3 lg:grid lg:grid-cols-2 gap-[10px] flex lg:flex-none overflow-x-auto whitespace-nowrap scrollbar-hide">
          <img v-for="image in gallery" :key="image"  :src="`/assets/images/gallery/${image.name}`" alt="" srcset="" class="w-3/4 lg:w-full">
        </div>

      </div>
    </div>
  </section>
</template>



<script>
export default {
  setup(){
    let gallery = [
      {name: 'gallery2.webp'},
      {name: 'gallery3.webp'},
      {name: 'gallery4.webp'},
      {name: 'gallery5.webp'},
    ]
    return {gallery}
  }
};
</script>
<style>
/* Sembunyikan scrollbar di mobile */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
