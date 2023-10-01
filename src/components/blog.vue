<template lang="">
  <div class="z-50 pt-[518px]">
    <h1
      class="text-center text-primary text-2xl sm:text-4xl font-Lato font-extrabold capitalize"
    >
      Interesting blog to read
    </h1>
    <div class="grid md:grid-cols-3 mt-9 gap-8">
      <div v-for="card in cards" :key="card" class="h-full">
        <div class="w-full h-80 overflow-hidden rounded-xl flex">
          <img
            :src="`/assets/images/blog/${card.img}`"
            alt=""
            srcset=""
            class="object-cover min-w-full min-h-full rounded-xl"
          />
        </div>
        <div class="mt-6">
          <h2 class="text-primary font-Lato text-xl font-bold">
            {{card.header}}
          </h2>
          <p class="mt-2">
            {{card.desc}}
          </p>
          <div class="flex justify-between mt-5 items-end content-end h-full">
            <div class=" flex h-full">
                <img src="/assets/icons/date.svg" alt="">
                January 20, 2023
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
      },
      {
        img: "blog2.jpg",
        header: "The benefits of plants in your room",
        desc: "Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....",
      },
      {
        img: "blog3.jpg",
        header: "Hobbyist plants in the house",
        desc: "Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....",
      },
    ];
    return { cards }
  },
};
</script>
<style lang=""></style>
