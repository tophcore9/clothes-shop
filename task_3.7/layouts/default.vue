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
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
    name: "default",
    components: {
        Footer,
        Nav
    }
})
</script>

<style>
:root {
    --wrapper-width: 1440px;
    --primary-color: #FFFFFF;
    --secondary-color: #FFE699;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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