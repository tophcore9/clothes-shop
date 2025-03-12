<template>
    <div class="cart-item">
        <div class="info">
            <div>
                <img class="picture" :src="item.images[0]" alt="">
            </div>
            <div>
                <div>{{item.title}}</div>
                <div>{{item.category}}</div>
            </div>
        </div>

        <div class="count">
            <div class="count-controls">
                <Button
                    @click="cartStore.updateItem(item.id, EUpdateType.Decrement)"
                    :height="40"
                    :width="40"
                    picture-url="/assets/images/decrement.svg"
                ></Button>
                <input class="count-input" type="text" :value="item.count">
                <Button
                    @click="cartStore.updateItem(item.id, EUpdateType.Increment)"
                    :height="40"
                    :width="40"
                    picture-url="/assets/images/increment.svg"
                ></Button>
            </div>
            <div>
                <span>${{item.price}}</span>
                &nbsp;
                <span>${{item.price}}</span>
            </div>
        </div>

        <Button
            @click="cartStore.removeItem(item.id)"
            :height="40"
            :width="40"
            picture-url="/assets/images/remove.svg"
        ></Button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type {ICardInCart} from "~/types/card";
import Button from '../Button.vue';

export default defineComponent({
    name: "CartItem",
    components: {
        Button
    },
    data() {
        return {
            cartStore: useCartStore()
        }
    },
    props: {
        item: {
            type: Object as PropType<ICardInCart>,
            required: true
        }
    }
})
</script>

<style scoped>
.cart-item, .info, .count-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
}
.cart-item {
    padding-bottom: 40px;
    border-bottom: 1px solid #DEDFE5;
}
.cart-item:first-child {
    padding-top: 40px;
    border-top: 1px solid #DEDFE5;
}
.info {
    justify-content: flex-start;
    flex-basis: 30%;
}
.count {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.picture {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 12px;
}
.count-input {
    width: 80px;
    height: 40px;

    border: 1px solid #DEDFE5;
    border-radius: 8px;

    text-align: center;
}
</style>