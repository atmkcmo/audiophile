<template>
    <section class="product-gallery section-spacing">
        <div class="row">
            <div class="col-md-5">
                <div>
                    <img class="rounded-3 mb-4 img-fluid" :src="getImg(product.slug)[0]" alt="">
                    <img class="rounded-3 img-fluid" :src="getImg(product.slug)[1]" alt="">
                </div>
            </div>
            <div class="col-md-7">
                <img class="rounded-3 img-fluid mt-4 mt-md-0" :src="getImg(product.slug)[2]" alt="">
            </div>
        </div>
    </section>
</template>


<script>
export default {
    props: ['product'],
    name: "ProductGallery",
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {
        getImg(item) {
            const imageUrl1 = new URL(`/src/assets/images/product-${item}/desktop/image-gallery-1.jpg`, import.meta.url).href;
            const imageUrl2 = new URL(`/src/assets/images/product-${item}/desktop/image-gallery-2.jpg`, import.meta.url).href;
            const imageUrl3 = new URL(`/src/assets/images/product-${item}/desktop/image-gallery-3.jpg`, import.meta.url).href;
            return [imageUrl1, imageUrl2, imageUrl3];
        }
    },
};
</script>

<style scoped>

</style>
