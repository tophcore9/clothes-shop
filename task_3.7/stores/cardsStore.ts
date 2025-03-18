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
    currentCategory: string;
}

export const useCardsStore = defineStore("cards", {
    state: () => {
        return <ICardStore> {
            cards: [],
            filteredCards: [],
            currentCategory: 'All categories',
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
        filterByCategory(category: string) {
            if (category === 'All categories') {
                this.filteredCards = this.cards;
            } else {
                this.filteredCards = this.cards.filter(card => card.category === category);
            }

            this.currentCategory = category;
        },
        filterByTitle(title: string) {
            this.filteredCards = this.cards.filter(card => card.title.toLowerCase().includes(title.toLowerCase()));
            this.currentCategory = title;
        }
    },
    getters: {
        minPrice(): number {
            const minPrice = this.cards.reduce((minPrice, currentPrice) => currentPrice.price < minPrice.price ? currentPrice : minPrice);
            return minPrice.price;
        },
        maxPrice(): number {
            const maxPrice = this.cards.reduce((maxPrice, currentPrice) => currentPrice.price > maxPrice.price ? currentPrice : maxPrice);
            return maxPrice.price;
        },
    }
})