<template>
    <section class="best-gear-section section-spacing">
        <div class="row">
            <div class="col-lg-6 offset-lg-1 order-lg-2 text-end">
                <picture>
                    <source media="(min-width: 1100px)" srcset="/src/assets/images/shared/desktop/image-best-gear.jpg">
                    <source media="(min-width: 675px)" srcset="/src/assets/images/shared/tablet/image-best-gear.jpg">
                    <img class="img-fluid" src="/src/assets/images/shared/mobile/image-best-gear.jpg">
                </picture>             
            </div>
            <div class="col-lg-5  text-center text-lg-start">
                <div class="d-flex flex-column justify-content-center h-100">
                    <header>
                        <h2 class="my-4 mt-lg-0">Bringing you the <span class="text-primary">best</span> audio gear</h2>
                    </header>
                    <p> Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                        rooms available for you to browse and experience a wide range of our products. Stop by our store
                        to meet some of the fantastic people who make Audiophile the best place to buy your portable
                        audio equipment.</p>
                </div>

            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: "Best Audio Gear"
};
</script>

<style scoped>
</style>
