<template>
    <div class="products">
        <div class="filters">
            <h2 class="_title">Filters:</h2>

            <DropDown title="Category" class="categories">
                <button
                    class="category"
                    v-for="category in cardsStore.getAllCategories()"
                >
                    {{category}}
                </button>
            </DropDown>

            <DropDown title="Price">

            </DropDown>
        </div>

        <div>
            <div class="content">
                <div>
                    <span class="_title">All categories</span>
                    <span class="_muted-text">32,862,945 Results</span>
                </div>
                <select value="first">
                    <option value="first">First value</option>
                    <option value="second">Second value</option>
                    <option value="third">Third value</option>
                </select>
            </div>
            <div class="cards">
                <Card v-for="card in cardsStore.cards" :key="card.id" :card-item="card" :min-height="'350px'"/>
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
.products {
    display: flex;
}
.cards {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 31%));
    gap: 2rem;
}
.filters {
    margin-right: 1.5rem;
    min-width: 300px;

    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.content {
    margin-bottom: 2rem;

    display: flex;
    justify-content: space-between;
}
.categories {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.category {
    margin-bottom: 1rem;
    padding-left: 2rem;

    display: block;
    background-color: transparent;
    border: none;
}
.category:last-child {
    margin-bottom: 0;
}
</style>