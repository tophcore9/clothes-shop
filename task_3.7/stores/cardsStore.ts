import { defineStore } from "pinia";
import type {ICard} from "~/types/card";

export const useCardsStore = defineStore("cards", {
    state: () => ({
        cards: [] as ICard[]
    }),
    actions: {
        getCardById(id: string): ICard {
            const index = this.cards.findIndex(card => card.id === id);

            if (index >= 0) {
                return this.cards[index];
            }

            return {id: 'not found'} as ICard;
        }
    }
})