<template>
    <div @click="navigateTo(`/products/product-${cardItem.id}`)" class="card" :style="{
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        minWidth: minWidth,
        minHeight: minHeight}">
        <div class="card-image-block">
            <img class="card-image" :src="cardItem.images[0]" alt="NO">
            <Button
                class="add-to-cart__button"
                :highlighted="isInCart"
                :picture-url="isInCart ? '/assets/images/remove-from-cart.png' : '/assets/images/add-to-cart.png'"
                @click.stop="checkState"
            ></Button>
        </div>

        <div class="card-body">
            <div class="card-title">{{cardItem.title}}</div>
            <div>
                <span class="card-price">${{priceWithDiscount}}</span>
                <span class="card-discount">
                    <span class="cross-lined-price">${{cardItem.price}}</span>
                    <span>({{cardItem.discount}}% off)</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Icon from '../Icon.vue';
import type {ICard} from "~/stores/cardsStore";
import Button from '../Button.vue';
import {useCartStore} from "~/stores/cartStore";

export default defineComponent({
    name: "Card",
    components: {
        Icon,
        Button
    },
    data() {
        return {
            cartStore: useCartStore(),
        }
    },
    props: {
        cardItem: {
            type: Object as PropType<ICard>,
            required: true
        },
        maxWidth: {
            type: String,
            required: false,
            default: '100%'
        },
        maxHeight: {
            type: String,
            required: false,
            default: '450px'
        },
        minHeight: {
            type: String,
            required: false,
            default: 'auto'
        },
        minWidth: {
            type: String,
            required: false,
            default: 'auto'
        }
    },
    methods: {
        checkState() {
            if (this.cartStore.isItemInCart(this.cardItem.id)) {
                this.cartStore.removeItem(this.cardItem.id);
            } else {
                this.cartStore.addItem(this.cardItem);
            }
        }
    },
    computed: {
        priceWithDiscount(): number {
            if (this.cardItem.discount <= 0) {
                return this.cardItem.price;
            }

            const priceWithDiscount: number = this.cardItem.price - this.cardItem.price * this.cardItem.discount / 100;

            return Number(priceWithDiscount.toFixed(2));
        },
        isInCart(): boolean {
            return this.cartStore.isItemInCart(this.cardItem.id);
        }
    }
})
</script>

<style scoped>
@import "/assets/css/components/card.scss";
</style>