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

            </div>
            <div class="description">

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type {ICard} from "~/types/card";
import {useCardsStore} from "~/stores/cardsStore";

export default defineComponent({
    name: "[product_id]",
    data() {
        return {
            item: {} as ICard,
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
.card {
    display: flex;
    justify-content: stretch;
}
.current-image__wrapper {
    margin-bottom: 24px;
    height: 50%;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
}
.current-image__slider {
    position: absolute;
    top: calc(50% - 24px);

    width: 48px;
    height: 48px;

    border-radius: 12px;
    background-color: rgba(229, 219, 188, 1);
    background-repeat: no-repeat;
    background-position: center;
    transition: background-color 0.3s ease-out;
}
.current-image__slider:hover {
    background-color: var(--secondary-color);
    cursor: pointer;
}
 .current-image__left-slider {
     left: 8px;
     background-image: url("/assets/images/slide-left.svg");
}
.current-image__right-slider {
    right: 8px;
    background-image: url("/assets/images/slide-right.svg");
}
.current-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.images-block {
    flex-basis: 50%;
}
.images {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}
.image {
    width: 125px;
    height: 175px;
    object-fit: cover;
    border-radius: 12px;
    opacity: 0.5;

    transition: opacity 0.3s ease-out;
}
.image:hover {
    opacity: 1 !important;
    cursor: pointer;
}
.content-block {
    flex-basis: 50%;
}
</style>