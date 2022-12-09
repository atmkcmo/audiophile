<template>
    <section class="similar-products section-spacing">
        <div class="row">
            <div class="col text-center">
                <h3 class="mb-4 h4">You may also like</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 mb-5 mb-lg-0" v-for="(item,index) in pageProduct.others" :key="index">
                <img class="img-fluid rounded-3" :src="getImg(item.slug)" alt="">                 
                <div class="text-center">
                    <h5 class="my-4">{{ item.name }}</h5>
                    <router-link class="btn btn-primary text-small py-3 px-5" style="line-height: 1" :to="{
                        name: 'product',
                        params: { 
                            category: `${getURLCategory(item.slug)}`,
                            product: `${item.slug}`,
                        }
                    }">See Product</router-link>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    props: ['pageProduct'],
    name: "SimilarProducts",
    data() {
        return {};
    },
    methods: {
        getURLCategory(slug) {
            let arr = slug.split('-');
            return arr[arr.length - 1 ]
        },
        getImg(item) {
            const imageUrl = new URL(`/src/assets/images/shared/desktop/image-${item}.jpg`, import.meta.url).href;
            return imageUrl;
        },
    },
};
</script>

<style scoped>

</style>
