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
        <div id="header" class="d-flex align-items-center justify-content-evenly">
            <div class="container">
                <div class="row">
                    <div class="col-4 d-md-none">

                    </div>
                    <div class="col-4 col-md-6 d-flex justify-content-center align-items-center">
                        <Logo class="mine_logo"></Logo>
                    </div>
                    <div class="col-4 col-md-6 ps-4">
                        <Menu class="menu"></Menu>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    margin-top: 5em;
}
</style>
