<template>
    <section class="product-feature section-spacing">
        <div class="row">
            <div class="col-lg-7">
                <h3 class="h4">Feature</h3>
                <p>{{ product.features }}</p>
            </div>
            <div class="col-lg-4 offset-lg-1">
                <div class="row mt-4 mt-lg-0">
                    <div class="col-md-6 col-lg-12 ">
                        <h3 class="h4">In The Box</h3>
                    </div>
                    <div class="col-md-6 col-lg-12">
                        <ul class="list-unstyled">
                            <li v-for="(item, index) in product.includes" :key="index">
                                <span class="text-primary fw-bold me-3">{{item.quantity}}x</span>{{item.item}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    props: ['product'],
    name: "ProductFeature",
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {}
};
</script>

<style scoped>

</style>
