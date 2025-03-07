export interface ICard {
    id: string; // uuid v2
    title: string;
    images: string[];
    price: number;
    discount: number;
    description: string;
    category: string;
}