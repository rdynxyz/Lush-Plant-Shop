<template lang="">
    <div class="flex flex-col items-center">
        <div class="md:flex w-full font-Lato mt-28">
            <div class="md:w-1/2 text-primary text-3xl font-bold">
                <h1>We Help choose the most <br> suitable plants for you</h1>
            </div>
            <div class="md:w-1/2 text-secondary mt-4 md:mt-0">
                <p>Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift. </p>
            </div>
        </div>
        <div class="mt-20 grid lg:grid-cols-2 xl:grid-cols-3 place-items-center xl:w-[1260px] gap-y-7 lg:gap-7">
            <div v-for="card in cards" :key="card" :class="`text-primary w-auto lg:w-[350px] lg:h-96 rounded-xl outline outline-1 outline-gray-100 shadow-sm px-7 py-4 hover:-translate-y-2 hover duration-200 ${card.bg}`">
                <img :src="`/assets/icons/plants/${card.image}`" class="w-32 fill-transparent" alt="" srcset="">
                <div class="px-4 text-secondary">
                    <h1 :class="`text-primary text-xl font-extrabold font-Lato mt-[10px] ${card.headertxt}`">{{card.header}}</h1>
                    <p :class="`mt-5 ${card.headertxt}`">{{card.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup(){
        let cards = [
            { image : "Indoor_Plant.svg", header : "Indoor Plant", description : "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants" },
            { image : "Outdoor_Plant.svg", header : "Outdoor Plant", description : "Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.", bg : "bg-third", headertxt : "text-white"},
            { image : "Bamboo_257.svg", header : "Plants Pots", description : "Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor" },
        ]
        return { cards}
    }
}
</script>
<style lang="">
    
</style>