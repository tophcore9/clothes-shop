<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="footer-content">
                <div class="footer-content__left">
                    <div class="footer-content__left-top">
                        <Icon icon-url="_nuxt/assets/images/logo-light.png" :icon-width="'138px'" :icon-height="'24px'"/>

                        <div>We help you find your dream products</div>

                        <div class="site-links">
                            <div class="site-link">
                                <Icon icon-url="_nuxt/assets/images/facebook-logo.svg" :icon-width="'20px'" :icon-height="'20px'"/>
                            </div>

                            <div class="site-link">
                                <Icon icon-url="_nuxt/assets/images/instagram-logo.svg" :icon-width="'20px'" :icon-height="'20px'"/>
                            </div>

                            <div class="site-link">
                                <Icon icon-url="_nuxt/assets/images/twitter-logo.svg" :icon-width="'20px'" :icon-height="'20px'"/>
                            </div>
                        </div>
                    </div>

                    <div class="rights-reserved">
                        2025 all Right Reserved Term of use FoxmindEd
                    </div>
                </div>

                <div class="footer-content__right">
                    <ul class="footer-block">
                        <li class="footer-block__item footer-block__title">Information</li>
                        <li class="footer-block__item">About</li>
                        <li class="footer-block__item">Product</li>
                        <li class="footer-block__item">Blog</li>
                    </ul>

                    <ul class="footer-block">
                        <li class="footer-block__item footer-block__title">Company</li>
                        <li class="footer-block__item">Community</li>
                        <li class="footer-block__item">Career</li>
                        <li class="footer-block__item">Our story</li>
                    </ul>

                    <ul class="footer-block">
                        <li class="footer-block__item footer-block__title">Contact</li>
                        <li class="footer-block__item">Getting Started</li>
                        <li class="footer-block__item">Pricing</li>
                        <li class="footer-block__item">Resources</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Icon from '../Icon.vue';

export default defineComponent({
    name: "Footer",
    components: {
        Icon
    }
})
</script>

<style scoped>
.footer {
    margin-top: 60px;
    padding: 48px 0;

    width: 100%;
    height: 400px;
    background: #2F1D1D;

    color: white;
}

.footer-content {
    height: 100%;
    display: flex;
    justify-content: space-between;
}

.site-links {
    display: flex;
    gap: 24px;
}

.site-link {
    width: 48px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
}

.footer-content__left {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.footer-content__left-top {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.footer-content__right {
    display: flex;
    gap: 48px;
}

.footer-block {
    display: flex;
    flex-direction: column;
    gap: 24px;

    font-weight: 400;
}

.footer-block__title {
    font-weight: 700;
}
</style>