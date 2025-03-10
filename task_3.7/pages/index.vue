<template>
    <h1>Home</h1>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useCardsStore} from "~/stores/cardsStore";

export default defineComponent({
    name: "index",
    data() {
        return {
            cardsStore: useCardsStore()
        }
    },
})
</script>

<style scoped>

</style>