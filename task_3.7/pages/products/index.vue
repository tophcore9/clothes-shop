<template>
    <div v-if="cardsStore.cards.length > 0" class="products">
        <MobileMenu :top="90" :z-index="4" :visible="isFiltersMobile" :full-screen="isFiltersMobileFullScreen">
            <div class="filters">
                <div class="filter-mobile-controls">
                    <Button
                        v-if="isFiltersMobile"
                        background-color="transparent"
                        @click="clearFilters"
                    >Clear</Button>
                    <h2 class="_title-3">Filters:</h2>
                    <Button
                        v-if="isFiltersMobile"
                        background-color="transparent"
                        @click="confirmFilters"
                    >Done</Button>
                </div>

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
                            <input
                                v-model="cardsStore.minPriceValueFilter"
                                class="price-input"
                                type="text"
                            >
                            <div class="horizontal-line"></div>
                            <input
                                v-model="cardsStore.maxPriceValueFilter"
                                class="price-input"
                                type="text"
                            >
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
        </MobileMenu>

        <div class="content-wrapper">
            <div class="content">
                <div class="header">
                    <div class="_title-3">{{ cardsStore.currentCategoryFilter }}</div>
                    <div class="_muted-text-lg">{{cardsStore.filteredCards.length}} Results</div>
                </div>
                <Button class="show-in-mobile-mode" @click="isFiltersMobile = !isFiltersMobile">
                    Filters
                </Button>
                <Select
                    placeholder="Most relevant"
                    :options="[
                    'Most relevant',
                    'Newest',
                    'Cheapest',
                    'Most expensive',
                    'Discount value',
                    ]"
                    :model-value="cardsStore.sortType"
                />
            </div>
            <div class="cards">
                <Card
                    v-for="card in cardsStore.filteredCards"
                    :key="card.id"
                    :card-item="card"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {ESortType, useCardsStore} from "~/stores/cardsStore";
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
            isFiltersMobile: false,
            isFiltersMobileFullScreen: true,
        }
    },
    methods: {
        clearFilters() {
            this.cardsStore.clearFilters();
            this.isFiltersMobile = false;
        },
        confirmFilters() {
            this.isFiltersMobile = false;
        }
    }
})
</script>

<style lang="scss" scoped>
@use "/assets/css/pages/products";
</style>