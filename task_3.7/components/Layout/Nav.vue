<template>
    <nav class="nav">
        <div class="_wrapper">
            <div class="nav-content">
                <div class="nav-section">
                    <NuxtLink class="nav-link" to="/">
                        <Icon icon-url="/assets/images/logo-dark.png" :icon-width="'auto'" :icon-height="'auto'"/>
                    </NuxtLink>
                    <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                    <NuxtLink class="nav-link" to="/products">Products</NuxtLink>
                    <NuxtLink class="nav-link" to="/contacts">Contacts</NuxtLink>
                </div>
                <div class="nav-section">
                    <NuxtLink class="nav-link" to="/cart"><Icon icon-url="/assets/images/cart.svg" :counter="useCartStore().cards.length"/></NuxtLink>
                    <NuxtLink class="nav-link" to="/profile"><Icon icon-url="/assets/images/profile.svg"/></NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Icon from '../Icon.vue';

export default defineComponent({
    name: "Nav",
    components: {
        Icon
    }
})
</script>

<style scoped>
.nav {
    height: 90px;
    width: 100%;
}

.nav-content {
    width: 100%;
    min-height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-section {
    display: flex;
    align-items: center;
    gap: 48px;
}

.nav-link {
    color: #1E1E1E;
    opacity: 0.8;
    text-decoration: none;
}
</style>