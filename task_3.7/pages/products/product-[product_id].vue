<template>
    <div class="card">
        <div class="images-block">
            <div class="current-image__wrapper">
                <img
                    class="current-image"
                    :src="item.images[currentImageIndex]"
                    alt="NOT FOUND"
                >
                <div @click="slideRightCurrentImage" class="current-image__slider current-image__right-slider"></div>
                <div @click="slideLeftCurrentImage" class="current-image__slider current-image__left-slider"></div>
            </div>
            <div class="images">
                <img
                    @click="toggleCurrentImage"
                    class="image"
                    v-for="image in item.images"
                    :style="item.images[currentImageIndex] === image ? {opacity: 1} : {opacity: 0.5}"
                    :src="image"
                    alt="NOT FOUND"
                >
            </div>
        </div>

        <div class="content-block">
            <div class="content">
                <h2 class="_title">{{item.title}}</h2>
                <h2 class="price">${{priceWithDiscount}}</h2>
                <p class="discount">
                    <span class="discount-price">${{item.price}}</span>
                    <span>({{item.discount}}% off)</span>
                </p>
                <p class="discount-end">{{item.discount}}% off ends soon</p>
                <Button
                    class="add-to-cart__button"
                    :highlighted="isInCart"
                    :picture-url="isInCart ? '/assets/images/remove-from-cart.png' : '/assets/images/add-to-cart.png'"
                    @click="checkState"
                >{{isInCart ? 'Remove from cart' : 'Add to cart'}}</Button>
            </div>

            <div class="description-block">
                <h2 class="_title">Description</h2>
                <div class="description-content">
                    {{item.description}}
                </div>
            </div>

            <div class="features-block">
                <h2 class="_title">Product features</h2>
                <ul class="features-list">
                    <li class="feature-item" v-for="feature in item.features">{{feature}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type {ICard} from "~/types/card";
import {useCardsStore} from "~/stores/cardsStore";
import Button from '../../components/Button.vue';
import {useCartStore} from "~/stores/cartStore";

export default defineComponent({
    name: "product-[product_id]",
    components: {
        Button
    },
    data() {
        return {
            item: {} as ICard,
            cartStore: useCartStore(),
            currentImageIndex: 0,
        }
    },
    methods: {
        slideRightCurrentImage() {
            if (this.currentImageIndex >= this.item.images.length - 1) {
                this.currentImageIndex = 0;
            }
            else {
                this.currentImageIndex++;
            }
        },
        slideLeftCurrentImage() {
            if (this.currentImageIndex <= 0) {
                this.currentImageIndex = this.item.images.length - 1;
            }
            else {
                this.currentImageIndex--;
            }
        },
        toggleCurrentImage(event: Event) {
            const eventTarget = event.target as HTMLImageElement;
            this.currentImageIndex = this.item.images.findIndex(image => image === new URL(eventTarget.currentSrc).pathname);
        },
        checkState() {
            if (this.cartStore.isItemInCart(this.item.id)) {
                this.cartStore.removeItem(this.item.id);
            } else {
                this.cartStore.addItem(this.item);
            }
        }
    },
    computed: {
        priceWithDiscount(): number {
            if (this.item.discount <= 0) {
                return this.item.price;
            }

            const priceWithDiscount: number = this.item.price - this.item.price * this.item.discount / 100;

            return Number(priceWithDiscount.toFixed(2));
        },
        isInCart(): boolean {
            return this.cartStore.isItemInCart(this.item.id);
        }
    },
    created() {
        const route = useRoute();
        const cardsStore = useCardsStore();

        const productId = route.params.product_id as string;
        this.item = cardsStore.getCardById(productId);
    }
})
</script>

<style scoped>
@import "/assets/css/pages/product.scss";
</style>