<template>
    <div class="products">
        <div class="filters">
            <h2 class="_title">Filters:</h2>

            <DropDown title="Category" class="categories" :is-opened="true">
                <div
                    class="category"
                    :class="cardsStore.currentCategory === category ? 'active-category' : ''"
                    v-for="category in cardsStore.getAllCategories()"
                    @click="cardsStore.filterByCategory(category)"
                >
                    {{category}}
                </div>
            </DropDown>

            <DropDown title="Price" :is-opened="true">

            </DropDown>
        </div>

        <div class="content-wrapper">
            <div class="content">
                <div>
                    <span class="_title">{{cardsStore.currentCategory}}</span>
                    <span class="_muted-text">{{cardsStore.filteredCards.length}} Results</span>
                </div>
                <select value="first">
                    <option value="first">First value</option>
                    <option value="second">Second value</option>
                    <option value="third">Third value</option>
                </select>
            </div>
            <div class="cards">
                <Card v-for="card in cardsStore.filteredCards" :key="card.id" :card-item="card" :min-height="'350px'"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useCardsStore} from "~/stores/cardsStore";
import Card from "~/components/Cards/Card.vue";
import DropDown from '~/components/DropDown.vue';

export default defineComponent({
    name: "index",
    components: {
        Card,
        DropDown
    },
    data() {
        return {
            cardsStore: useCardsStore(),
        }
    },
})
</script>

<style scoped>
@import "/assets/css/pages/products.css";
</style>