import { defineStore } from "pinia";
import type {ICard} from "./cardsStore";

export interface ICardInCart extends ICard {
    count: number;
}

export enum EUpdateType {
    Increment,
    Decrement,
    CustomCount
}

interface ICartStore {
    cards: ICardInCart[]
    shippingCoefficient: number;
}

export const useCartStore = defineStore("cart", {
    state: () => {
        return <ICartStore> {
            cards: [],
            shippingCoefficient: 0.05
        }
    },
    actions: {
        addItem(item: ICard) {
            if (this.cards.findIndex(card => card.id === item.id) < 0) {
                this.cards.push({...item, count: 1});
            }
        },
        removeItem(id: String) {
            this.cards = this.cards.filter(card => card.id !== id);
        },
        updateItem(id: String, changeType: EUpdateType, enteredCount: string = ''): boolean {
            const index = this.cards.findIndex(card => card.id === id);
            const card = this.cards[index];

            if (index >= 0) {
                if (changeType === EUpdateType.Increment) {
                    card.count++;
                    return true;
                } else if (changeType === EUpdateType.Decrement) {
                    if (card.count - 1 > 0) {
                        card.count--
                        return true;
                    }
                } else if (changeType === EUpdateType.CustomCount) {
                    if (Number(enteredCount)) {
                        card.count = Number(enteredCount);
                        return true;
                    }
                }
            } else {
                console.error("Can't find the item with id " + id);
            }

            return false;
        },
        isItemInCart(id: string): boolean {
            const index = this.cards.findIndex(card => card.id === id);

            return index >= 0;
        },
        clearCart() {
            this.cards = [];
        }
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
            const result = this.totalPrice * this.shippingCoefficient;
            return Number(result.toFixed(2));
        },
        resultPrice(): number {
            const result = this.totalPriceWithDiscount + this.shippingPrice;
            return Number(result.toFixed(2));
        },
    }
})
