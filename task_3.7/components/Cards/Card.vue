<template>
    <div class="card">
        <div class="card-image-block">
            <img class="card-image" :src="cardItem.images[0]" alt="NO">
            <button class="add-to-cart__button">

            </button>
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

export default defineComponent({
    name: "Card",
    components: {
        Icon
    },
    props: {
        cardItem: {
            type: Object as PropType<ICard>,
            required: true
        }
    },
    computed: {
        priceWithDiscount(): number {
            if (this.cardItem.discount <= 0) {
                return this.cardItem.price;
            }

            return this.cardItem.price - this.cardItem.price * this.cardItem.discount / 100;
        }
    }
})
</script>

<style scoped>
.card {
    padding: 16px;

    height: 450px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(234,234,234,1) 100%);
    border-radius: 12px;

    position: relative;
}
.card-image {
    width: 100%;
    height: 100%;

    border-radius: 12px;
    background-color: red;
}
.add-to-cart__button {
    width: 48px;
    height: 48px;

    position: absolute;
    top: 8px;
    right: 8px;

    border: none;
    border-radius: 12px;
    background: rgba(255, 230, 153, 1) url("assets/images/cart-add.svg") no-repeat center;
}
.card-body {

}
.card-title {

}
</style>