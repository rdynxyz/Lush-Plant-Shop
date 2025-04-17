<template lang="">
    <div>
        <h1 class="text-center text-primary font-extrabold font-Lato text-2xl sm:text-4xl">What We Offer To You</h1>
        <div class="mt-9 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-auto gap-4 sm:gap-y-10 sm:gap-x-0 2xl:w-[1280px] place-items-center">
            <div v-for="card in cards" :key="card.name" class="w-auto h-64 sm:w-[280px] sm:h-80 bg-rd-500 rounded-xl relative outline outline-1 outline-gray-100">
                <div class="w-8 h-8 rounded-full bg-white absolute right-4 top-4 flex items-center justify-center cursor-pointer" @click="toggleLove(card)" >
                    <img :src="card.loved ? '/assets/icons/love2.svg' : '/assets/icons/love.svg'" alt="" srcset="" class='fill-slate-500'>
                </div>
                <img :src="`/assets/images/${card.src}`" alt="" srcset="" class="rounded-t-xl"> 
                <div class="bg-white w-full sm:h-16 bottom-0 absolute rounded-b-xl p-3 sm:flex justify-between">
                    <div class="">
                        <h1 class="text-third font-bold font-Lato">{{card.name}}</h1>
                        <div class="flex gap-2">
                            <h1 class="text-gray-400 font-Lato text-[12px] line-through">({{card.realPrice}})</h1>
                            <h1 class="text-third font-bold font-Lato text-[12px]">{{card.price}}</h1>
                        </div>
                    </div>
                    <div class="mt-2 sm:mt-0">
                        <button class="rounded outline outline-1 outline-third text-third font-bold px-6 py-2 hover:bg-third hover:text-white duration-100 ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup() {
        const cards = ref ([
            { name: 'Cereus Tetragonus', price: '$8', realPrice: '$12', src: 'plant1.svg', link: '#', loved: false },
            { name: 'Old Man Cactus', price: '$10', realPrice: '$12', src: 'plant2.svg', link: '#', loved: false },
            { name: 'Ariocarpus', price: '$15', realPrice: '$20', src: 'plant3.svg', link: '#', loved: false },
            { name: 'Astrophytum ', price: '$10', realPrice: '$12', src: 'plant4.svg', link: '#', loved: false },
            { name: 'Melocactus ', price: '$12', realPrice: '$16', src: 'plant5.svg', link: '#', loved: false },
            { name: 'Kaktus Lilin', price: '$10', realPrice: '$12', src: 'plant6.svg', link: '#', loved: false },
            { name: 'Echinocactus ', price: '$5', realPrice: '$8', src: 'plant7.svg', link: '#', loved: false },
            { name: 'Pilosocereus ', price: '$8', realPrice: '$12', src: 'plant8.svg', link: '#', loved: false },
        ])  ;
        const toggleLove = (card) => {
            card.loved = !card.loved;
        }
        return {cards, toggleLove}
    } 
}
</script>
<style lang="">
    
</style>