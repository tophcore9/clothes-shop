<template>
    <transition name="fade">
        <div v-if="isOpen" @click.self="closeModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="_title-4">{{title}}</h1>
                    <Button
                        @click="closeModal"
                        picture-url="assets/images/close.svg"
                        :background-color="'#FFFFFF'"
                        width="24px"
                        height="24px"
                    ></Button>
                </div>
                <div class="modal-divider"></div>
                <span class="modal-text">{{content}}</span>
                <div class="modal-buttons">
                    <Button class="modal-cancel" @click="closeModal" :background-color="'#FFFFFF'">Cancel</Button>
                    <Button class="modal-confirm" @click="handleConfirm">{{confirmText}}</Button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Button from './Button.vue';

export default defineComponent({
    name: "Modal",
    components: {
        Button
    },
    props: {
        isOpen: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: 'Confirm'
        },
        content: {
            type: String,
            default: 'Are you sure?'
        },
        confirmText: {
            type: String,
            default: 'Ok'
        },
    },
    emits: ['update:isOpen', 'confirm'],
    methods: {
        closeModal() {
            this.$emit('update:isOpen', false);
        },
        handleConfirm() {
            this.$emit('confirm');
            this.closeModal();
        }
    },
})
</script>

<style lang="scss" scoped>
@use '/assets/css/components/modals/modal';
</style>