import { defineStore } from "pinia";

export interface ICard {
    id: string;
    title: string;
    images: string[];
    price: number;
    discount: number;
    description: string;
    features: string[];
    category: string;
}


interface ICardStore {
    cards: ICard[];
    filteredCards: ICard[];
    currentCategoryFilter: string;
    maxPriceValueFilter: number,
    minPriceValueFilter: number,
}

export const useCardsStore = defineStore("cards", {
    state: () => {
        return <ICardStore> {
            cards: [],
            filteredCards: [],
            currentCategoryFilter: 'All categories',
            maxPriceValueFilter: 0,
            minPriceValueFilter: 0,
        }
    },
    actions: {
        getCardById(id: string): ICard {
            const index = this.cards.findIndex(card => card.id === id);

            if (index >= 0) {
                return this.cards[index];
            }

            return <ICard>{id: 'not found'};
        },
        getAllCategories(): string[] {
            let categories: string[] = ['All categories'];

            this.cards.forEach(card => {
                if (!categories.includes(card.category)) {
                    categories.push(card.category);
                }
            })

            return categories;
        },
        filterByCategory(category: string): ICard[] {
            if (category === 'All categories') {
                this.filteredCards = this.cards;
            } else {
                this.filteredCards = this.cards.filter(card => card.category === category);
            }

            this.currentCategoryFilter = category;

            return this.filteredCards;
        },
        filterByTitle(title: string): ICard[] {
            this.filteredCards = this.cards.filter(card => card.title.toLowerCase().includes(title.toLowerCase()));
            this.currentCategoryFilter = title;

            return this.filteredCards;
        },
        setMinPriceValueFilter(value: number) {
            this.minPriceValueFilter = value;
        },
        setMaxPriceValueFilter(value: number) {
            this.maxPriceValueFilter = value;
        },
    },
    getters: {
        minPrice(): number {
            const minPrice = this.cards.reduce((minPrice, currentPrice) => currentPrice.price < minPrice.price ? currentPrice : minPrice);
            this.minPriceValueFilter = minPrice.price;
            return minPrice.price;
        },
        maxPrice(): number {
            const maxPrice = this.cards.reduce((maxPrice, currentPrice) => currentPrice.price > maxPrice.price ? currentPrice : maxPrice);
            this.maxPriceValueFilter = maxPrice.price;
            return maxPrice.price;
        },
    }
})