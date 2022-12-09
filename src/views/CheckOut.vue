<template>
    <div class="section-spacing">
        <div class="container-sm">
            <div class="row">
                <div class="col">
                    <a class="btn btn-link btn-link--back" @click="$router.go(-1)">back</a>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#thankYouModal">
                        Launch demo modal
                    </button>
                </div>
            </div>
            <div class="row section-spacing">
                <div class="col-lg-8">
                    <CheckoutForm :validateForm="validateForm" @reSetValidation="reSetValidation"
                        @openThankYouModal="openThankYouModal"></CheckoutForm>
                </div>
                <div class="col-lg-4">
                    <CheckoutSummary :payButtonDisabled="payButtonDisabled" :cartItems="cartItems"
                        :cartTotal="cartTotal" :grandTotal="grandTotal" @continueAndPay="continueAndPay">
                    </CheckoutSummary>
                </div>
            </div>
            <!-- <CheckoutModal ></CheckoutModal> -->

            <!-- Modal -->
            <div class="modal fade modal" id="thankYouModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body p-5" v-if="(cartItems.length > 0)">
                            <img src="/src/assets/images/checkout/icon-order-confirmation.svg" alt="">
                            <h3 class="my-4">Thank you for your order</h3>
                            <p>You will receive an email confirmation shortly</p>
                            <div class="d-flex rounded-3">
                                <div class="bg-light p-3 flex-grow-1">
                                    <div class=" d-flex justify-content-between align-items-center">
                                        <!-- <img src="/src/assets/images/cart/image-xx59-headphones.jpg" alt="" style="max-width: 50px;"> -->
                                        <img :src="`/src/assets/images/cart/image-${cartItems[0].product.slug}.jpg`" alt=""
                                            style="max-width: 50px;">
                                        <div class="d-flex flex-column flex-grow-1">
                                            <div class="fw-bold text-dark fw-5">{{cartItems[0].product.name}}</div>
                                            <div>{{ moneyCurrency(cartItems[0].product.price) }}</div>
                                        </div>
                                        <div class="text-end" style="min-width: 50px">x{{cartItems[0].quantity}}</div>
                                    </div>
                                    <div v-if="(cartItems.length > 1)">
                                        <hr>
                                        <div class="text-center">and {{cartItems.length -1 }} other item(s)</div>
                                    </div>

                                </div>
                                <div class="bg-dark flex-grow-1 d-flex justify-content-center align-items-center flex-column"
                                    style="min-width: 35%">
                                    <div>Total</div>
                                    <div>${{ moneyCurrency(grandTotal) }}</div>
                                </div>
                            </div>

                            <div class="mt-5">
                                <a @click="backToHome" class="btn btn-primary btn-lg d-block w-100" href="">Back to Home</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import CheckoutForm from "../components/elements/CheckoutForm.vue";
import CheckoutSummary from "../components/elements/CheckoutSummary.vue";
import CheckoutModal from "../components/elements/CheckoutModal.vue";
import * as bootstrap from "bootstrap";
export default {
    name: "CheckOut",
    props: ["cartItems", "cartTotal"],
    components: {
        CheckoutSummary,
        CheckoutForm,
        CheckoutModal
    },
    data() {
        return {
            validateForm: false,
            payButtonDisabled: false,
            shipping: 50,
            vat: 100,
            thankYouModal: null,
        };
    },
    mounted() {
        this.thankYouModal = new bootstrap.Modal(
            document.getElementById("thankYouModal")
        );
    },
    computed: {
        grandTotal() {
            return this.vat + this.shipping + this.cartTotal;
        },
    },

    methods: {
        moneyCurrency(val) {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        reSetValidation() {
            this.validateForm = false;
        },
        continueAndPay() {
            this.validateForm = true;
        },
        openThankYouModal() {
            this.thankYouModal.show();
        },
        togglePayButton() {
            this.payButtonDisabled = !this.payButtonDisabled;
        },
        backToHome() {
            this.$router.push({ name: 'home'});
        }

    }
};
</script>

<style scoped></style>
