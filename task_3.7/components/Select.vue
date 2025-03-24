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
                {{ option.label }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import type {ESortType} from "~/stores/cardsStore";

interface Option {
    label: string;
    value: ESortType;
}

export default {
    props: {
        options: {
            type: Array<Option>,
            required: true,
        },
        placeholder: {
            type: String,
            default: 'Most relevant',
        },
        modelValue: {
            type: Object as PropType<ESortType>,
            required: true,
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
        selectOption(option: Option) {
            this.selectedOption = option.label;
            this.$emit('update:modelValue', option.value);
            this.isOpen = false;
        },
    },
};
</script>

<style lang="scss" scoped>
@use "/assets/css/components/select";
</style>