<template>
    <h1>Products</h1>
    <div class="product-card" v-for="card in cardsStore.cards" :key="card.id">
        <div>.</div>
        <div>{{card.id}}</div>
        <div>.</div>
        <div>{{card.title}}</div>
        <div>.</div>
        <div>{{card.description}}</div>
        <div>.</div>
        <div>{{card.price}}</div>
        <div>.</div>
        <div>{{card.category}}</div>
        <div>.</div>
        <div>{{card.discount}}</div>
        <div>.</div>
        <div>{{card.images}}</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useCardsStore} from "~/stores/cardsStore";

export default defineComponent({
    name: "index",
    data() {
        return {
            cardsStore: useCardsStore()
        }
    },
})
</script>

<style scoped>

</style>