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

<style lang="scss" scoped>
@use 'assets/css/components/icon';
</style>