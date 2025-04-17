<template lang="">
        <div class="relative left-0 right-0 mt-[120px] w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/images/newsletter-bg.webp')] h-[400px] bg-blend-darken bg-black/60 flex justify-center">
            <div class=" flex flex-col p-6 lg:flex-row items-center justify-center h-full container xl:px-28 gap-6 sm:gap-8">
                <div class="w-full lg:w-1/2 ">
                    <h1 class="font-Lato font-bold text-2xl sm:text-[32px] text-white z-50 text-center lg:text-start content-center" >Enter your email address for our mailing Promo or other interesting things</h1>
                </div>
                <div class="w-full lg:w-1/2 sm:flex ">
                    <input v-model="email" type="text" name="email" id="email" placeholder="Enter your email" 
                    class="bg-blur/50 bg- text-white bg-white/10 backdrop-blur-[2px] w-full h-12 rounded-md pl-5 outline outline-1 outline-white border-white focus:outline-1">
                    <button @click="send" type="button" class="bg-primary text-white h-12 px-11 sm:ml-6 mt-3 sm:mt-0 rounded-md">Submit</button>
    
            </div>
            </div>
        </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup(){
        const email = ref(''); 
        function send(){
            alert("Hello " + email.value + ". The newsletter will be send to your email, thank you.")
        };
        return { email, send }
    }
}
</script>
<style lang="">
    
</style>