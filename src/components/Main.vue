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
    <section id="call_to_action" class="pt-5">
        <div class="row flex-column align-items-center justify-content-start h-100 mb-5">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <div class="col-8 d-flex justify-content-center">
                    <h1 class="mine_title">
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
                <div class="col-8 d-flex justify-content-center w-100 mine_banner">
                    <img src="../assets/img/banner_brown.jpg" alt="" class="">
                </div>
            </div>
            <div class="col-12 mine_runner">
                <img src="../assets/img/dodo_corre.png" alt="">
            </div>
        </div>
        <a href="#services" class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
            <div class="next_session_banner">
                <font-awesome-icon icon="circle-chevron-down" />
            </div>
        </a>
    </section>
    <section id="services" class="pt-5 mine_bg_secondary">
        <div
            class="row bg-warning rounded-5 flex-column align-items-center justify-content-evenly h-100 mb-5 mine_w text-center">
            <div id="services_title" class="col d-flex justify-content-center align-items-center">
                I NOSTRI
                <br>
                SERVIZI
            </div>
            <div class="col">
                DODO offre soluzione create su misura da un team di professionisti per accompagnare, informando, il
                cliente in un percorso di scelta libera.
            </div>
            <div class="col d-flex justify-content-center align-items-center">
                Ecco alcuni dei nostri servizi:
            </div>
            <div class="col d-flex flex-column justify-content-center align-items-center">
                <div class="mine_btn_brown">
                    CONSULENZA D'ARREDO
                </div>
                <div class="mine_btn_brown">
                    PROGETTAZIONE DI SPAZI
                </div>
                <div class="mine_btn_brown">
                    RISTRUTTURAZIONI
                </div>
                <div class="mine_btn_brown">
                    TUTELA LEGALE
                </div>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
                Per avere più informazioni e scoprire tutti i nostri servizi
            </div>
            <div class="col d-flex justify-content-center align-items-center">
                <div class="mine_btn_red">
                    CONTATTACI
                </div>
            </div>
        </div>
        <a href="#about_us" class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
            <div class="next_session_banner">
                <font-awesome-icon icon="circle-chevron-down" />
            </div>
        </a>
    </section>
    <section id="about_us" class="pt-5">
        <div class="row flex-column align-items-center justify-content-start h-100 mb-5 gap-3">
            <div class="col-12 d-flex justify-content-center align-items-center gap-5">
                <img src="https://picsum.photos/300" alt="" class="" style="border-radius: 50%; width:8em;">
                <img src="https://picsum.photos/300" alt="" class="" style="border-radius: 50%; width:8em;">
                <img src="https://picsum.photos/300" alt="" class="" style="border-radius: 50%; width:8em;">
            </div>
            <div
                class="col-8 d-flex flex-column justify-content-center align-items-center gap-5 bg-success about_us_card">
                <div class="col-10 d-flex justify-content-center align-items-center">
                    <h2 class="text-center">
                        Nome Cognome
                    </h2>
                </div>
                <div class="col-10 d-flex justify-content-center align-items-center">
                    <p class="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt earum saepe natus
                        quod fugit consequatur perspiciatis? Hic unde commodi, deserunt nam reiciendis dolorum ducimus
                        animi repellendus natus incidunt dolor.
                    </p>
                </div>
            </div>
        </div>
        <a href="#mission" class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
            <div class="next_session_banner">
                <font-awesome-icon icon="circle-chevron-down" />
            </div>
        </a>
    </section>
    <section id="mission" class="pt-5">
        <div class="row text-center flex-column align-items-center justify-content-evenly h-100 mb-5 mine_w">
            <div class="col-8 d-flex flex-column justify-content-center align-items-center">
                <div class="col-8 d-flex justify-content-center">
                    <h1>
                        LA NOSTRA
                        <br>
                        MISSION
                    </h1>
                </div>
            </div>
            <div class="col-10 d-flex flex-column justify-content-center align-items-center">
                <div class="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas beatae, eius corporis pariatur
                    mollitia autem illo. Ratione ab earum atque suscipit vel id odio beatae tenetur, veniam sequi est?
                    Dignissimos maiores molestiae officiis expedita, iste iusto hic ipsum consequuntur adipisci error
                    quibusdam, rem ipsa quisquam aliquid rerum ullam corporis nam!
                </div>
            </div>
        </div>
        <a href="#contacts" class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
            <div class="next_session_banner">
                <font-awesome-icon icon="circle-chevron-down" />
            </div>
        </a>
    </section>
    <section id="contacts" class="pt-5">
        <div class="container">
            <h1 class="text-center py-5">
                CONTATTI
            </h1>
            <div class="row justify-content-center align-items-center gap-3 flex-nowrap px-3">
                <div class="col-6 p-0">
                    <div class="card bg-warning text-center border-0">
                        <div class="card-body">
                            <h4 class="card-title py-3">TORINO</h4>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
                                facilis recusandae exercitationem saepe maiores facere a nisi id veniam amet, laboriosam
                                minima fuga voluptate, doloribus libero assumenda perspiciatis nesciunt. Veniam?</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 p-0">
                    <div class="card bg-danger text-center border-0">
                        <div class="card-body">
                            <h4 class="card-title py-3">TORINO</h4>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
                                facilis recusandae exercitationem saepe maiores facere a nisi id veniam amet, laboriosam
                                minima fuga voluptate, doloribus libero assumenda perspiciatis nesciunt. Veniam?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <a href="#header" class="btn_up btn">
        <div class="next_session_img">
            <!-- <font-awesome-icon icon="circle-chevron-up" /> -->
            <img src="https://picsum.photos/50" alt="">
        </div>
    </a>
</template>

<style scoped>
#call_to_action,
#mission,
#about_us,
#services,
#contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: relative;

    .mine_title {
        color: #333;
        text-align: center;
        margin-bottom: -15%;
        white-space: nowrap;
        font-size: 3em;
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

    .mine_w {
        width: 85%;
    }

    .next_session_banner {

        svg {
            height: 35px;
        }
    }

    .about_us_card {
        position: absolute;
        bottom: 12%;
        padding-top: 7em;
        padding-bottom: 2em;
        border-radius: 20px;
        position: relative;
        z-index: -1;
    }
}

.btn_up {
    position: fixed;
    bottom: 25%;
    left: 68%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.next_session_img {

    img {
        height: 70px;
        width: 50px;
        border-radius: 40%;
    }
}

.mine_banner {
    position: absolute;
    bottom: 30%;
    height: 400px;
    z-index: -1;

    img {
        border-radius: 0 !important;
    }
}

#call_to_action {

    .btn_next {
        position: absolute;
        bottom: 14%;
        height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mine_runner {
        position: absolute;
        bottom: -30%;
        left: 15%;
        overflow: hidden;

        img {
            width: 700px;
            overflow: hidden;
        }
    }
}

#services {
    margin-top: -20%;
    z-index: 2;
    background-color: var(--secondary-color);

    .mine_btn_brown {
        background-color: var(--strong-color);
        color: var(--light-color);
        border-radius: 3em;
        padding: 0.2em 1em;
        margin: 0.5em 0;
        font-weight: bold;
    }

    .mine_btn_red {
        background-color: var(--warning-color);
        color: var(--light-color);
        border-radius: 3em;
        padding: 0.6em 3em;
        font-weight: bold;
    }

}

#about_us {
    background-color: var(--secondary-color);
    z-index: -1;

    .btn_next {
        position: absolute;
        bottom: 14%;
        height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

#mission {
    background-color: var(--secondary-color);
}

#contacts {}
</style>