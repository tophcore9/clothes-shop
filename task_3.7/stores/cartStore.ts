import { defineStore } from "pinia";
import type {ICard, ICardInCart} from "~/types/card";

export enum EUpdateType {
    Increment,
    Decrement,
}

const shippingCoefficient: number = 0.05;

export const useCartStore = defineStore("cart", {
    state: () => ({
        cards: [] as ICardInCart[],
    }),
    actions: {
        addItem(item: ICard) {
            this.cards.push({...item, count: 0});
        },
        removeItem(id: String) {
            this.cards = this.cards.filter(card => card.id !== id);
        },
        updateItem(id: String, changeType: EUpdateType) {
            const index = this.cards.findIndex(card => card.id === id);

            if (index >= 0) {
                if (changeType === EUpdateType.Increment) {
                    this.cards[index].count++;
                } else if (changeType === EUpdateType.Decrement) {
                    this.cards[index].count--
                }
            } else {
                console.error("Can't find the item with id " + id);
            }
        },
    },
    getters: {
        totalPrice(): number {
            return this.cards.reduce((total, card) => total + card.price, 0);
        },
        shippingPrice(): number {
            return this.totalPrice * shippingCoefficient;
        },
        totalPriceWithShipping(): number {
            return this.totalPrice + this.shippingPrice;
        }
    }
})
