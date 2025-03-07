<template>
    <nav class="nav">
        <div class="wrapper">
            <div class="nav-content">
                <div class="nav-section">
                    <img src="" alt="Logo">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/products">Products</NuxtLink>
                    <NuxtLink to="/contacts">Contacts</NuxtLink>
                </div>
                <div class="nav-section">
                    <NuxtLink to="/cart">Cart</NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Nav"
})
</script>

<style scoped>
.nav {
    height: 90px;
    width: 100%;
}

.nav-content {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-section {
    display: flex;
    align-items: center;
    gap: 48px;
}
</style>