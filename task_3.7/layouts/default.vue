<template>
    <div class="container">
        <Nav></Nav>
        <div class="content">
            <div class="wrapper">
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

body, html, .container {
    width: 100%;
    height: 100%;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
}

.content {
    padding: 32px 0;

    height: 100%;
}

.wrapper {
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
}
</style>