<template>
    <div class="nav-placeholder">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container-lg">
                <div>
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <img src="/src/assets/images/shared/tablet/icon-hamburger.svg" alt="menu toggle">
                    </button>
                    <a class="navbar-brand" href="/">
                        <img src="/src/assets/images/shared/desktop/logo.svg" alt="Audiophile logo">
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-5">
                        <li class="nav-item">
                            <router-link class="nav-link active" :to="{
                        name: 'home',
                    }">Home</router-link>
                            <!-- <a class="" aria-current="page" href="#"></a> -->
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{
                        name: 'category',
                        params: { 
                            category: `headphones`,
                        }
                    }">Headphones</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{
                        name: 'category',
                        params: { 
                            category: `earphones`,
                        }
                    }">Earphones</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{
                        name: 'category',
                        params: { 
                            category: `speakers`,
                        }
                    }">Speakers</router-link>
                        </li>
                    </ul>
                </div>

                <button @click="togleCart" type="button" class="btn  position-relative">
                    <img src="/src/assets/images/shared/desktop/icon-cart.svg" alt="">
                    <span v-if="(cartItems.length > 0)"
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {{ cartItems.length }}
                        <span class="visually-hidden">Cart Items</span>
                    </span>
                </button>

            </div>
        </nav>
    </div>

</template>
<script>
export default {
    props: ["cartItems"],
    name: "Nav",
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {
        togleCart() {
            this.$emit("togleCart");
        }
    }
};
</script>

<style scoped>
.nav-placeholder {
    height: 54px;
}
</style>
