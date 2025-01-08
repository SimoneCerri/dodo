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
    <header>
        <div class="d-flex align-items-center justify-content-evenly py-5">
            <div class="containter">
                <div class="row">
                    <div class="col-4">

                    </div>
                    <div class="col-4">
                        <Logo class="mine_logo"></Logo>
                    </div>
                    <div class="col-4 ps-5">
                        <Menu class="menu"></Menu>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    position: fixed;
    top: 0%;
    width: 100%;
    z-index: 1000;
}
</style>
