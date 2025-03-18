<template>
    <div class="review">
        <div class="content">
            {{review.content}}
        </div>
        <div class="user-block">
            <div class="user">
                <img class="user-picture" :src="review.avatarUrl" alt="">
                <div class="user-info">
                    <div class="user-name">{{review.name}}</div>
                    <div class="user-position">{{review.position}}</div>
                </div>
            </div>
            <div class="grade-block">
                <Icon icon-url="/assets/images/review-star.svg" icon-width="24px" height="24px"/>
                <div class="grade">{{review.grade}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Icon from './Icon.vue';

export default defineComponent({
    name: "ReviewItem",
    components: {
        Icon
    },
    props: {
        review: {
            type: Object as PropType<IReview>,
            required: true
        }
    }
})
</script>

<style scoped>
@import "/assets/css/variables.scss";

.review {
    padding: 3rem 3rem 0 3rem;

    height: 330px;
    min-width: 800px;

    display: flex;
    flex-direction: column;

    background-color: var(--secondary-color);
    border-radius: var(--border-radius);
}
.grade-block {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}
.user {
    display: flex;
    align-items: center;
}
.user-block {
    height: 100%;

    display: flex;
    justify-content: space-between;
}
.user-info {
    display: flex;
    flex-direction: column;
}
.user-name {
    font-weight: 700;
}
.user-position {
    font-size: 12px;
    color: var(--muted-text);
}
.user-picture {
    align-self: flex-end;
}
</style>