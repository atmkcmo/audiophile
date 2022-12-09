<template>

    <div>

        <section class="hero">
            <div class="container-lg h-100">
                <div class="row h-100">
                    <div class="col-md-8 offset-md-2 col-lg-5 offset-lg-0 h-100 ">
                        <div class="d-flex flex-column justify-content-center h-100 text-center text-lg-start">
                            <header>
                                <div class="text-white pre-header">New product</div>
                                <h1 class="text-white"> XX99 Mark II Headphones</h1>
                            </header>
                            <p class="">Experience natural, lifelike audio and exceptional build quality made for the
                                passionate music enthusiast.</p>
                            <div>
                                <a class="btn btn-primary" href="/headphones/xx99-mark-two-headphones">See Product</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <!-- hero -->

        <div class="container section-spacing">
            <template v-if="loading">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </template>
            <template v-else>
                <Categories></Categories>
                <HomeHighlights></HomeHighlights>
                <BestAudioGear></BestAudioGear>
            </template>

        </div>

    </div>
    <!-- end template child div -->

</template>

<script>
import axios from "axios";
import BestAudioGear from "../components/elements/BestAudioGear.vue";
import Categories from "../components/elements/Categories.vue";
import HomeHighlights from "../components/elements/HomeHighlight.vue";

export default {
    name: "Home",
    components: {
        BestAudioGear,
        Categories,
        HomeHighlights
    },
    data() {
        return {
            loading: false
        };
    },
    computed: {},
    mounted() {},

    methods: {}
};
</script>

<style lang="scss" scoped>
.speaker1-hl {
    img {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
}
@media (min-width: 1024px) {
}
</style>
