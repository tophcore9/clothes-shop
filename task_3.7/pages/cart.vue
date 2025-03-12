<template>
    <div class="header">
        <h1 class="title">Shopping cart</h1>
        <div>{{cartStore.cards.length}} items</div>
        <div class="vertical-line"></div>
        <div>${{cartStore.resultPrice}}</div>
    </div>

    <div class="cart-container">
        <div class="cart-items">
            <CartItem
                v-for="card in cartStore.cards"
                :key="card.id"
                :item="card"
                :max-width="'300px'"
                :max-height="'450px'"
            />
        </div>

        <div class="summary">
            <h1 class="title">Order summary</h1>
            <div class="summary-info__field">
                <div>{{cartStore.cards.length}} items</div>

                <div>
                    <span class="cross-lined-price">${{cartStore.totalPrice}}</span>
                    &nbsp;
                    <span class="discounted-price">${{cartStore.totalPriceWithDiscount}}</span>
                </div>
            </div>

            <div class="summary-info__field">
                <div>Shipping</div>
                <div>${{cartStore.shippingPrice}}</div>
            </div>

            <div class="summary-info__field summary-total">
                <div>Total</div>
                <div>${{cartStore.resultPrice}}</div>
            </div>

            <Button class="checkout-button">Checkout</Button>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useCartStore} from "~/stores/cartStore";
import CartItem from "~/components/Cards/CartItem.vue";
import Button from '../components/Button.vue';

export default defineComponent({
    name: "cart",
    components: {
        CartItem,
        Button
    },
    data() {
        return {
            cartStore: useCartStore()
        }
    }
})
</script>

<style scoped>
@import "assets/css/pages/cart.css";
</style>