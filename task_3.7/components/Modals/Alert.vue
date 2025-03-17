<template>
    <transition name="slide">
        <div v-if="isVisible" class="alert-modal" :class="type">
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
        },
        type: { // success, warning, danger (default)
            type: String,
            required: false,
            default: 'danger',
        },
        time: {
            type: Number,
            required: false,
            default: 2000,
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
                }, this.time);
            }
        }
    }
})
</script>

<style scoped>
@import "/assets/css/components/modals/alert.scss";
</style>