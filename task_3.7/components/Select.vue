<template>
    <div class="custom-select" :class="{ 'is-open': isOpen }">
        <div class="selected-option" @click="toggleDropdown">
            {{ selectedOption || placeholder }}
            <span class="arrow">{{ isOpen ? '▲' : '▼' }}</span>
        </div>
        <div v-if="isOpen" class="dropdown">
            <input
                v-if="searchable"
                v-model="searchQuery"
                type="text"
                placeholder="Search..."
                class="search-input"
            />
            <div
                v-for="option in options"
                class="dropdown-item"
                @click="selectOption(option)"
            >
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        options: {
            type: Array<String>,
            required: true,
        },
        placeholder: {
            type: String,
            default: 'Most relevant',
        },
        modelValue: {
            type: String,
            default: '',
        },
        searchable: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            isOpen: false,
            selectedOption: '',
            searchQuery: '',
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.$emit('update:modelValue', option);
            this.isOpen = false;
        },
    },
};
</script>

<style lang="scss" scoped>
@use "/assets/css/components/select";
</style>