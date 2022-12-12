
<template>
    <div>
        <section class="category-hero d-flex justify-content-center align-items-center bg-dark">
            <h1 class="text-white">{{ pageCategory }}</h1>
        </section>
        <section class="container-sm">
            <div class="section-spacing">
                <div class="row">
                    <div class="col">
                        <a class="btn btn-link btn-link--back" @click="$router.go(-1)">back</a>
                    </div>
                </div>
                <div v-for="(item, index) in pageProducts" :key="index">
                    <CategoryProduct :item="item" :index="index"></CategoryProduct>
                </div>

                <Categories></Categories>
                <BestAudioGear></BestAudioGear>
            </div>

        </section>
    </div>
</template>

<script>
import axios from "axios";
import CategoryProduct from "../components/elements/CategoryProduct.vue";
import Categories from "../components/elements/Categories.vue";
import BestAudioGear from "../components/elements/BestAudioGear.vue";
export default {
    name: "Category",
    components: {
        CategoryProduct,
        Categories,
        BestAudioGear
    },
    data() {
        return {
            loading: true,
            allProducts: [],
            categories: [],
            pageCategory: "",
            pageProducts: []
        };
    },
    watch: {
        "$route.params.category": {
            handler: function(category) {
                this.pageCategory = category;
                this.setPageDate();
            },
            deep: true,
            immediate: true
        }
    },
    mounted() {
        this.pageCategory = this.$route.params.category;
        this.fetchData();
    },

    methods: {
        categorizeProducts() {
            const groupBy = (array, key) => {
                return array.reduce((result, currentValue) => {
                    (result[currentValue[key]] =
                        result[currentValue[key]] || []).push(currentValue);
                    return result;
                }, {});
            };
            this.categories = groupBy(this.allProducts, "category");
        },
        sortData() {
            let a = this.pageProducts;
        },
        setPageDate() {
            this.pageProducts = this.categories[this.pageCategory];
            this.sortData();
        },
        async fetchData() {
            let that = this;
            this.loading = true;
            this.allProducts = [];
            const baseURI = "/audiophile/data.json";
            await axios.get(baseURI).then(result => {
                this.allProducts.push(...result.data);
                this.categorizeProducts();
            });
            that.setPageDate();
            that.loading = false;
        }
    }
};
</script>

<style scoped>
.category-hero {
    height: 200px;
}
</style>
