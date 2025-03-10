import cards from '../cards.json';

export default defineEventHandler(async (event) => {
    return cards;
});