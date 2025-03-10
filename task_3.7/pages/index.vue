<template>
    <div class="main-banner banner">
    </div>
    <Button picture-url="/assets/images/cart.svg">See more</Button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useCardsStore} from "~/stores/cardsStore";
import Button from '../components/Button.vue';

export default defineComponent({
    name: "index",
    components: {
        Button
    },
    data() {
        return {
            cardsStore: useCardsStore()
        }
    },
})
</script>

<style scoped>
.banner {
    margin-bottom: 100px;
    width: 100%;

    border-radius: 24px;
    background-color: var(--secondary-color);
}
.main-banner {
    height: 512px;
}
</style>