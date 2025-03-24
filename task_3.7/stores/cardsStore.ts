import { defineStore } from "pinia";

export interface ICard {
    id: number;
    title: string;
    images: string[];
    price: number;
    discount: number;
    description: string;
    features: string[];
    category: string;
}

export enum ESortType {
    MostRelevant,
    Newest,
    Cheapest,
    MostExpensive,
    DiscountValue,
}

interface ICardStore {
    cards: ICard[];
    filteredCards: ICard[];
    currentCategoryFilter: string;
    maxPriceValueFilter: number,
    minPriceValueFilter: number,
    sortType: ESortType;
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
        getCardById(id: number): ICard {
            const index = this.cards.findIndex(card => card.id === id);
            console.log(index);

            if (index >= 0) {
                return this.cards[index];
            }

            return <ICard>{id: -1};
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
        filterByPrice(): ICard[] {
            this.filteredCards = this.filteredCards.filter((item) => this.discountedPrice(item) <= this.maxPriceValueFilter && this.discountedPrice(item) >= this.minPriceValueFilter);

            return this.filteredCards;
        },
        sortCards(sortType: ESortType): ICard[] {
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
            this.minPriceValueFilter = this.minPrice();
            this.maxPriceValueFilter = this.maxPrice();
            this.filteredCards = this.cards;
            this.currentCategoryFilter = 'All categories';
        },
        minPrice(): number {
            const minPrice = this.cards.reduce((minPrice, currentPrice) => this.discountedPrice(currentPrice) < this.discountedPrice(minPrice) ? currentPrice : minPrice);
            return this.discountedPrice(minPrice);
        },
        maxPrice(): number {
            const maxPrice = this.cards.reduce((maxPrice, currentPrice) => this.discountedPrice(currentPrice) > this.discountedPrice(maxPrice) ? currentPrice : maxPrice);
            return this.discountedPrice(maxPrice);
        },
        discountedPrice(item: ICard): number {
            return Number((item.price - item.price * item.discount / 100).toFixed(2));
        },
        updateFilters() {
            this.filterByCategory(this.currentCategoryFilter);
            this.filterByPrice();
            this.sortCards(this.sortType);
        }
    },
})