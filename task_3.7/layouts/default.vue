<template>
    <div class="_container">
        <Nav></Nav>
        <div class="_content">
            <div class="_wrapper">
                <slot></slot>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Nav from '../components/Layout/Nav.vue';
import Footer from '../components/Layout/Footer.vue';

export default defineComponent({
    name: "default",
    components: {
        Footer,
        Nav
    },
    data() {
        return {
            cardsStore: useCardsStore()
        }
    },
    async mounted() {
        this.cardsStore.cards = await $fetch("/api/cards");
    }
})
</script>

<style>
@import "../assets/css/reset.css";
@import "../assets/css/fonts.css";

:root {
    --primary-color: #FFFFFF;
    --secondary-color: #FFE699;
}

#__nuxt {
    height: 100%;
}

body, html, ._container {
    width: 100%;
    min-height: 100%;
}

._container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
}

._content {
    padding: 32px 0;

    min-height: 100vh;
}

._wrapper {
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
}
</style>