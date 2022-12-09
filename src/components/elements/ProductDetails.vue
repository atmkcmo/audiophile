<template>
    <section class="product-details section-spacing">
        <div class="row">
            <div class="col-lg-6">
                <!-- <img class="rounded-3 mb-4 img-fluid" :src="`${product.image.desktop}`" alt=""> -->
                <img class="rounded-3 mb-4 img-fluid" :src="getImg(product.slug)" alt="">
            </div>
            <div class="col-lg-5 offset-lg-1">
                <div class="d-flex flex-column justify-content-center h-100">
                    <h2>{{ product.name }}</h2>
                    <p>{{ product.description }}</p>
                    <div class="h5 mb-4">${{ currencyNumber(product.price) }}</div>
                    <div class="d-flex">
                        <div class="btn-group" role="group" aria-label="Basic example">

                            <button @click="removeItem" type="button" class="btn btn-light">-</button>
                            <button  disabled type="button" class="btn btn-light" style="min-width: 50px">{{ itemCount }}</button>
                            <button @click="addItem" type="button" class="btn btn-light">+</button>
                        </div>
                        <a href="#" class="ms-4 btn btn-primary" @click="addToCart()">Add to Cart</a>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    props: ["product"],
    name: "Product Details",
    data() {
        return {
            itemCount: 1,
        };
    },
    computed: {},
    mounted() {},
    methods: {
        currencyNumber(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        addItem() {
            this.itemCount ++;
        },
        removeItem() {
            if(this.itemCount > 1) {
                this.itemCount --;
            }
        },
        getImg(item) {
            const imageUrl = new URL(`/src/assets/images/product-${item}/desktop/image-product.jpg`, import.meta.url).href;
            return imageUrl;
        },
        addToCart() {
            let product = this.product;
            let quantity = this.itemCount;
            this.$emit('addToCart', {
                product: product,
                quantity: quantity,
            })
            this.itemCount = 1;
        }
    }
};
</script>

<style scoped>

</style>
