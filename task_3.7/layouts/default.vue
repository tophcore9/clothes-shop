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
    --text-color: #1E1E1E;
    --highlight-color: #EA9127;
    --highlight-bright-color: #FF730D;
    --muted-text: #8F8F8F;
    --border-color: #DEDFE5;
    --border-radius: 12px;

    --footer-color: #D5D2D2;
    --footer-title-color: #FFFFFF;
    --footer-bg-color: #2F1D1D;

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
    font-weight: 400;
    line-height: 1.3;
    color: var(--text-color);
}

._content {
    padding: 2rem 0;

    min-height: 100vh;
}

._wrapper {
    margin: 0 auto;
    padding: 2rem;

    height: 100%;
    max-width: 1440px;
}

._title {
    margin-right: 1rem;

    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 700;
}
</style>