<template>
    <transition name="fade">
        <div v-if="isOpen" @click.self="closeModal" class="modal">
            <div class="modal-content">
                <div class="header">
                    <h1 class="title">{{title}}</h1>
                    <Button
                        @click="closeModal"
                        picture-url="assets/images/close.svg"
                        :background-color="'#FFFFFF'"
                        :width="24"
                        :height="24"
                    ></Button>
                </div>
                <div class="divider"></div>
                <span class="content">{{content}}</span>
                <div class="buttons">
                    <Button @click="closeModal" :background-color="'#FFFFFF'">Cancel</Button>
                    <Button @click="handleConfirm">Delete</Button>
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

<style scoped>
@import "/assets/css/components/modals/modal.scss";
</style>