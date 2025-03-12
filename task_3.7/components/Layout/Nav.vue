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
@import "assets/css/components/layout/nav.css";
</style>