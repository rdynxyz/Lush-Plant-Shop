<template lang="">
    <div>
        <h1 class="text-center text-primary font-bold font-Lato text-4xl">What We Offer To You</h1>
        <div class="mt-9 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 m-auto gap-10 w-[1280px]">
            <div v-for="card in cards" :key="card" class="w-[280px] h-80 bg-rd-500 rounded-xl relative outline outline-1 outline-gray-100">
                <div class="w-8 h-8 rounded-full bg-white absolute right-4 top-4 flex items-center justify-center cursor-pointer">
                    <img src="/src/assets/icons/love.svg" alt="" srcset="" class='fill-slate-500 hover:'>
                </div>
                <img :src="`/src/assets/images/${card.src}`" alt="" srcset="" class=" rounded-t-xl">
                <div class="bg-white w-full h-16 bottom-0 absolute rounded-b-xl p-3 flex justify-between">
                    <div class="">
                        <h1 class="text-third font-bold font-Lato">{{card.name}}</h1>
                        <div class="flex gap-2">
                            <h1 class="text-gray-400  font-Lato text-[12px] line-through">({{card.realPrice}})</h1>
                            <h1 class="text-third font-bold font-Lato text-[12px]">{{card.price}}</h1>

                        </div>
                    </div>
                    <div class="">
                        <button class="rounded outline outline-1 outline-third text-third font-bold px-6 py-2 hover:bg-third hover:text-white duration-100 ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        let cards = [
            { name: 'Cereus Tetragonus', price: '$8', realPrice: '$10', src: 'plant1.svg', link: '#'},
            { name: 'Old Man Cactus', price: '2', realPrice: '$10', src: 'plant2.svg', link: '#'},
            { name: 'Ariocarpus', price: '2', realPrice: '$10', src: 'plant3.svg', link: '#'},
            { name: 'Astrophytum ', price: '2', realPrice: '$10', src: 'plant4.svg', link: '#'},
            { name: 'Melocactus ', price: '2', realPrice: '$10', src: 'plant5.svg', link: '#'},
            { name: 'Kaktus Lilin', price: '2', realPrice: '$10', src: 'plant6.svg', link: '#'},
            { name: 'Echinocactus ', price: '2', realPrice: '$10', src: 'plant7.svg', link: '#'},
            { name: 'Pilosocereus ', price: '2', realPrice: '$10', src: 'plant8.svg', link: '#'},
        ];
        let love = ref(false);
        function loveClick() {
            love.value = !love.value         
        }
        return {cards, love, loveClick}
    } 
}
</script>
<style lang="">
    
</style>