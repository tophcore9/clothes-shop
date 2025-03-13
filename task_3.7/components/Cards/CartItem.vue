<template>
    <div class="cart-item">
        <div class="info">
            <div>
                <img @click="navigateTo(`/products/product-${item.id}`)" class="picture" :src="item.images[0]" alt="">
            </div>
            <div>
                <div>{{item.title}}</div>
                <div>{{item.category}}</div>
            </div>
        </div>

        <div class="count">
            <div class="count-controls">
                <Button
                    @click="cartStore.updateItem(item.id, EUpdateType.Decrement)"
                    :height="40"
                    :width="40"
                    picture-url="/assets/images/decrement.svg"
                ></Button>
                <input class="count-input" type="text" :value="item.count">
                <Button
                    @click="cartStore.updateItem(item.id, EUpdateType.Increment)"
                    :height="40"
                    :width="40"
                    picture-url="/assets/images/increment.svg"
                ></Button>
            </div>
            <div>
                <span class="discounted-price">${{(item.price - item.price * item.discount / 100).toFixed(2)}}</span>
                &nbsp;
                <span class="primal-price">${{item.price}}</span>
            </div>
        </div>

        <Button
            @click="isModalShown = true"
            :height="40"
            :width="40"
            picture-url="/assets/images/remove.svg"
        ></Button>

        <Modal
            v-model:is-open="isModalShown"
            @confirm="cartStore.removeItem(item.id)"
            title="Confirm deletion"
            confirm-button-text="Confirm deletion"
            content="Are you sure want to delete this item?"
        />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type {ICardInCart} from "~/types/card";
import Button from '../Button.vue';
import Modal from '../Modals/Modal.vue';

export default defineComponent({
    name: "CartItem",
    components: {
        Button,
        Modal,
    },
    data() {
        return {
            cartStore: useCartStore(),
            isModalShown: false,
        }
    },
    props: {
        item: {
            type: Object as PropType<ICardInCart>,
            required: true
        }
    }
})
</script>

<style scoped>
@import "assets/css/components/cart_item.css";
</style>