<template>
    <button
        class="button"
        :class="{'button-highlighted': highlighted}"
        :style="{minHeight: height + 'px',
        minWidth: width + 'px',
        backgroundColor: backgroundColor}"
    >
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
        },
        height: {
            type: Number,
            default: 50
        },
        pictureUrl: {
            type: String,
            default: ''
        },
        backgroundColor: {
            type: String,
            default: 'var(--secondary-color)'
        },
        highlighted: {
            type: Boolean,
            default: false
        },
    },
})
</script>

<style scoped>
.button {
    padding: 0 1rem;
    height: 3rem;

    border: none;
    border-radius: 0.5rem;
    transition: transform 0.2s ease-in-out;
}
.button:hover {
    transform: scale(1.05);
}
.button:active {
    transform: scale(1.1);
}
.button-img {
    max-height: 1.5rem;
}
.button-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    position: relative;
}
.button-highlighted {
    background-color: var(--highlight-bright-color) !important;
    color: white !important;
}
</style>