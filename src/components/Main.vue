<script>

export default {
    name: 'Main',
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
    <section id="call_to_action">
        <div class="row flex-column align-items-center justify-content-evenly h-100 mb-5">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <div class="col-8 d-flex justify-content-center">
                    <h1>
                        E' TUTTO PIU'
                        <br>
                        FACILE CON
                    </h1>
                </div>
                <div class="col-8 d-flex justify-content-center">
                    <span class="text-center">
                        DODO
                    </span>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button class="">
                        SCOPRI
                    </button>
                </div>
            </div>
            <div class="col-12">
                <img src="https://picsum.photos/300" alt="">
            </div>
        </div>
        <a href="#mission" class="btn btn-dark rounded-top-4 rounded-bottom-0 w-75">
            <div class="next_session_banner">
                LA NOSTRA MISSIONE
                <br>
                <font-awesome-icon icon="angles-down" />
            </div>
        </a>
    </section>
    <section id="mission">
        <div class="row flex-column align-items-center justify-content-evenly h-100 mb-5">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <div class="col-8 d-flex justify-content-center">
                    <h1>
                        E' TUTTO PIU'
                        <br>
                        FACILE CON
                    </h1>
                </div>
                <div class="col-8 d-flex justify-content-center">
                    <span class="text-center">
                        DODO
                    </span>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button class="">
                        SCOPRI
                    </button>
                </div>
            </div>
            <div class="col-12">
                <img src="https://picsum.photos/300" alt="">
            </div>
        </div>
        <a href="#about_us" class="btn btn-dark rounded-top-4 rounded-bottom-0 w-75">
            <div class="next_session_banner">
                CHI SIAMO
                <br>
                <font-awesome-icon icon="angles-down" />
            </div>
        </a>
    </section>
    <section id="about_us">
        <div class="row flex-column align-items-center justify-content-evenly h-100 mb-5">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <div class="col-8 d-flex justify-content-center">
                    <h1>
                        E' TUTTO PIU'
                        <br>
                        FACILE CON
                    </h1>
                </div>
                <div class="col-8 d-flex justify-content-center">
                    <span class="text-center">
                        DODO
                    </span>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button class="">
                        SCOPRI
                    </button>
                </div>
            </div>
            <div class="col-12">
                <img src="https://picsum.photos/300" alt="">
            </div>
        </div>
        <a href="#services" class="btn btn-dark rounded-top-4 rounded-bottom-0 w-75">
            <div class="next_session_banner">
                SERVIZI
                <br>
                <font-awesome-icon icon="angles-down" />
            </div>
        </a>
    </section>
    <section id="services">
        <div class="row flex-column align-items-center justify-content-evenly h-100 mb-5">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <div class="col-8 d-flex justify-content-center">
                    <h1>
                        E' TUTTO PIU'
                        <br>
                        FACILE CON
                    </h1>
                </div>
                <div class="col-8 d-flex justify-content-center">
                    <span class="text-center">
                        DODO
                    </span>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button class="">
                        SCOPRI
                    </button>
                </div>
            </div>
            <div class="col-12">
                <img src="https://picsum.photos/300" alt="">
            </div>
        </div>
        <a href="#contacts" class="btn btn-dark rounded-top-4 rounded-bottom-0 w-75">
            <div class="next_session_banner">
                CONTATTI
                <br>
                <font-awesome-icon icon="angles-down" />
            </div>
        </a>
    </section>
    <section id="contacts">
        <div class="row flex-column align-items-center justify-content-evenly h-100 mb-5">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <div class="col-8 d-flex justify-content-center">
                    <h1>
                        E' TUTTO PIU'
                        <br>
                        FACILE CON
                    </h1>
                </div>
                <div class="col-8 d-flex justify-content-center">
                    <span class="text-center">
                        DODO
                    </span>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button class="">
                        SCOPRI
                    </button>
                </div>
            </div>
            <div class="col-12">
                <img src="https://picsum.photos/300" alt="">
            </div>
        </div>
        <a href="#call_to_action" class="btn btn-dark rounded-top-4 rounded-bottom-0 w-75">
            <div class="next_session_banner">
                E' PIU' FACILE CON DODO !
                <br>
                <font-awesome-icon icon="angles-down" />
            </div>
        </a>
    </section>
</template>

<style scoped>
section {
    margin-bottom: 10em;
    margin-top: 10em;
}

#call_to_action,
#mission,
#about_us,
#services,
#contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: palegoldenrod;
    width: 100%;
    height: 75vh;
    position: relative;

    h1 {
        color: #333;
        text-align: center;
        margin-bottom: -15%;
        white-space: nowrap;
        font-size: 2em;
    }

    span {
        font-size: 85px;
        color: #333;
        text-align: center;
    }

    button {
        text-decoration: none;
        border: 0;
        border-radius: 1em;
        padding: 0.25em 2em;
        text-wrap: nowrap;
        background: red;
        color: white;
        font-weight: bold;
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

    a {
        position: absolute;
        bottom: -12%;
        height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>