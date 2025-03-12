import { defineStore } from "pinia";
import type {ICard, ICardInCart} from "~/types/card";
import cards from "~/server/api/cards";

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
            if (this.cards.findIndex(card => card.id === item.id) < 0) {
                this.cards.push({...item, count: 1});
            }
        },
        removeItem(id: String) {
            this.cards = this.cards.filter(card => card.id !== id);
        },
        updateItem(id: String, changeType: EUpdateType) {
            const index = this.cards.findIndex(card => card.id === id);
            const card = this.cards[index];

            if (index >= 0) {
                if (changeType === EUpdateType.Increment) {
                    card.count++;
                } else if (changeType === EUpdateType.Decrement) {
                    card.count--

                    if (card.count <= 0) this.removeItem(card.id);
                }
            } else {
                console.error("Can't find the item with id " + id);
            }
        },
    },
    getters: {
        totalPrice(): number {
            const result = this.cards.reduce((total, card) => total + card.price * card.count, 0);
            return Number(result.toFixed(2));
        },
        totalPriceWithDiscount(): number {
            const result = this.totalPrice - this.cards.reduce((total, card) => card.count * (total + card.price * card.discount / 100), 0);
            return Number(result.toFixed(2));
        },
        shippingPrice(): number {
            const result = this.totalPrice * shippingCoefficient;
            return Number(result.toFixed(2));
        },
        resultPrice(): number {
            const result = this.totalPriceWithDiscount + this.shippingPrice;
            return Number(result.toFixed(2));
        }
    }
})
