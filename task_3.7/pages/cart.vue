<template>
    <h1>Cart</h1>
    <div class="cart-items">
        <Card v-for="card in cartStore.cards" :key="card.id" :card-item="card" :max-width="'300px'" :max-height="'450px'"/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useCartStore} from "~/stores/cartStore";
import Card from '../components/Cards/Card.vue';

export default defineComponent({
    name: "cart",
    components: {
        Card
    },
    data() {
        return {
            cartStore: useCartStore()
        }
    }
})
</script>

<style scoped>

</style>