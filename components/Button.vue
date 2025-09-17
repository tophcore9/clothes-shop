<template>
    <button
        class="button"
        :class="{'button-highlighted': highlighted}"
        :style="{
            height: height,
            width: width,
            backgroundColor: backgroundColor
        }"
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
            type: String,
            default: 'auto'
        },
        height: {
            type: String,
            default: '40px'
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

<style lang="scss" scoped>
@use '/assets/css/components/button';
</style>