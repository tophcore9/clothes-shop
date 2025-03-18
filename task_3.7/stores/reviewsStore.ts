import { defineStore } from "pinia";

export interface IReview {
    id: string;
    content: string;
    name: string;
    position: string;
    avatarUrl: string;
    grade: number;
}

interface IReviewsStore {
    reviews: IReview[];
}

export const useReviewsStore = defineStore("reviews", {
    state: (): IReviewsStore => {
        return {
            reviews: [],
        }
    },
})
