<template lang="">
    <div class="w-full md:container m-auto flex justify-between md:h-28 items-center text-white z-[1] bg-primary/50 backdrop-blur-sm md:bg-transparent fixed md:relative left-0 md:left-auto px-6 py-3 md:px-0">
        <div class="">
            <img src="/assets/icons/Lush.svg" alt="" class="w-28">
        </div>
        <div class="text-lg space-x-14 font-Lato font-medium hidden md:block">
            <ul class="flex space-x-14 ">
                <li v-for="link in links" :key="link">
                    <a :href="link.link"
                        @click="handler"
                        class="relative after:contents-[''] after:h-[1px] after:w-0 after:left-0 after:bg-white after:absolute after:bottom-[-6px] after:duration-300 hover:after:w-full cursor-pointer"> 
                        {{link.name}}
                    </a>
                </li>
                <button class="outline outline-1 px-8 py-1 rounded-[3px] hover:bg-primary hover:outline-none duration-150">Call Us</button>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        let links = [
            { name: "Home", link: "#", id: 'home'},
            { name: "About Us", link: "#" },
            { name: "Planters", link: "#" },
            { name: "Contact", link: "#" },
        ]
        
        function handler(){
            alert("hsjkdhasjkldhsakljh")
        }
        return { links, handler}
    }

}
</script>
<style lang="">
    
</style>