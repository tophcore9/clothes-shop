import { defineStore } from "pinia";
import type {ICard} from "~/types/card";

export const useCardsStore = defineStore("cards", {
    state: () => ({
        cards: [] as ICard[]
    }),
})