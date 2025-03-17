<template>
    <transition name="slide">
        <div v-if="visible" class="menu" :style="{top: top + 'px', backgroundColor: backgroundColor}">
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
            type: Number,
            default: 0
        },
        backgroundColor: {
            type: String,
            default: "var(--primary-color)"
        },
        visible: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<style scoped>
@import "/assets/css/variables.scss";

.menu {
    padding: 0 1rem;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100vh;
    height: calc(100vh - 90px);
    z-index: -2;
}

.slide-enter-active {
    transition: all 0.5s ease-out;
}
.slide-leave-active {
    transition: all 0.5s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
    transform: translateX(-50px);
    opacity: 0;
}
</style>