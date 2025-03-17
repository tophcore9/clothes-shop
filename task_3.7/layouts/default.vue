<!--
    MAKE A RESPONSIVE DESIGN FOR CART PRODUCT ITEM PAGES AND PRODUCTS PAGE
    MAKE A SELECT COMPONENT
    MAKE A LAYOUT FOR THE HOME PAGE AND MAKE IT RESPONSIVE
    ADD SOME ANIMATIONS
-->

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
        this.cardsStore.filteredCards = this.cardsStore.cards;
    }
})
</script>

<style>
@import "/assets/css/reset.scss";
@import "/assets/css/fonts.scss";
@import "/assets/css/main.scss";
</style>