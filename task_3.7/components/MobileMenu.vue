<template>
    <transition name="slide">
        <div v-if="visible" :class="fullScreen ? 'menu' : ''" :style="{
            top: top,
            backgroundColor: backgroundColor,
            zIndex: zIndex
        }">
            <slot></slot>
        </div>
    </transition>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "MobileMenu",
    props: {
        top: {
            type: String,
            default: '0'
        },
        backgroundColor: {
            type: String,
            default: "var(--primary-color)"
        },
        visible: {
            type: Boolean,
            default: false
        },
        fullScreen: {
            type: Boolean,
            default: true
        },
        zIndex: {
            type: Number,
            default: 4
        }
    }
})
</script>

<style lang="scss" scoped>
@use '/assets/css/components/mobile_menu';
</style>