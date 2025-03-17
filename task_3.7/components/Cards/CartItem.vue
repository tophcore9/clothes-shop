<template>
    <div class="cart-item">
        <div class="info">
            <div>
                <img @click="navigateTo(`/products/product-${item.id}`)" class="picture" :src="item.images[0]" alt="">
            </div>
            <div class="cart-item-info">
                <div>{{item.title}}</div>
                <div class="category">{{item.category}}</div>
            </div>
        </div>

        <div class="count">
            <div class="count-controls">
                <Button
                    @click="decrementItem"
                    :height="40"
                    :width="40"
                    picture-url="/assets/images/decrement.svg"
                ></Button>
                <input @change="" class="count-input" type="text" :value="item.count">
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
            @click="removeItem"
            :height="40"
            :width="40"
            picture-url="/assets/images/remove.svg"
        ></Button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type {ICardInCart} from "~/types/card";
import Button from '../Button.vue';
import Modal from '../Modals/Modal.vue';
import {useDebugStore} from "~/stores/debugStore";

export default defineComponent({
    name: "CartItem",
    components: {
        Button,
        Modal,
    },
    data() {
        return {
            cartStore: useCartStore(),
            debug: useDebugStore(),
        }
    },
    props: {
        item: {
            type: Object as PropType<ICardInCart>,
            required: true
        }
    },
    methods: {
        decrementItem() {
            if (!this.cartStore.updateItem(this.item.id, EUpdateType.Decrement)) {
                this.removeItem();
            }
        },
        removeItem() {
            this.debug.showModal(<IModal>{
                title: 'Confirm deletion',
                content: 'Are you sure want to delete this item?',
                confirmText: 'Confirm deletion',
                visible: false,
                confirmFunction: () => {
                    this.cartStore.removeItem(this.item.id);

                    this.debug.showAlert(<IAlert>{
                        message: 'You deleted an item successfully!',
                        type: 'warning',
                    })
                }
            });
        }
    }
})
</script>

<style scoped>
@import "/assets/css/components/cart_item.scss";
</style>