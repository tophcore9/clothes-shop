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
@import "/assets/css/components/select.scss";
</style>