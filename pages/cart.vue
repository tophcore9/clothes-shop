<template>
    <div v-if="cartStore.cards.length > 0" class="header">
        <h2 class="_title-3">Shopping cart</h2>
        <div class="general-info">
            <div class="_muted-text-lg">{{cartStore.cards.length}} items</div>
            <div class="vertical-line"></div>
            <div class="_muted-text-lg">${{cartStore.resultPrice}}</div>
        </div>
    </div>

    <div v-if="cartStore.cards.length > 0" class="cart-container">
        <div class="cart-items">
            <CartItem
                v-for="card in cartStore.cards"
                :key="card.id"
                :item="card"
                max-width="300px"
                max-height="450px"
            />
        </div>

        <div class="summary">
            <h2 class="_title-4">Order summary</h2>
            <div class="summary-info__field">
                <div>
                    {{cartStore.cards.length}} items
                </div>

                <div class="price-line">
                    <span class="_muted-text-md _crossed-text">
                        ${{cartStore.totalPrice}}
                    </span>

                    <span>
                        ${{cartStore.totalPriceWithDiscount}}
                    </span>
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

            <Button
                @click="checkout"
            >
                Checkout
            </Button>
        </div>
    </div>

    <div v-else>
        <h1 class="_title-2">
            There are no items in cart :(
        </h1>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useCartStore} from "~/stores/cartStore";
import CartItem from "~/components/CartItem.vue";
import Button from '../components/Button.vue';
import Alert from "~/components/Alert.vue";
import {useDebugStore} from "~/stores/debugStore";

export default defineComponent({
    name: "cart",
    components: {
        AlertModal: Alert,
        CartItem,
        Button
    },
    data() {
        return {
            cartStore: useCartStore(),
            debug: useDebugStore(),
            isCheckoutSuccess: false,
        }
    },
    methods: {
        checkout() {
            this.debug.showAlert(<IAlert>{
                message: 'You bought the items successfully!',
                type: 'success'
            });

            this.cartStore.clearCart();
        }
    }
})
</script>

<style lang="scss" scoped>
@use 'assets/css/pages/cart';
</style>