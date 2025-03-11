<template>
    <div :style="{width: iconWidth, height: iconHeight, position: 'relative'}">
        <img class="icon" :src="iconUrl" alt="Icon" draggable="false" />
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
            default: '32'
        },
        iconHeight: {
            type: String,
            default: '32'
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
    object-fit: cover;
    position: relative;
}
.counter {
    height: 16px;
    width: 16px;

    position: absolute;
    top: 0;
    right: 0;

    border-radius: 4px;
    background-color: rgba(255, 115, 13, 1);

    font-weight: lighter;
    font-size: 12px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>