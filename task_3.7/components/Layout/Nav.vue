<template>
    <nav class="nav" :class="{'scrolled-nav': isScrolled}">
        <div class="_wrapper">
            <div class="nav-content">
                <div class="nav-section" :class="isScrolled ? 'nav-section-dark' : ''">
                    <NuxtLink to="/">
                        <Icon :icon-url="isScrolled ? '/assets/images/logo-white.png' : '/assets/images/logo-dark.png'" :icon-width="'138px'" :icon-height="'24px'"/>
                    </NuxtLink>
                    <NuxtLink :class="isPageOpened('index')" to="/">Home</NuxtLink>
                    <NuxtLink :class="isPageOpened('products')" to="/products">Products</NuxtLink>
                    <NuxtLink :class="isPageOpened('contacts')" to="/contacts">Contacts</NuxtLink>
                </div>
                <div class="nav-section">
                    <NuxtLink
                        to="/cart">
                        <Icon
                            :icon-url="isScrolled ? '/assets/images/cart-white.svg' : '/assets/images/cart.svg'"
                            :counter="useCartStore().cards.length"
                            icon-width="32px"
                            icon-height="32px"
                        />
                    </NuxtLink>

                    <NuxtLink
                        to="/profile">
                        <Icon
                            :icon-url="isScrolled ? '/assets/images/profile-white.svg' : '/assets/images/profile.svg'"
                            icon-width="32px"
                            icon-height="32px"
                        />
                    </NuxtLink>

                    <Button
                        class="button-more"
                        picture-url="/assets/images/burger-menu.svg"
                        :width="32"
                        :height="32"
                        background-color="transparent">
                    </Button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Icon from '../Icon.vue';
import Button from '../Button.vue';

export default defineComponent({
    name: "Nav",
    components: {
        Icon,
        Button
    },
    data() {
        return {
            isScrolled: false
        }
    },
    methods: {
        isPageOpened(path: string): string {
            if (useRoute().name?.toString().includes(path)) {
                return 'nav-link nav-link-active'
            }

            return 'nav-link';
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 0;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
})
</script>

<style scoped>
@import "/assets/css/components/layout/nav.scss";
</style>