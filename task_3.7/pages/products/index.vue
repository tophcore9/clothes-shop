<template>
    <div class="products">
        <div class="filters">

        </div>
        <div class="cards">
            <Card v-for="card in cardsStore.cards" :key="card.id" :card-item="card" :min-height="'475px'"/>
            <div v-if="cardsStore.cards.length > 0">Min price: {{cardsStore.minPrice}}</div>
            <div v-if="cardsStore.cards.length > 0">Max price: {{cardsStore.maxPrice}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useCardsStore} from "~/stores/cardsStore";
import Card from "~/components/Cards/Card.vue";

export default defineComponent({
    name: "index",
    components: {Card},
    data() {
        return {
            cardsStore: useCardsStore()
        }
    },
})
</script>

<style scoped>
.products {
    display: flex;
}
.cards {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 31%));
    gap: 32px;
}
.filters {
    margin-right: 24px;
    min-width: 300px;
}
</style>