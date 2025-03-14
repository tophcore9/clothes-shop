<template>
    <div class="_container">
        <Nav></Nav>
        <div class="_content">
            <div class="_wrapper">
                <slot></slot>
            </div>
        </div>
        <Footer></Footer>

        <Alert
            :alert-message="debug.alert.message"
            :type="debug.alert.type"
            v-model:is-visible="debug.alert.visible"
            :time="debug.alert.time"
        />
        <Modal
            :title="debug.modal.title"
            :confirm-text="debug.modal.confirmText"
            :content="debug.modal.content"
            v-model:is-open="debug.modal.visible"
            @confirm="debug.modal.confirmFunction()"
        />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Nav from '../components/Layout/Nav.vue';
import Footer from '../components/Layout/Footer.vue';
import Alert from "~/components/Modals/Alert.vue";
import Modal from "~/components/Modals/Modal.vue";
import {useDebugStore} from "~/stores/debugStore";

export default defineComponent({
    name: "default",
    components: {
        Alert,
        Modal,
        Footer,
        Nav
    },
    data() {
        return {
            cardsStore: useCardsStore(),
            debug: useDebugStore()
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
    --dark-bg-color: #2F1D1D;

    --footer-color: #D5D2D2;
    --footer-title-color: #FFFFFF;

    --success-color: #77DB61;
    --warning-color: #FCFF64;
    --danger-color: #FF595C;
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
    padding: 7rem 0;

    min-height: 100vh;
}

._wrapper {
    margin: 0 auto;
    padding: 2rem;

    height: 100%;
    max-width: 1440px;
}

._title, ._title_2 {
    margin-right: 1rem;

    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 700;
}

._title_2 {
    font-size: 18px;
}

._muted-text {
    color: var(--muted-text);
}
</style>