<script>

export default {
    name: 'Menu',
    components:
    {

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
    <!-- <div class="bg-warning row rounded-top-0 rounded-4 pt-4 pb-3 px-5 text-center">
        <div class="col-3">
            <a class="text-decoration-none text-dark" href="#Home">
                Home
            </a>
        </div>
        <div class="col-3 ps-2">
            <a class="text-decoration-none text-dark text-nowrap" href="#Home">
                Chi siamo
            </a>
        </div>
        <div class="col-3">
            <a class="text-decoration-none text-dark" href="#Home">
                Servizi
            </a>
        </div>
        <div class="col-3">
            <a class="text-decoration-none text-dark" href="#Home">
                Contatti
            </a>
        </div>
    </div> -->

    <nav class="navbar navbar-expand-lg rounded-bottom-4">
        <div class="container-fluid">
            <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-end">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#call_to_action">
                            Home
                        </a>
                    </li>
                    <li class="nav-item text-nowrap">
                        <a class="nav-link" href="#about_us">
                            Chi Siamo
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">
                            Servizi
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contacts">
                            Contatti
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style></style>