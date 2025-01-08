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
            <div class="col-8 d-flex flex-column align-items-center">
                <h1>
                    E' TUTTO PIU' FACILE CON
                    <span class="">
                        DODO
                    </span>
                </h1>
                <button class="">
                    SCOPRI
                </button>
            </div>
            <div class="col-8">
                <img src="https://picsum.photos/200" alt="">
            </div>
        </div>
        <a href="#MISSION" class="btn btn-dark rounded-top-4 rounded-bottom-0 w-75">
            <div class="next_session_banner">
                NEXT SESSION
            </div>
        </a>
    </section>
    <section id="mission">
        <div class="row flex-column align-items-center justify-content-evenly h-100 mb-5">
            <div class="col-8 d-flex flex-column align-items-center">
                <h1>
                    E' TUTTO PIU' FACILE CON
                    <span class="">
                        DODO
                    </span>
                </h1>
                <button class="">
                    SCOPRI
                </button>
            </div>
            <div class="col-8">
                <img src="https://picsum.photos/200" alt="">
            </div>
        </div>
        <a href="#MISSION" class="btn btn-dark rounded-top-4 rounded-bottom-0 w-75">
            <div class="next_session_banner">
                NEXT SESSION
            </div>
        </a>
    </section>
    <section id="about_us">
        <div class="row flex-column align-items-center justify-content-evenly h-100 mb-5">
            <div class="col-8 d-flex flex-column align-items-center">
                <h1>
                    E' TUTTO PIU' FACILE CON
                    <span class="">
                        DODO
                    </span>
                </h1>
                <button class="">
                    SCOPRI
                </button>
            </div>
            <div class="col-8">
                <img src="https://picsum.photos/200" alt="">
            </div>
        </div>
        <a href="#MISSION" class="btn btn-dark rounded-top-4 rounded-bottom-0 w-75">
            <div class="next_session_banner">
                NEXT SESSION
            </div>
        </a>
    </section>
    <section id="services">
        <div class="row flex-column align-items-center justify-content-evenly h-100 mb-5">
            <div class="col-8 d-flex flex-column align-items-center">
                <h1>
                    E' TUTTO PIU' FACILE CON
                    <span class="">
                        DODO
                    </span>
                </h1>
                <button class="">
                    SCOPRI
                </button>
            </div>
            <div class="col-8">
                <img src="https://picsum.photos/200" alt="">
            </div>
        </div>
        <a href="#MISSION" class="btn btn-dark rounded-top-4 rounded-bottom-0 w-75">
            <div class="next_session_banner">
                NEXT SESSION
            </div>
        </a>
    </section>
    <section id="contacts">
        <div class="row flex-column align-items-center justify-content-evenly h-100 mb-5">
            <div class="col-8 d-flex flex-column align-items-center">
                <h1>
                    E' TUTTO PIU' FACILE CON
                    <span class="">
                        DODO
                    </span>
                </h1>
                <button class="">
                    SCOPRI
                </button>
            </div>
            <div class="col-8">
                <img src="https://picsum.photos/200" alt="">
            </div>
        </div>
        <a href="#MISSION" class="btn btn-dark rounded-top-4 rounded-bottom-0 w-75">
            <div class="next_session_banner">
                NEXT SESSION
            </div>
        </a>
    </section>
</template>

<style scoped>
section {
    margin-bottom: 100px;
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
        color: red;
        text-align: center;
    }

    button {
        text-decoration: none;
        border: 0;
        border-radius: 10px;
        padding: 0.5em 2em;
        text-wrap: nowrap;
        background: palegreen;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

    a {
        position: absolute;
        bottom: -2%;
        height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>