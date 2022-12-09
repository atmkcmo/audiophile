<template>
    <footer class="footer bg-dark text-light text-center text-md-start">
        <section class="container-md">
            <div class="row mb-4">
                <div class="col-lg-5 text-lg-start">
                    <img class="img-fluid" src="/src/assets/images/shared/desktop/logo.svg" alt="">
                </div>
                <div class="col-lg-7">
                    <ul class="nav flex-column flex-md-row justify-content-lg-end">
                        <li class="nav-item">
                            <router-link class="nav-link  text-light" :to="{
                                name: 'home',}">Home
                            </router-link>
                        </li>
                        <li class="nav-item ">
                            <router-link class="nav-link text-light" :to="{
                                name: 'category',
                                params: { 
                                    category: `headphones`,
                                }
                            }">Headphones</router-link>
                        </li>
                        <li class="nav-item text-">
                            <router-link class="nav-link  text-light" :to="{
                                name: 'category',
                                params: { 
                                    category: `earphones`,
                                }
                            }">Earphones</router-link>
                        </li>
                        <li class="nav-item text-">
                            <router-link class="nav-link  text-light" :to="{
                                name: 'category',
                                params: { 
                                    category: `speakers`,
                                }
                            }">Speakers</router-link>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="row mb-4">
                <div class="col-lg-6">
                    <p class="footer__light-text">Audiophile is an all in one stop to fulfill your audio needs. We're a
                        small team of music lovers
                        and sound specialists who are devoted to helping you get the most out of personal audio. Come
                        and visit our demo facility - we're open 7 days a week.</p>
                </div>
            </div>
            <div class="row ">
                <div class="col-md-6">
                    <p class="footer__light-text">Copyright 2021. All Rights Reserved</p>
                </div>
                <div class="col-md-6">
                    <ul class="nav justify-content-center justify-content-md-end">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img src="/src/assets/images/shared/desktop/icon-facebook.svg" alt="">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img src="/src/assets/images/shared/desktop/icon-twitter.svg" alt="">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img src="/src/assets/images/shared/desktop/icon-instagram.svg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </footer>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return {};
    },
};
</script>

<style scoped>
.footer {
    padding: 6em 0;
}
.footer__light-text {
    color: #888;
}
</style>
