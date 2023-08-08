<template lang="">
    <div>
        <h1 class="text-center text-primary font-bold font-Lato text-4xl">What We Offer To You</h1>
        <div class="mt-9 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 m-auto gap-10 w-[1280px]">
            <div v-for="card in cards" :key="card" class="w-[280px] h-80 bg-rd-500 rounded-xl relative outline outline-1 outline-gray-100">
                <img :src="`src/assets/images/${card.src}`" alt="" srcset="">
                <div class="bg-white w-full h-16 bottom-0 absolute rounded-b-xl p-3">
                    <h1 class="text-third font-bold font-Lato">{{card.name}}</h1>
                    <h1 class="text-third font-bold font-Lato text-[12px]">{{card.price}}</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        let cards = [
            { name: 'Plant 1', price: '1', src: 'plant1.svg', link: '#'},
            { name: 'Plant 1', price: '2', src: 'plant2.svg', link: '#'},
            { name: 'Plant 1', price: '2', src: 'plant3.svg', link: '#'},
            { name: 'Plant 1', price: '2', src: 'plant4.svg', link: '#'},
            { name: 'Plant 1', price: '2', src: 'plant5.svg', link: '#'},
            { name: 'Plant 1', price: '2', src: 'plant6.svg', link: '#'},
            { name: 'Plant 1', price: '2', src: 'plant7.svg', link: '#'},
            { name: 'Plant 1', price: '2', src: 'plant8.svg', link: '#'},
        ]
        return {cards};
    } 
}
</script>
<style lang="">
    
</style>