<template>
    <div @click.self="navigateTo(`/products/product-${cardItem.id}`)" class="card" :style="{
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        minWidth: minWidth,
        minHeight: minHeight}">
        <div class="card-image-block">
            <img class="card-image" :src="cardItem.images[0]" alt="NO">
            <Button class="add-to-cart__button" picture-url="/assets/images/cart-add.svg" @click="cartStore.addItem(cardItem)"></Button>
        </div>

        <div class="card-body">
            <div class="card-title">{{cardItem.title}}</div>
            <div>
                {{priceWithDiscount}}
                <span>
                    {{cardItem.price}} ({{cardItem.discount}}% off)
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Icon from '../Icon.vue';
import type {ICard} from "~/types/card";
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
            cartStore: useCartStore()
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
    computed: {
        priceWithDiscount(): number {
            if (this.cardItem.discount <= 0) {
                return this.cardItem.price;
            }

            const priceWithDiscount: number = this.cardItem.price - this.cardItem.price * this.cardItem.discount / 100;

            return Number(priceWithDiscount.toFixed(2));
        }
    }
})
</script>

<style scoped>
@import "assets/css/components/card.css";
</style>