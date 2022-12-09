<template>
    <div class="card">
        <div class="card-body">
            <section>
                

                <div v-for="(item, index) in cartItems" :key="index" class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex align-items-center">
                        <img class="rounded-2" :src="getSummaryImg(item.product.slug)" alt="" style="max-width: 60px">
                        <div class="ms-3">
                            <div class="fw-bold text-dark">{{ item.product.name }}</div>
                            <div>${{ moneyCurrency(item.product.price) }}</div>
                        </div>
                    </div>
                    <div class="text-end" style="min-width: 40px;">
                        x {{ item.quantity }}
                    </div>
                </div>


            </section>
            <section>
                <div class="d-flex justify-content-between mb-2">
                    <span>Total</span>
                    <span class="fw-bold text-dark">$ {{  moneyCurrency(cartTotal) }}</span>
                </div>

                <div class="d-flex justify-content-between mb-2">
                    <span>Shipping</span>
                    <span class="fw-bold text-dark">${{ shipping }}</span>
                </div>

                <div class="d-flex justify-content-between mb-4">
                    <span>VAT (included)</span>
                    <span class="fw-bold text-dark">${{ vat }}</span>
                </div>

                <div class="d-flex justify-content-between mb-4">
                    <span>Grand Total</span>
                    <span class="fw-bold text-primary">${{ moneyCurrency( grandTotal ) }}</span>
                </div>
            </section>
            <button @click="continueAndPay" href="#" class="btn btn-primary d-block w-100 btn-lg">Continue &amp; Pay</button>
            <div v-if="payButtonDisabled" class="text-center text-danger">Please fill out the required information to continue</div>
        </div>
    </div>
</template>


<script>
export default {
    props: ['cartItems', 'cartTotal', 'payButtonDisabled', 'grandTotal'],
    name: "CheckoutSummary",
    data() {
        return {
            shipping: 50,
            vat: 100,
        };
    },
    mounted() {},
    methods: {
        getSummaryImg(item) {
            const imageUrl = new URL(`/src/assets/images/cart/image-${item}.jpg`, import.meta.url).href;
            return imageUrl;
        },
        continueAndPay() {
            this.$emit('continueAndPay');
        },
        moneyCurrency(val) {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    }
};
</script>

<style scoped>
</style>
