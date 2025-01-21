<script>
import logoMarrone from '../assets/img/logo_marrone.png';
import door2doorMarrone from '../assets/img/door2door_marrone.png';

export default {
    name: 'Logo',
    data() {
        return {
            logoSrc: logoMarrone,
        };
    },
    mounted() {
        this.updateLogoSrc();
        window.addEventListener('resize', this.updateLogoSrc);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateLogoSrc);
    },
    methods: {
        updateLogoSrc() {
            const width = window.innerWidth;

            if (width > 900) {
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
            <img :src="logoSrc" alt="Logo">
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