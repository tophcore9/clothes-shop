<template>
    <nav class="nav">
        <div class="_wrapper">
            <div class="nav-content">
                <div class="nav-section">
                    <NuxtLink :class="isPageOpened('index')" to="/">
                        <Icon icon-url="/assets/images/logo-dark.png" :icon-width="'auto'" :icon-height="'auto'"/>
                    </NuxtLink>
                    <NuxtLink :class="isPageOpened('index')" to="/">Home</NuxtLink>
                    <NuxtLink :class="isPageOpened('products')" to="/products">Products</NuxtLink>
                    <NuxtLink :class="isPageOpened('contacts')" to="/contacts">Contacts</NuxtLink>
                </div>
                <div class="nav-section">
                    <NuxtLink :class="isPageOpened('cart')" to="/cart"><Icon icon-url="/assets/images/cart.svg" :counter="useCartStore().cards.length"/></NuxtLink>
                    <NuxtLink :class="isPageOpened('profile')" to="/profile"><Icon icon-url="/assets/images/profile.svg"/></NuxtLink>
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
    },
    methods: {
        isPageOpened(path: string): string {
            if (useRoute().name?.toString().includes(path)) {
                return 'nav-link nav-link-active'
            }

            return 'nav-link';
        }
    }
})
</script>

<style scoped>
@import "assets/css/components/layout/nav.css";
</style>