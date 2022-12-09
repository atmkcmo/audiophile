<template>
    <div class="card">
        <div class="card-body">
            <div class="row mb-3">
                <div class="col">
                    <h1 class="h3">Checkout</h1>
                    <div v-if="hasErrors" class="text-danger py-2 h6">
                        *Please enter the required information below
                    </div>
                </div>
            </div>

            <!-- billing -->
            <section class="mb-5">
                <header class="mb-3">
                    <h2 class="text-primary h6">Billing Details</h2>
                </header>
                <div class="row mb-3">
                    <div class="col">
                        <label for="fullName">Full Name</label>
                        <input id="fullName" type="text" :class="{ 'is-invalid': errors.fullNameError }"
                            class="form-control form-control-lg" placeholder="First name" aria-label="First name"
                            v-model="formData.fullName">
                    </div>
                    <div class="col">
                        <label for="email">Email</label>
                        <input id="email" type="text" :class="{ 'is-invalid': errors.emailError }"
                            class="form-control form-control-lg" placeholder="Email" aria-label="email"
                            v-model="formData.email">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-lg-6">
                        <label for="phone">Phone</label>
                        <input id="phone" type="number" :class="{ 'is-invalid': errors.phoneError }"
                            class="form-control form-control-lg" placeholder="Phone" aria-label="phone"
                            v-model="formData.phone">
                    </div>
                </div>
            </section>
            <!-- billing -->

            <!-- shipping -->
            <section class="my-5">
                <header class="mb-3">
                    <h2 class="text-primary h6">Shipping Info</h2>
                </header>
                <div class="row mb-3">
                    <div class="col">
                        <label for="address1">Address</label>
                        <input id="address1" type="text" :class="{ 'is-invalid': errors.address1Error }"
                            class="form-control form-control-lg" placeholder="Address" aria-label="Address"
                            v-model="formData.address1">
                    </div>

                </div>
                <div class="row mb-3">
                    <div class="col">
                        <label for="city">City</label>
                        <input id="city" type="text" :class="{ 'is-invalid': errors.cityError }"
                            class="form-control form-control-lg" placeholder="City" aria-label="City"
                            v-model="formData.city">
                    </div>
                    <div class="col">
                        <label for="state">State</label>
                        <input id="state" type="text" :class="{ 'is-invalid': errors.stateError }"
                            class="form-control form-control-lg" placeholder="State" aria-label="State"
                            v-model="formData.state">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-lg-6">
                        <label for="zip">Zip</label>
                        <input id="zip" type="number" :class="{ 'is-invalid': errors.zipError }"
                            class="form-control form-control-lg" placeholder="Zip" aria-label="Zip"
                            v-model="formData.zip">
                    </div>
                </div>
            </section>
            <!-- shipping -->

            <!-- payment -->
            <section class="my-5">
                <header class="mb-4">
                    <h2 class="text-primary h6">Payment Detials</h2>
                </header>
                <div class="row mb-3">
                    <div class="col-lg-6">
                        <label for="first_name">Payment Method</label>
                    </div>
                    <div class="col-lg-6">

                        <div class="form-control form-control-lg mb-3">
                            <div class="form-check">
                                <input :class="{ 'is-invalid': errors.paymentMethodError}" class="form-check-input"
                                    type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="e-money"
                                    v-model="formData.paymentMethod">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    e-Money
                                </label>
                            </div>
                        </div>

                        <div class="form-control form-control-lg">
                            <div class="form-check">
                                <input :class="{ 'is-invalid': errors.paymentMethodError }" class="form-check-input"
                                    type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="COD"
                                    v-model="formData.paymentMethod">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Cash on Delivery
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row mb-3" v-if="formData.paymentMethod == 'e-money'">
                    <div class="col">
                        <label for="eMoneyNumber">e-Money Number</label>
                        <input id="eMoneyNumber" type="text"
                            :class="{ 'is-invalid': errors.eMoneyNumberError && formData.paymentMethod == 'e-money' }"
                            class="form-control form-control-lg" placeholder="e-Money Number" aria-label="e-Money"
                            v-model="formData.eMoneyNumber">
                    </div>
                    <div class="col">
                        <label for="eMoneyPin">e-Money Pin</label>
                        <input id="eMoneyPin" type="number"
                            :class="{ 'is-invalid': errors.eMoneyPinError && formData.paymentMethod == 'e-money'}"
                            class="form-control form-control-lg" placeholder="Pin" aria-label="Pin"
                            v-model="formData.eMoneyPin">
                    </div>
                </div>
            </section>
            <!-- payment -->

        </div>
    </div>
</template>


<script>
export default {
    name: "CheckoutForm",
    props: ["validateForm"],
    data() {
        return {
            formData: {
                fullName: null,
                email: null,
                phone: null,
                address1: null,
                city: null,
                state: null,
                zip: null,
                paymentMethod: "e-money",
                eMoneyNumber: null,
                eMoneyPin: null
            },
            hasErrors: false,
            errors: {
                fullNameError: false,
                emailError: false,
                phoneError: false,
                address1Error: false,
                cityError: false,
                stateError: false,
                zipError: false,
                paymentMethodError: false,
                eMoneyNumberError: false,
                eMoneyPinError: false
            }
        };
    },
    watch: {
        validateForm(val) {
            if (val) {
                this.runValidation();
            }
        },
    },
    methods: {
        runValidation() {
            let that = this;
            for (const key in that.formData) {
                let errorKey = `${key}Error`;
                if (that.formData[key] == null || that.formData[key] == "") {
                    that.errors[errorKey] = true;
                } else {
                    that.errors[errorKey] = false;
                }
            }
            if(this.formData.paymentMethod == 'COD') {
                this.formData.eMoneyNumber= false;
                this.formData.eMoneyPin = false;
            }
            this.hasErrors = Object.values(that.errors).some(value => value === true);
            this.$emit("reSetValidation");
            if(!this.hasErrors) {
                this.$emit("openThankYouModal");
            } 
        }
    }
};
</script>

<style scoped>
</style>
