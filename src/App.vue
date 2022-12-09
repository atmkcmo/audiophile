<template>
    <section class="">
        <NavBar @togleCart="toggleCart" :cartItems="cartItems"></NavBar>
        <main class="main">
            <router-view @addToCart="addToCart" :cartItems="cartItems"  :cartTotal="cartTotal"></router-view>
        </main>
        <FooterSection></FooterSection>
        <CartModal 
            @removeAllItems="removeAllItems" 
            @removeItem="removeItem" 
            @addItem="addItem" 
            @toggleCart="toggleCart"
            :cartItems="cartItems" 
            :cartTotal="cartTotal">
         </CartModal>


       

       

    </section>
</template>

<script>
// import axios from "axios";
import FooterSection from "./components/layouts/Foot.vue";
import NavBar from "./components/layouts/Nav.vue";
import CartModal from "./components/elements/Cart.vue";
import * as bootstrap from "bootstrap";
export default {
    name: "app",
    components: {
        NavBar,
        FooterSection,
        CartModal
    },
    data() {
        return {
            cartItems: [],
            cartTotal: 0,
            modalInstance: null, 
        };
    },
    mounted() {
        this.modalInstance = new bootstrap.Modal(
                document.getElementById("cartModal")
            );
    },
    computed: {},
    watch: {
        cartItems: {
            handler(newValue, oldValue) {
                this.cartTotal = 0;
                let that = this;
                this.cartItems.forEach(function(item) {
                    let itemTotal = item.product.price * item.quantity;
                    that.cartTotal += itemTotal;
                });
            },
            deep: true
        }
    },
    methods: {
        addToCart(item) {
            this.cartItems.push(item);
        },
        toggleCart() {
            this.modalInstance.toggle();
        },
        removeAllItems() {
            this.cartItems = [];
            this.$forceUpdate();
        },
        addItem(index) {
            this.cartItems[index].quantity++;
        },
        removeItem(index) {
            if (this.cartItems[index].quantity > 0) {
                this.cartItems[index].quantity--;
            }
        }
    }
};
</script>

<style lang="scss">
</style>
