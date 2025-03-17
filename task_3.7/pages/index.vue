<template>
    <header class="main-banner banner">
        <div class="main-content">
            <div class="main-info">
                <div class="main-title">
                    Unleash your inner fox enthusiast
                </div>
                <div>
                    Dive into the enchanting world of foxes with FoxmindEd – your one-stop destination for charming and whimsical fox-themed merchandise.
                </div>
                <div class="main-statistics">
                    <div class="statistics-block">
                        <div class="statistics-value">50+</div>
                        <div class="statistics-title">Categories</div>
                    </div>
                    <div></div>
                    <div class="statistics-block">
                        <div class="statistics-value">100+</div>
                        <div class="statistics-title">Customers</div>
                    </div>
                </div>
            </div>

            <div class="main-search">
                <input class="search-input" type="text" placeholder="What are you looking for?"/>
                <Button class="search-button" :width="48" :height="48" picture-url="/assets/images/search.svg"></Button>
            </div>
        </div>

        <div class="main-image__block">
            <div class="main-image__circle"></div>
            <img class="main-image" src="/assets/images/fox.png" alt="">
            <img class="spinned-arrow-1" src="/assets/images/spinned-arrow-1.png" alt="">
            <img class="spinned-arrow-2" src="/assets/images/spinned-arrow-2.png" alt="">
        </div>
    </header>

    <section class="best-selling">
        <div class="best-selling__block">
            <h2 class="best-selling__title">Explore our best-selling categories</h2>
            <p class="best-selling__content">Let the fox magic captivate your senses.</p>
            <Button @click="navigateTo('/products')" picture-url="/assets/images/see-more.svg">See more</Button>
        </div>
        <div v-if="cardsStore.cards.length > 0" class="best-selling-cards">
            <Card
                v-for="card in cardsStore.cards.slice(0, 3)"
                :key="card.id"
                :card-item="card"
                :max-width="'300px'"
                :min-height="'350px'"
            />
        </div>
    </section>

    <section class="about-us">
        <header class="about-us-header">
            <h2 class="about-us__title">About us</h2>
            <p class="about-us__description">Shop now and make every day a fox-tastic adventure!</p>
        </header>
        <div class="about-us__features">
            <div class="about-us__feature">
                <div class="feature-circle">
                    <img class="feature-circle__image" src="/assets/images/about-us-1.svg" alt="">
                </div>
                <div class="feature-title">
                    Quality craftsmanship
                </div>
                <div class="feature-content">
                    Every product is crafted with precision, using high-quality materials to ensure durability and satisfaction.
                </div>
            </div>

            <div class="about-us__feature">
                <div class="feature-circle">
                    <img class="feature-circle__image" src="/assets/images/about-us-2.svg" alt="">
                </div>
                <div class="feature-title">
                    Diverse designs
                </div>
                <div class="feature-content">
                    Our best-selling categories boast a diverse range of designs, catering to a variety of fox preferences – from playful to majestic.
                </div>
            </div>

            <div class="about-us__feature">
                <div class="feature-circle">
                    <img class="feature-circle__image" src="/assets/images/about-us-3.svg" alt="">
                </div>
                <div class="feature-title">
                    Customer delight
                </div>
                <div class="feature-content">
                    Join the community of delighted customers who have made these categories our best-sellers.
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useCardsStore} from "~/stores/cardsStore";
import Button from '../components/Button.vue';
import Card from '../components/Cards/Card.vue';

export default defineComponent({
    name: "index",
    components: {
        Button,
        Card
    },
    data() {
        return {
            cardsStore: useCardsStore()
        }
    },
})
</script>

<style scoped>
@import "/assets/css/pages/home.scss";
</style>