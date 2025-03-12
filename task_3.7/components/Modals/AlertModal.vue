<template>
    <transition name="slide">
        <div v-if="isVisible" class="alert-modal">
            {{alertMessage}}
        </div>
    </transition>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "AlertModal",
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
        alertMessage: {
            type: String,
            required: false,
            default: 'Error!',
        }
    },
    methods: {
        closeAlertModal() {
            this.$emit("update:isVisible", false);
        }
    },
    watch: {
        isVisible(newValue) {
            if (newValue) {
                setTimeout(() => {
                    this.closeAlertModal();
                }, 1500);
            }
        }
    }
})
</script>

<style scoped>
@import "assets/css/components/alert_modal.css";
</style>