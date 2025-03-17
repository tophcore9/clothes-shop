<template>
    <button
        class="button"
        :class="{'button-highlighted': highlighted}"
        :style="{height: height + 'px',
        width: width + 'px',
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
@import "/assets/css/components/button.scss";
</style>