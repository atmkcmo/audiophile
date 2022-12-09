<template>
    <div>
        <section class="row section-spacing">
            <div class="col-lg-6" :class="index % 2 != 0 ? 'order-lg-2 offset-lg-1': '' ">
                <!-- <img class="img-fluid rounded-3 mb-3 mb-lg-0" :src="`${item.image.desktop}`" alt=""> -->
                <img class="img-fluid rounded-3 mb-3 mb-lg-0" :src="getImg(item.slug)" alt="">
            </div>
            <div class="c" :class="index % 2 != 0 ? 'col-lg-5': 'offset-lg-1 col-lg-5' ">
                <div class="d-flex flex-column justify-content-center h-100 text-center text-lg-start">
                    <div class="h6 text-primary fw-normal" v-if="item.new">New Product</div>
                    <header><h2>{{ item.name}}</h2></header>
                    <p>{{ item.description }}</p>
                    <router-link class="btn btn-primary align-self-center align-self-lg-start" :to="{
                        name: 'product',
                        params: { 
                            category: `${item.category}`,
                            product: `${item.slug}`,
                        }
                    }">See Product</router-link>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    props: ["item", "index"],
    name: "Category Product",
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {
        getImg(item) {
            const imageUrl = new URL(`/src/assets/images/product-${item}/desktop/image-product.jpg`, import.meta.url).href;
            return imageUrl;
        }
    }
};
</script>

<style scoped>
</style>
