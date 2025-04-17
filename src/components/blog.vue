<template lang="">
  <div id="blog" class="z-50 pt-[120px]">
    <h1
      class="text-center text-primary text-2xl sm:text-4xl font-Lato font-extrabold capitalize"
    >
      Interesting blog to read
    </h1>
    <div class="grid md:grid-cols-3 mt-9 gap-8">
      <div v-for="card in cards" :key="card" class="h-full md:border-0 rounded-xl bg-gray-100 md:bg-transparent" >
        <div class="w-full h-80 overflow-hidden rounded-xl">
          <img
            :src="`/assets/images/blog/${card.img}`"
            alt=""
            srcset=""
            class="object-cover min-w-full min-h-full "
          />
        </div>
        <div class="mt-6 p-5 pt-0 md:p-0">
          <h2 class="text-primary font-Lato text-xl font-bold">
            {{card.header}}
          </h2>
          <p class="mt-2">
            {{card.desc}}
          </p>
          <div class="flex justify-between mt-5 items-end content-end h-full">
            <div class=" flex h-full w-full">
                <img src="/assets/icons/date.svg" alt="">
                <p class="ml-1"> 
                  {{card.date}}
                </p>
                <div class="flex ml-auto cursor-pointer" @click="send">
                  <p class="text-primary text-base font-bold mr-2">
                    Read More
                  </p>
                  <img src="/assets/icons/arrow.svg" alt="" class="hidden lg:block">
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    let cards = [
      {
        img: "blog1.jpg",
        header: "More productive with an atmosphere of greenery",
        desc: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
        date: "January 20, 2023",
      },
      {
        img: "blog2.jpg",
        header: "The benefits of plants in your room",
        desc: "Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....",
        date: "Januari 12, 2023",
      },
      {
        img: "blog3.jpg",
        header: "Hobbyist plants in the house",
        desc: "Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they also create a calming....",
        date: "Desember 23, 2022",
      },
    ];
    function send(){
      alert('Coming soon, please wait.')
    }
    return { cards, send }
  },
};
</script>
<style lang=""></style>
