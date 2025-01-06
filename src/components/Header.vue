<script>
import Logo from './Logo.vue'
import Menu from './Menu.vue'

export default {
    name: 'Header',
    components:
    {
        Logo,
        Menu
    },
    props: {

    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="d-flex justify-content-between px-5">
        <Logo class="mt-3"></Logo>
        <Menu></Menu>
    </div>
</template>

<style></style>
