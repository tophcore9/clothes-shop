<template>
    <div class="card">
        <div class="card-image">
            <Icon :icon-url="cardItem.images[0]"/>
            <button class="add-to-cart__button">

            </button>
        </div>

        <div class="card-body">
            <div class="card-title">{{cardItem.title}}</div>
            <div>
                {{priceWithDiscount}}
                <span>
                    {{cardItem.price}} ({{cardItem.discount}} off)
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

</style>