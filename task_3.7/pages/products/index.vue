<template>
    <div v-if="cardsStore.cards.length > 0" class="products">
        <div class="filters">
            <h2 class="_title">Filters:</h2>

            <DropDown title="Category" class="categories" :is-opened="true">
                <div
                    class="category"
                    :class="cardsStore.currentCategoryFilter === category ? 'active-category' : ''"
                    v-for="category in cardsStore.getAllCategories()"
                    @click="cardsStore.filterByCategory(category)"
                >
                    {{category}}
                </div>
            </DropDown>

            <DropDown title="Price" :is-opened="true">
                <div class="price-block">
                    <div class="price-inputs">
                        <input v-model="cardsStore.minPriceValueFilter" class="price-input" type="text">
                        <div class="horizontal-line"></div>
                        <input v-model="cardsStore.maxPriceValueFilter" class="price-input" type="text">
                    </div>
                    <DoubleRange
                        :min="cardsStore.minPrice"
                        :max="cardsStore.maxPrice"
                        v-model:min-value="cardsStore.minPriceValueFilter"
                        v-model:max-value="cardsStore.maxPriceValueFilter"
                    />
                </div>
            </DropDown>
        </div>

        <div class="content-wrapper">
            <div class="content">
                <div class="header">
                    <div class="_title">{{ cardsStore.currentCategoryFilter }}</div>
                    <div class="_muted-text">{{cardsStore.filteredCards.length}} Results</div>
                </div>
                <Select :options="['first', 'second', 'third']"/>
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
import Card from "~/components/Card.vue";
import DropDown from '~/components/DropDown.vue';
import DoubleRange from '~/components/DoubleRange.vue';
import Select from '~/components/Select.vue';

export default defineComponent({
    name: "index",
    components: {
        Card,
        DropDown,
        DoubleRange,
        Select
    },
    data() {
        return {
            cardsStore: useCardsStore(),
        }
    },
})
</script>

<style scoped>
@import "/assets/css/pages/products.scss";

.price-block {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.price-inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}
.price-input {
    width: 100%;
    padding: 0 0.5rem;
    height: 40px;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
}
.horizontal-line {
    min-width: 2rem;
    height: 1px;
    background-color: var(--border-color);
}
</style>