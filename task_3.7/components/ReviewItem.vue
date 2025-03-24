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

<style lang="scss" scoped>
@use "/assets/css/components/review_item";
</style>