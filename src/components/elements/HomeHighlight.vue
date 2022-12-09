<template>
    <div class="section-spacing">

        <!-- first -->
        <section class="speaker1-hl hightlight-spacing text-center text-white rounded-3  pattern-bg">
            <div class="row">
                <div class="col-lg-3 offset-lg-2">

                    <img class="img-fluid" src="/src/assets/images/home/desktop/image-speaker-zx9.png"
                     srcset="/src/assets/images/home/tablet/image-speaker-zx9.png 700w,
                     /src/assets/images/home/mobile/image-speaker-zx9.png 640w"  />

                </div>
                <div class="col-lg-5 offset-lg-1">
                    <div class="d-flex flex-column justify-content-center h-100">
                        <header class="mt-5">
                            <h2 class="text-white h1">ZX9<br class="d-md-none"> speaker</h2>
                        </header>
                        <p class="text-white">Upgrade to premium speakers that are phenomenally built to deliver truly
                            remarkable sound.</p>
                        <router-link class="btn btn-dark align-self-center" :to="{
                        name: 'product',
                        params: { 
                            category: 'speakers',
                            product: 'zx9-speaker',
                        }
                    }">See Product</router-link>
                    </div>

                </div>
            </div>
        </section>
        <!-- first -->

        <!-- middle -->
        <section class="speaker2-hl hightlight-spacing rounded-3">
            <div class="row h-100">
                <div class="col-md-6 h-100 p-5">
                    <div
                        class="d-flex flex-column justify-content-center align-items-start lign-items-md-center h-100 p-4">
                        <header>
                            <h3 class="h3">ZX7 speaker</h3>
                        </header>
                        <router-link class="btn btn-outline-dark align-self-start mt-3" :to="{
                        name: 'product',
                        params: { 
                            category: 'speakers',
                            product: 'zx7-speaker',
                        }
                    }">See Product</router-link>
                    </div>

                </div>
            </div>
        </section>
        <!-- middle -->

        <!-- end -->
        <section class="">
            <div class="row">
                <div class="col-md-6 ">
                    <img class="img-fluid rounded-3" src="/src/assets/images/home/desktop/image-earphones-yx1.jpg">
                </div>
                <div class="col-md-6">
                    <div class="d-flex flex-column justify-content-center align-items-center align-items-lg-start h-100 bg-light rounded-3 p-5 mt-3 mt-lg-0">
                        <h3>YX1 earphones</h3>
                        <router-link class="btn btn-outline-dark mt-3" :to="{
                        name: 'product',
                        params: { 
                            category: 'earphones',
                            product: 'yx1-earphones',
                        }
                    }">See Product</router-link>
                    </div>

                </div>
            </div>
        </section>
        <!-- end -->

    </div>
</template>


<script>
export default {
    name: "Home Highlights",
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {}
};
</script>

<style lang="scss" scoped>
.hightlight-spacing {
    margin-bottom: 1em;
}
</style>
