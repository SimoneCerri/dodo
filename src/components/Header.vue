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
            <div class="containter">
                <div class="row">
                    <div class="col-4">

                    </div>
                    <div class="col-4 d-flex justify-content-center align-items-center">
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
    margin-top: 5em;
}
</style>
