<template>
    <div id="cartModal" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cart ({{ cartItems.length }})</h5>
                    <a v-if="(cartItems.length > 0)" href="#" @click="removeAll">Remove all</a>
                </div>
                <div class="modal-body">
                    <template v-if="(cartItems.length == 0)">
                        Your cart is empty
                    </template>
                    <template v-else>
                        <div class="d-flex align-items-center mb-5" v-for="(item, index) in cartItems" :key="index">
                            <div>
                                <img class="img-fluid rounded-3" :src="getCartImg(item.product.slug)"  alt="" style="max-width: 80px">
                            </div>
                            <div class="d-flex flex-column flex-grow-1 ms-3">
                                <div class="h6">{{ item.product.name }}</div>
                                <div>${{  moneyCurrency(item.product.price) }}</div>
                            </div>
                            <div class="text-end">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button @click="removeItem(index)" type="button" class="btn btn-light">-</button>
                                    <button disabled type="button" class="btn btn-light" style="min-width: 40px;">{{ item.quantity }}</button>
                                    <button @click="addItem(index)" type="button" class="btn btn-light">+</button>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                            <span>TOTAL</span>
                            <!-- <span class="fw-bold fs-5 text-dark">${{ cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span> -->
                            <span class="fw-bold fs-5 text-dark">${{ moneyCurrency(cartTotal) }}</span>
                        </div>
                    </template>

                </div>
                <div class="modal-footer">
                    <button :disabled="cartItems.length == 0" @click="goToCheckout" type="button" class="btn btn-primary d-block w-100 btn-lg">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: ["cartItems", "cartTotal"],
    name: "Cart",
    total: 0,
    data() {
        return {
        };
    },
    methods: {
        getCartImg(item) {
            const imageUrl = new URL(`/src/assets/images/cart/image-${item}.jpg`, import.meta.url).href;
            return imageUrl;
        },
        moneyCurrency(val) {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        addItem(index) {
            this.$emit("addItem", index);
        },
        removeItem(index) {
            this.$emit("removeItem", index);
        },
        removeAll() {
            this.$emit("removeAllItems");
        },
        closeCart() {
            this.$emit("toggleCart")
        },
        goToCheckout() {
            this.closeCart();
            this.$router.push({ path: '/audiophile/checkout' })
        }
    }
};
</script>

<style scoped>
</style>
