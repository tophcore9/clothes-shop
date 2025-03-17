<template>
    <header class="main-banner banner">
    </header>

    <section class="best-selling">
        <div>
            Text
            <Button @click="navigateTo('/products')" picture-url="/assets/images/cart.svg">See more</Button>
        </div>
        <div v-if="cardsStore.cards.length > 0" class="best-selling-cards">
            <Card
                v-for="card in cardsStore.cards.slice(0, 3)"
                :key="card.id"
                :card-item="card"
                :max-width="'300px'"
                :min-height="'350px'"
            />
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useCardsStore} from "~/stores/cardsStore";
import Button from '../components/Button.vue';
import Card from '../components/Cards/Card.vue';

export default defineComponent({
    name: "index",
    components: {
        Button,
        Card
    },
    data() {
        return {
            cardsStore: useCardsStore()
        }
    },
})
</script>

<style scoped>
@import "/assets/css/pages/home.scss";
</style>