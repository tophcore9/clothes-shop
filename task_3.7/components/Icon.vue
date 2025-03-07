<template>
    <img class="icon" :src="iconUrl" alt="Icon" :width="iconWidth" :height="iconHeight" draggable="false" />
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
        }
    }
})
</script>

<style scoped>
.icon {
    object-fit: cover;
}
</style>