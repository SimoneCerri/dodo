<script>
export default {
    name: "Menu",
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
    },
};
</script>

<template>
    <nav class="navbar navbar-expand-xl rounded-bottom-4">
        <div class="container-fluid d-flex justify-content-center">
            <button class="navbar-toggler collapsed px-4" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                aria-label="Apre o chiude il menu di navigazione" @click="toggleMenu">
                <span></span>
            </button>
            <div :class="['collapse', 'navbar-collapse', { 'show': isMenuOpen }]" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-end">
                    <li class="nav-item">
                        <a @click="closeMenu" class="nav-link active" aria-label="Porta alla home del sito"
                            aria-current="page" href="#call_to_action">Home</a>
                    </li>
                    <li class="nav-item">
                        <a @click="closeMenu" class="nav-link" aria-label="Porta alla sezione servizi del sito"
                            href="#services">Servizi</a>
                    </li>
                    <li class="nav-item text-nowrap">
                        <a @click="closeMenu" class="nav-link" aria-label="Porta alla sezione chi siamo del sito"
                            href="#about_us">Chi siamo</a>
                    </li>
                    <li class="nav-item">
                        <a @click="closeMenu" class="nav-link" aria-label="Porta alla sezione mission del sito"
                            href="#mission">Mission</a>
                    </li>
                    <li class="nav-item">
                        <a @click="closeMenu" class="nav-link" aria-label="Porta alla sezione contatti del sito"
                            href="#contacts">Contatti</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar-toggler {
    background-color: var(--warning-color);
    border-radius: 15px;
    border: none;
    height: 50px;
    width: 50px;
    position: relative;
    padding: 1em;
}

.navbar-toggler-icon {
    display: none;
}

.navbar-toggler::before,
.navbar-toggler::after,
.navbar-toggler span {
    content: '';
    display: block;
    background-color: white;
    height: 5px;
    width: 25px;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease;
}

.navbar-toggler::before {
    top: 12px;
}

.navbar-toggler::after {
    top: 34px;
}

.navbar-toggler span {
    top: 23px;
}

.navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 1040;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
}

.navbar-collapse.show {
    transform: scaleY(1);
}

.navbar-nav {
    flex-direction: column;
    padding: 0;
    margin: 0;
    gap: 10px;
    text-align: right;
    align-items: flex-end;
}

.nav-item {
    text-align: left;
}

.nav-link {
    font-size: 1.2rem;
    color: var(--strong-color) !important;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: var(--light-color);
    display: inline-block;
    box-sizing: border-box;
    transition: background-color 0.2s ease, color 0.2s ease;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-link:hover {
    background-color: var(--warning-color);
    color: var(--light-color) !important;
}


.navbar-collapse .navbar-nav {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>