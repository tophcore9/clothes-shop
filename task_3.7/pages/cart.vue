<template>
    <div class="cart-items">
        <CartItem v-for="card in cartStore.cards" :key="card.id" :item="card" :max-width="'300px'" :max-height="'450px'"/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useCartStore} from "~/stores/cartStore";
import CartItem from "~/components/Cards/CartItem.vue";

export default defineComponent({
    name: "cart",
    components: {
        CartItem,
    },
    data() {
        return {
            cartStore: useCartStore()
        }
    }
})
</script>

<style scoped>
.cart-items {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>