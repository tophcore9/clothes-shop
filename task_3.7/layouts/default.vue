<template>
    <Nav></Nav>
    <div class="containter">
        <slot></slot>
    </div>
    <Footer></Footer>
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

<style scoped>

</style>