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

<style scoped>
.custom-select {
    position: relative;
    font-family: Arial, sans-serif;
}

.selected-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    background-color: #fff;

    font-weight: 700;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.selected-option:hover {
    border-color: #888;
}

.arrow {
    font-size: 12px;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #fff;
    z-index: 1;
    max-height: 150px;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
    padding: 10px;
    cursor: pointer;
}

.dropdown-item:hover {
    background-color: #f0f0f0;
}

.search-input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 8px;
}

.is-open .selected-option {
    border-color: #888;
}
</style>