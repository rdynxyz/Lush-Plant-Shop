<template lang="">
  <div>
    <h1 class="text-center text-primary text-4xl font-Lato font-extrabold">
      What do they say about us
    </h1>
    <div class="mt-9 place-items-center grid grid-cols-3">
      <div
        class="bg-[#f8f8f8] w-[360px] h-80 rounded-[10px] p-12"
        v-for="testimonial in testimonials"
        :key="testimonial"
      >
        <div class="flex items-center gap-5">
          <img
            :src="`/assets/icons/testimonials/${testimonial.icon}`"
            alt=""
            srcset=""
          />
          <h1 class="font-bold text-primary text-xl">{{ testimonial.name }}</h1>
        </div>
        <p class="mt-8">“ {{ testimonial.content }} ”</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    let testimonials = [
      {
        icon: "testi1.svg",
        name: "Jessica Watson",
        content:
          "Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.",
      },
      {
        icon: "testi2.svg",
        name: "Kate Szu ",
        content:
          "Great service, beautiful flowers, timely delivery. Highly recommend.",
      },
      {
        icon: "testi3.svg",
        name: "Grace ",
        content:
          "I am very happy with my purchase from this website, the plants were healthy and arrived on time.",
      },
    ];
    return { testimonials };
  },
};
</script>
<style lang=""></style>
