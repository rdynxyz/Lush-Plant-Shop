<template lang="">
  <div class="grid xl:grid-cols-2">
    <div class="">
      <img src="/assets/images/fourth.jpg" alt="" />
    </div>
    <div class="grid sm:grid-cols-2">
      <div
        v-for="benefit in benefits"
        :key="benefit"
        :class="`${benefit.bgDesktop} ${benefit.bgAndroid} flex items-center justify-center p-6 sm:px-20 xl:py-1 xl:px-8 2xl:py-14 2xl:px-20`"
      >
        <div class="">
          <img :src="`/assets/icons/${benefit.picture}`" alt="" class="h-24" />
          <h1 class="font-bold mt-8 text-xl text-primary">
            {{ benefit.subject }}
          </h1>
          <p class="mt-3 text-secondary">{{ benefit.description }}</p>
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
        bgDesktop: "sm:bg-[#f8f8f8]",
        bgAndroid: "bg-[#ffffff]",
      },
      {
        picture: "Pruning.png",
        subject: "Excelent Service",
        description: "We pride ourselves on providing excellent service, going above and beyond to meet our customers needs",
        bgDesktop: "sm:bg-[#ffffff]",
        bgAndroid: "bg-[#f8f8f8]",
      },
    ];
    return { benefits };
  },
};
</script>
<style lang=""></style>
