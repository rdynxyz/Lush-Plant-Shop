<template lang="">
    <div class="container m-auto flex justify-between h-28 items-center text-white ">
        <div class="">
            <img src="../assets/icons/Lush.svg" alt="" class="w-28">
        </div>
        <div class="text-lg flex space-x-14 ">
            <ul class="flex space-x-14  ">
                <li v-for="link in links" :key="link">
                    <a :href="link.link"
                        class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-6px] after:duration-300 hover:after:w-3 cursor-pointer"> 
                        {{link.name}}
                    </a>
                </li>
            </ul>
            <button class="outline outline-1 px-8 py-1 rounded-[3px]">Call Us</button>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        let links = [
            { name: "Home", link: "#" },
            { name: "About Us", link: "#" },
            { name: "Planters", link: "#" },
            { name: "Contact", link: "#" },
        ]
        return { links }
    }
}
</script>
<style lang="">
    
</style>