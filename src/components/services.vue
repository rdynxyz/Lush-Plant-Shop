<template lang="">
  <div class="grid xl:grid-cols-2">
    <div class="">
      <img src="/assets/images/fourth.jpg" alt="" />
    </div>
    <div class="grid lg:grid-cols-2">
      <div
        v-for="benefit in benefits"
        :key="benefit"
        :class="`${benefit.bgDesktop} ${benefit.bgAndroid} flex items-center justify-center p-4 lg:p-6 lg:px-20 xl:py-1 xl:px-8 2xl:py-14 2xl:px-20`"
      >
        <div class="flex lg:flex-col items-center lg:items-start">
          <div class="w-20 h-20 lg:w-24 lg:h-24 flex justify-center items-center mr-2">
            <img :src="`/assets/icons/${benefit.picture}`" alt="" class="w-3/4 h-3/4 object-contain" />
          </div>
          <div class="w-full">
            <h1 class="font-bold sm:mt-8 text-xl text-primary">
              {{ benefit.subject }}
            </h1>
            <p class="mt-2 lg:mt-3 text-secondary">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    let benefits = [
      {
        picture: "Time-Cosuming.png",
        subject: "Quality Product",
        description: "Our flowers are of the highest quality, carefully selected and sourced from reputable",
      },
      {
        picture: "Grow_Sprout.png",
        subject: "Always Fresh",
        description: "Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.",
        bgDesktop: "bg-[#f8f8f8]",
        bgAndroid: "bg-[#f8f8f8]",
      },
      {
        picture: "Temperature.png",
        subject: "Work Smart",
        description: "We work smart, using innovative techniques and technology to streamline our processes",
        bgDesktop: "lg:bg-[#f8f8f8]",
        bgAndroid: "bg-[#ffffff]",
      },
      {
        picture: "Pruning.png",
        subject: "Excelent Service",
        description: "We pride ourselves on providing excellent service, going above and beyond to meet our customers needs",
        bgDesktop: "lg:bg-[#ffffff]",
        bgAndroid: "bg-[#f8f8f8]",
      },
    ];
    return { benefits };
  },
};
</script>
<style lang=""></style>
