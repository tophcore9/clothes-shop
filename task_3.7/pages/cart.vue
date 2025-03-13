<template>
    <div v-if="cartStore.cards.length > 0" class="header">
        <h2 class="_title">Shopping cart</h2>
        <div>{{cartStore.cards.length}} items</div>
        <div class="vertical-line"></div>
        <div>${{cartStore.resultPrice}}</div>
    </div>

    <div v-if="cartStore.cards.length > 0" class="cart-container">
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
            <h2 class="_title_2">Order summary</h2>
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

            <Button @click="checkout" class="checkout-button">Checkout</Button>
        </div>
    </div>

    <div v-else>
        <h1 class="_title">There are no items in cart :(</h1>
    </div>

    <AlertModal
        v-model:is-visible="isCheckoutSuccess"
        type="success"
        alert-message="You bought the items successfully!"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useCartStore} from "~/stores/cartStore";
import CartItem from "~/components/Cards/CartItem.vue";
import Button from '../components/Button.vue';
import AlertModal from "~/components/Modals/AlertModal.vue";

export default defineComponent({
    name: "cart",
    components: {
        AlertModal,
        CartItem,
        Button
    },
    data() {
        return {
            cartStore: useCartStore(),
            isCheckoutSuccess: false,
        }
    },
    methods: {
        checkout() {
            this.isCheckoutSuccess = true;
            this.cartStore.clearCart();
        }
    }
})
</script>

<style scoped>
@import "assets/css/pages/cart.css";
</style>