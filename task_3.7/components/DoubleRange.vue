<template>
    <div class="double-slider-container">
        <div class="slider-track">
            <div class="slider-range" :style="rangeStyle"></div>
        </div>
        <input
            type="range"
            :min="min"
            :max="max"
            v-model="currentMinValue"
            @input="updateMinValue"
            :step="step"
            class="slider-thumb slider-thumb-min"
        />
        <input
            type="range"
            :min="min"
            :max="max"
            v-model="currentMaxValue"
            @input="updateMaxValue"
            :step="step"
            class="slider-thumb slider-thumb-max"
        />
    </div>
</template>

<script lang="ts">
export default {
    props: {
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        },
        minValue: {
            type: Number,
            default: 20,
        },
        maxValue: {
            type: Number,
            default: 80,
        },
        step: {
            type: Number,
            default: 0.05,
        }
    },
    data() {
        return {
            currentMinValue: this.minValue,
            currentMaxValue: this.maxValue,
        };
    },
    emits: ['update:minValue', 'update:maxValue'],
    computed: {
        rangeStyle() {
            const minPercent = ((this.currentMinValue - this.min) / (this.max - this.min)) * 100;
            const maxPercent = ((this.currentMaxValue - this.min) / (this.max - this.min)) * 100;
            return {
                left: `${minPercent}%`,
                width: `${maxPercent - minPercent}%`,
            };
        },
    },
    methods: {
        updateMinValue(event: Event) {
            const target = <HTMLInputElement>event.target;
            this.currentMinValue = Math.min(Number(target.value), this.currentMaxValue);
            this.$emit("update:minValue", this.currentMinValue);
        },
        updateMaxValue(event: Event) {
            const target = <HTMLInputElement>event.target;
            this.currentMaxValue = Math.max(Number(target.value), this.currentMinValue);
            this.$emit("update:maxValue", this.currentMaxValue);
        },
    },
};
</script>

<style lang="scss" scoped>
@use '/assets/css/components/double_range';
</style>