<template>
    <section class="product-categories section-spacing">
        <div class="row">
            <div class="col-md-4" v-for="category in categories" :key="category.id">
                <div class="category mb-5 mb-lg-0">

                    <img class="img-fluid category__image"
                        :src="getImg(category)" alt="">
                    <div class="bg-light category__content">
                        <header class="h6 mb-0">{{ category }}</header>
                        <router-link class="btn btn-link" style="line-height: 1" :to="{
                        name: 'category',
                        params: { 
                            category: `${category}`,
                        }
                    }">Shop</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: "Categories",
    data() {
        return {
            categories: ["headphones", "speakers", "earphones"]
        };
    },
    computed: {},
    mounted() {},
    methods: {
        getImg(category) {
            const imageUrl = new URL(`/src/assets/images/shared/desktop/image-category-thumbnail-${category}.png`, import.meta.url).href;
            return imageUrl;
        }
    }
};
</script>

<style lang="scss" scoped>
$spacing: 40px;
.category {
    position: relative;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: end;
    margin-top: $spacing;

    &__image {
        align-self: center;
        max-height: 130px;
        position: absolute;
        top: -$spacing;
    }
    &__content {
        padding: 5em 0 2em;
    }
    @media only screen and (min-width: 992px) {
        margin-bottom: 0;
    }
}
</style>
