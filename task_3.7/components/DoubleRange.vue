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

<style scoped>
.double-slider-container {
    position: relative;
    width: 100%;
    max-width: 300px;
    margin: 0.5rem auto;
}

.slider-track {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #ddd;
    transform: translateY(-50%);
    border-radius: 2px;
}

.slider-range {
    position: absolute;
    height: 100%;
    background-color: var(--text-color);
    border-radius: 2px;
}

.slider-thumb {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 0;
    pointer-events: none;
    appearance: none;
    background: none;
    transform: translateY(-50%);
}

.slider-thumb::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: var(--text-color);
    border-radius: 50%;
    cursor: pointer;
    pointer-events: all;
}

.slider-thumb::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background-color: var(--text-color);
    border-radius: 50%;
    cursor: pointer;
    pointer-events: all;
}

.slider-thumb-min {
    z-index: 2;
}

.slider-thumb-max {
    z-index: 1;
}
</style>