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

export interface ICardInCart extends ICard {
    count: number;
}