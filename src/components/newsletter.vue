<template lang="">
    <div class="bg-cover bg-center bg-no-repeat bg-[url('/assets/images/newsletter-bg.webp')] h-[400px] flex flex-col p-6 lg:flex-row items-center justify-center bg-blend-darken bg-black/60">
        <div class="w-full lg:w-1/2 lg:pl-16 xl:pl-28 lg:pr-4">
            <h1 class="font-Lato font-bold text-2xl sm:text-[32px] text-white z-50 text-center lg:text-start content-center" >Enter your email address for our mailing Promo or other interesting things</h1>
        </div>
        <div class="w-full lg:w-1/2 sm:flex mt-4 lg:mt-0">
            <input type="text" name="email" id="email" placeholder="Enter your email" 
            class="bg-blur/50 bg- text-white bg-white/10 backdrop-blur-[2px] w-full h-12 rounded-md pl-5 outline outline-1 outline-white border-white focus:outline-1">
            <button @click="send" type="button" class="bg-primary text-white h-12 px-11 sm:ml-6 mt-3 sm:mt-0 rounded-md">Submit</button>
        </div>
    </div>
</template>
<script>
export default {
    setup(){
        let emails = document.getElementsByName("email").values;
        function send(){
            alert("hello " + emails)
        }
        return { send }
    }
}
</script>
<style lang="">
    
</style>