import { defineStore } from "pinia";
import type {ICard} from "~/types/card";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cards: [] as ICard[]
    }),
    actions: {
        addItem(item: ICard) {
            this.cards.push(item);
        },
        removeItem(id: String) {
            this.cards = this.cards.filter(card => card.id !== id);
        }
    },
})
