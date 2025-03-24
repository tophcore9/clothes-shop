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
    sortType: ESortType;
}

export enum ESortType {
    MostRelevant,
    Newest,
    Cheapest,
    MostExpensive,
    DiscountValue
}

export const useCardsStore = defineStore("cards", {
    state: () => {
        return <ICardStore> {
            cards: [],
            filteredCards: [],
            currentCategoryFilter: 'All categories',
            maxPriceValueFilter: 0,
            minPriceValueFilter: 0,
            sortType: ESortType.MostRelevant,
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
            this.filterByPrice();
            this.sortCards(this.sortType);

            return this.filteredCards;
        },
        filterByTitle(title: string): ICard[] {
            this.filteredCards = this.cards.filter(card => card.title.toLowerCase().includes(title.toLowerCase()));
            this.currentCategoryFilter = title;

            this.filterByPrice();
            this.sortCards(this.sortType);

            return this.filteredCards;
        },
        filterByPrice(): ICard[] {
            this.filteredCards = this.filteredCards.filter((item) => item.price <= this.maxPriceValueFilter && item.price >= this.minPriceValueFilter);

            return this.filteredCards;
        },
        sortCards(sortType: ESortType = this.sortType): ICard[] {
            switch (sortType) {
                case ESortType.MostRelevant: {
                    this.filteredCards.sort((a, b) => a.id - b.id);
                    break;
                }
                case ESortType.Newest: {
                    this.filteredCards.sort((a, b) => b.id - a.id);
                    break;
                }
                case ESortType.Cheapest: {
                    this.filteredCards.sort((a, b) => a.price - b.price);
                    break;
                }
                case ESortType.MostExpensive: {
                    this.filteredCards.sort((a, b) => b.price - a.price);
                    break;
                }
                case ESortType.DiscountValue: {
                    this.filteredCards.sort((a, b) => b.discount - a.discount);
                    break;
                }
            }

            return this.filteredCards;
        },
        clearFilters() {
            this.maxPriceValueFilter = this.minPrice;
            this.maxPriceValueFilter = this.maxPrice;

            this.filteredCards = this.cards;

            this.currentCategoryFilter = 'All categories';
        }
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