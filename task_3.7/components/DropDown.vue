<template>
    <div>
        <div @click="toggleState" class="drop-title">
            <h2 class="_title-4">{{title}}</h2>
            <Icon
                class="arrow-icon"
                :class="isExpanded ? 'arrow-icon-rotated' : ''"
                icon-url="/assets/images/dropdown-arrow.svg"
                icon-width="16px"
                icon-height="16px"/>
        </div>

        <div v-if="isExpanded" class="drop-content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Icon from './Icon.vue';

export default defineComponent({
    name: "Select",
    components: {
        Icon
    },
    data() {
        return {
            isExpanded: this.isOpened
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        isOpened: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        toggleState() {
            this.isExpanded = !this.isExpanded;
        }
    }
})
</script>

<style scoped>
@import "/assets/css/components/drop_down.scss";
</style>
