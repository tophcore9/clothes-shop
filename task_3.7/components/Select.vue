<template>
    <div @click. class="select" :style="{width: width}">
        <div @click="toggleState" class="select-title" tabindex="-1">
            <div>{{title}}</div>
            <Icon icon-url="/assets/images/select-arrow-down.svg" icon-width="1rem" icon-height="1rem"/>
        </div>

        <ul v-if="isExpanded" class="select-menu">
            <li class="select-item" v-for="item in items">{{item}}</li>
        </ul>
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
            isExpanded: false
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        width: {
            type: String,
            required: false,
            default: 'auto'
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
.select {
    position: relative;
    user-select: none;
}
.select-title {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;

    padding: 0.5rem;
    border-radius: var(--border-radius);
}
.select-title:hover,
.select-title:focus,
.select-title:active {
    cursor: pointer;
    background-color: #efefef;
}
.select-menu {
    width: 100%;

    display: flex;
    flex-direction: column;

    position: absolute;
    top: 100%;
    right: 0;

    background-color: var(--primary-color);
}
.select-item {
    padding: 0 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 32px;
    width: 100%;
}
.select-item:hover {
    cursor: pointer;
    background-color: #F1F1F1;
}
</style>