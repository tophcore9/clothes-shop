<template>
    <div class="icon" :style="{width: iconWidth, height: iconHeight, backgroundImage: `url(${iconUrl})`}">
        <div class="counter" v-if="counter > 0">{{counter}}</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Icon",
    props: {
        iconWidth: {
            type: String,
            required: false,
            default: '32px'
        },
        iconHeight: {
            type: String,
            required: false,
            default: '32px'
        },
        iconUrl: {
            type: String,
            required: true
        },
        counter: {
            type: Number,
            required: false,
            default: 0
        }
    }
})
</script>

<style scoped>
.icon {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.counter {
    height: 1rem;
    width: 1rem;

    position: absolute;
    top: 0;
    right: 0;

    border-radius: 4px;
    background-color: var(--highlight-bright-color);

    font-weight: lighter;
    font-size: 12px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>