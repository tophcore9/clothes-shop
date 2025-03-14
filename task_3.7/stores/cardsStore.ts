import { defineStore } from "pinia";
import type {ICard} from "~/types/card";

interface ICardStore {
    cards: ICard[];
}

export const useCardsStore = defineStore("cards", {
    state: () => {
        return <ICardStore> {
            cards: []
        }
    },
    actions: {
        getCardById(id: string): ICard {
            const index = this.cards.findIndex(card => card.id === id);

            if (index >= 0) {
                return this.cards[index];
            }

            return {id: 'not found'} as ICard;
        },
        getAllCategories(): string[] {
            let categories: string[] = [];

            this.cards.forEach(card => {
                if (!categories.includes(card.category)) {
                    categories.push(card.category);
                }
            })

            return categories;
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