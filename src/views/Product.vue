<template>
    <div class="container-sm">
        <template v-if="loading">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </template>
        <template v-else>
            <section class="section-spacing">
                <div class="row">
                    <div class="col">
                        <a class="btn btn-link btn-link--back" @click="$router.go(-1)">back</a>
                    </div>
                </div>
                <ProductDetails @addToCart="addToCart" :product="pageProduct"></ProductDetails>
                <ProductFeatures :product="pageProduct"></ProductFeatures>
                <ProductGallery :product="pageProduct"></ProductGallery>
                <SimilarProducts :pageProduct="pageProduct"></SimilarProducts>
                <Categories></Categories>
                <BestAudioGear></BestAudioGear>
            </section>

        </template>

    </div>
</template>

<script>
import axios from "axios";
import ProductDetails from "../components/elements/ProductDetails.vue";
import ProductFeatures from "../components/elements/ProductFeatures.vue";
import ProductGallery from "../components/elements/ProductGallery.vue";
import SimilarProducts from "../components/elements/SimilarProducts.vue";
import Categories from "../components/elements/Categories.vue";
import BestAudioGear from "../components/elements/BestAudioGear.vue";
export default {
    name: "Product",
    components: {
        ProductDetails,
        ProductFeatures,
        ProductGallery,
        SimilarProducts,
        BestAudioGear,
        Categories
    },
    data() {
        return {
            loading: true,
            allProducts: [],
            pageProduct: []
        };
    },
    watch: {
        "$route.params.product": {
            handler: function(product) {
                this.getPageData();
            },
            deep: true,
            immediate: true
        }
    },
    mounted() {
        this.fetchData();
    },

    methods: {
        addToCart(item) {
            this.$emit("addToCart", item);
        },
        getPageData() {
            let that = this;
            let product = this.allProducts.filter(function(product) {
                    return product.slug == that.$route.params.product;
                });
                this.pageProduct = product[0];
        },
        fetchData() {
            this.loading = true;
            const baseURI = "/audiophile/data.json";
            axios.get(baseURI).then(result => {
                this.allProducts = result.data;
                
                this.getPageData()
                this.loading = false;
            });
        }
    }
};
</script>

<style scoped></style>
