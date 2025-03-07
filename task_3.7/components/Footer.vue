<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="footer-content">
                <h1>Footer</h1>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Footer"
})
</script>

<style scoped>

.footer {
    padding: 48px 0;

    width: 100%;
    height: 400px;
    background: #2F1D1D;

    color: white;
}
</style>