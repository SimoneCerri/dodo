<script>
import logoMarrone from '/logo_marrone.webp';
import door2doorMarrone from '/door2door_marrone.webp';

export default {
    name: 'Logo',
    data() {
        return {
            logoSrc: logoMarrone,
        };
    },
    async mounted() {
        this.updateLogoSrc();
        window.addEventListener('resize', this.updateLogoSrc);
    },
    async beforeUnmount() {
        window.removeEventListener('resize', this.updateLogoSrc);
    },
    methods: {
        updateLogoSrc() {
            const width = window.innerWidth;

            if (width > 799) {
                this.logoSrc = door2doorMarrone;
            } else {
                this.logoSrc = logoMarrone;
            }
        },
    },
};
</script>

<template>
    <div class="d-flex justify-content-center align-items-center mine_rounded">
        <a href="#">
            <img :src="logoSrc" alt="Logo del sito raffigurante un collarino per cani con una cravattina">
        </a>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;

    img {
        width: 50px;
    }
}
</style>