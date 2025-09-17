import reviews from '../reviews.json';

export default defineEventHandler(async (event) => {
    return reviews;
});
