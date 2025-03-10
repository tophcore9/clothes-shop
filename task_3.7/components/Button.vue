<template>
    <button class="button" :style="{height: height + 'px', width: width + 'px'}">
        <div class="button-inner">
            <slot></slot>
            <img class="button-img" :src="pictureUrl" alt="">
        </div>
    </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Button",
    props: {
        width: {
            type: Number,
            required: false,
        },
        height: {
            type: Number,
            required: false,
            default: 50
        },
        pictureUrl: {
            type: String,
            required: false,
            default: ''
        }
    }
})
</script>

<style scoped>
.button {
    padding: 0 16px;
    height: 50px;
    background-color: var(--secondary-color);

    border: none;
    border-radius: 8px;
    transition: width 2s ease-in-out;
}
.button-img {
    max-height: 24px;
}
.button-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
</style>