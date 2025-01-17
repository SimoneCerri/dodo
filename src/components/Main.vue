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
            showBackToTop: false,
            currentPerson: 0,
            people: [
                { name: 'Nicoletta', description: 'Responsabile Torino', image: 'smile.jpg' },
                { name: 'Bob', description: 'Responsabile Brindisi', image: 'smile.jpg' },
                { name: 'Dodo', description: 'Ciao a tutti! Sono DODO, un cane vivace e giocoso. <br> Mi piace molto aiutare le persone a trovare la casa dei loro sogni. Sono un esperto nel trovare le case perfette per ogni tipo di famiglia, dal single al nucleo famigliare più numeroso.', image: 'smile.jpg' },
            ],
        }
    },
    methods: {
        handleClick(event) {
            console.log("Button clicked!");
        },
        handleScroll() {
            if (window.scrollY > 100) {
                this.showBackToTop = true;
            } else {
                this.showBackToTop = false;
            }
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        nextPerson() {
            this.currentPerson = (this.currentPerson + 1) % this.people.length;
        },
        prevPerson() {
            this.currentPerson = (this.currentPerson - 1 + this.people.length) % this.people.length;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
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
            class="row mine_bg_tertiary rounded-5 flex-column align-items-center justify-content-evenly h-100 mb-5 mine_w text-center px-5">

            <div id="services_title" class="col d-flex justify-content-center align-items-center">
                <h1>
                    I NOSTRI
                    <br>
                    SERVIZI
                </h1>
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
        <h1>
            CHI SIAMO
        </h1>
        <div id="about-us-carousel" class="carousel">
            <button @click="prevPerson" class="nav-arrow left-arrow">❮</button>

            <div class="carousel-container">
                <div v-for="(person, index) in people" :key="index"
                    :class="['carousel-item', { active: currentPerson === index, prev: currentPerson === (index - 1 + people.length) % people.length, next: currentPerson === (index + 1) % people.length }]">

                    <div class="person-card">
                        <div class="person-image" :style="{ backgroundImage: `url(${person.image})` }"></div>
                        <div class="person-info">
                            <h3>{{ person.name }}</h3>
                            <p>{{ person.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <button @click="nextPerson" class="nav-arrow right-arrow">❯</button>
        </div>
        <a href="#mission" class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
            <div class="next_session_banner">
                <font-awesome-icon icon="circle-chevron-down" />
            </div>
        </a>
    </section>
    <section id="mission" class="pt-5" style="color: var(--strong-color);">
        <div class="row text-center flex-column align-items-center justify-content-start h-100 mine_w gap-3">
            <div class="col-10 d-flex flex-column justify-content-center align-items-center">
                <div class="col-8 d-flex justify-content-center text-nowrap">
                    <h1>
                        LA NOSTRA
                        <br>
                        MISSION
                    </h1>
                </div>
            </div>
            <div class="col-10 d-flex flex-column justify-content-center align-items-center">
                <div class="text-center">
                    L'obbiettivo è avere un DODO in ogni famiglia che accompagna e guida verso la migliore soluzione
                    tailor made sul mercato. Permette quindi alla famiglia di avere più tempo per se, meno pensieri e
                    risultati garantiti.
                </div>
            </div>
            <div class="col-10 d-flex flex-column justify-content-center align-items-center">
                <div class="text-center">
                    La consulenza di DODO si propone di avere come punto focale un consulente formato per ascoltare ed
                    empatizzare, al fine di comprendere chiaramente le esigenze dell'interlocutore e offrirgli il
                    miglior servizio personalizzato possibile, tenendo conto esclusivamente delle sue necessità.
                </div>
            </div>
        </div>
        <div class="row text-center flex-column align-items-center justify-content-start h-100 mine_w pt-4">
            <div class="col-12 d-flex flex-column justify-content-start align-items-center mine_mission_img">
                <img src="..//assets/img/carpet.jpg" alt="">
                <img src="..//assets/img/dodo_in_piedi.png" alt="Overlay" class="overlay-img">
            </div>
        </div>
        <a href="#contacts" class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
            <div class="next_session_banner">
                <font-awesome-icon icon="circle-chevron-down" />
            </div>
        </a>
    </section>
    <section id="contacts" class="pt-5 mt-3">
        <div class="container mine_h">
            <h1 class="text-center" style="color: var(--strong-color);">
                CONTATTI
            </h1>
            <div class="row flex-column justify-content-start align-items-center gap-3 flex-nowrap px-3 h-100 pt-5">
                <div class="col-11 p-3 bg-warning rounded-5">
                    <div class="row" style="color: var(--strong-color);">
                        <div class="col-5 d-flex justify-content-center align-items-center">
                            <img src="../assets/img/icon_torino.png" alt="" class="city_icon">
                        </div>
                        <div class="col-7 p-0">
                            <div class="row flex-column gap-3">
                                <div class="col-6 fw-bold">
                                    <h2>
                                        TORINO
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <div class="row flex-column gap-1 text-nowrap">
                                        <div class="col-4">
                                            Via le dita dal naso 15
                                        </div>
                                        <div class="col-4">
                                            33323131241
                                        </div>
                                        <div class="col-4">
                                            dodo.torino@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-11 p-3 bg-success rounded-5">
                    <div class="row" style="color: var(--light-color);">
                        <div class="col-5 d-flex justify-content-center align-items-center">
                            <img src="../assets/img/icon_brindisi.png" alt="" class="city_icon brindisi">
                        </div>
                        <div class="col-7 p-0">
                            <div class="row flex-column gap-3">
                                <div class="col-6 fw-bold">
                                    <h2>
                                        BRINDISI
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <div class="row flex-column gap-1 text-nowrap">
                                        <div class="col-4">
                                            Via le dita dal naso 22
                                        </div>
                                        <div class="col-4">
                                            33323131241
                                        </div>
                                        <div class="col-4">
                                            dodo.brindisi@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section id="follow_us">
            <div class="container h-100 pt-5">
                <div class="row justify-content-evenly align-items-center gap-5">
                    <div class="col-4 me-5">
                        <img src="../assets/img/door2door_marrone.png" alt="">
                    </div>
                    <div class="col-4">
                        <div class="row flex-column">
                            <div class="col-4 fw-bold fs-3" style="color: var(--strong-color);">
                                SEGUICI!
                            </div>
                            <div class="col-4 ms-2">
                                <div class="row flex-nowrap">
                                    <div class="col-12 p-0">
                                        <a href="" class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
                                            <div class="social_icon">
                                                <!-- <font-awesome-icon icon="facebook" style="font-size: 2em; color: var(--strong-color);" /> -->
                                                <font-awesome-icon icon="circle-chevron-down"
                                                    style="font-size: 2em; color: var(--strong-color);" />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-12 p-0">
                                        <a href="" class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
                                            <div class="social_icon">
                                                <!-- <font-awesome-icon icon="instagram" style="font-size: 2em; color: var(--strong-color);" /> -->
                                                <font-awesome-icon icon="circle-chevron-down"
                                                    style="font-size: 2em; color: var(--strong-color);" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <a href="#" class="btn_up btn" v-show="showBackToTop" @click="scrollToTop">
        <div class="back_to_top">
            <img src="/src/assets/img/logo_marrone.png" alt="">
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
    color: var(--strong-color);

    .mine_title {
        text-align: center;
        margin-bottom: -15%;
        white-space: nowrap;
        font-size: 3em;
    }

    span {
        font-size: 85px;
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
        text-wrap: nowrap;
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

    img {
        z-index: 20;
    }

    .about_us_card {
        z-index: 10;
    }

    .btn_next {
        z-index: 10;
        position: relative;
    }

    a {
        pointer-events: auto !important;
    }
}

#mission {
    background-color: var(--secondary-color);

    .btn_next {
        position: absolute;
        bottom: -3%;
        height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mine_mission_img {
        position: relative;

        img {
            height: 50%;
            object-fit: cover;
            object-position: bottom;
        }

        .overlay-img {
            position: absolute;
            bottom: 25%;
            right: 30%;
            width: 300px;
            height: auto;
            z-index: 1;
        }
    }

    .btn_next {
        z-index: 10;
    }
}

#contacts {

    .col-11 {
        height: 180px;
    }

    .mine_h {
        height: 100vh;
    }

    .city_icon {
        padding: 0.8em;
        border-radius: 0;
        width: 90%;
    }

    .brindisi {
        width: 120%;
        height: 80%;
    }
}

#follow_us {
    background-color: var(--tertiary-color);
    height: 12em;
    /* margin-top: -12em; */

    img {
        width: 200px;
    }

}

.back_to_top {

    img {
        height: 60px;
        width: 60px;
        border-radius: 40%;
        opacity: 75%;
    }
}

.btn_up {
    position: fixed;
    bottom: 20%;
    right: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.btn_next {
    color: var(--warning-color);
}

.mine_bg_tertiary {
    background: var(--tertiary-color);
}

/* css carosello prov */
.carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 600px;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
    color: var(--light-color);
    /* border: 1px solid red; */
}

.carousel-container {
    margin-top: 8em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    /* border: 1px solid blue; */
}

.carousel-item {
    opacity: 0.5;
    transform: scale(0.8);
    transition: opacity 0.5s, transform 0.5s;
    width: 70%;
    text-align: center;
    margin: 0;
    /* border: 1px dashed green; */
}

.carousel-item.active {
    opacity: 1;
    transform: scale(1);
}

.person-card {
    background: var(--warning-color);
    border-radius: 3em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    padding-top: 3em;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
}

.person-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: -78px;
    /* left: calc(50% - 40px); */
    left: 50%;
    transform: translateX(-50%);
    border: 3px solid white;
    z-index: 1000;
}

.person-info h3 {
    margin: 40px 0 10px;
    font-size: 1.2em;
}

.nav-arrow {
    background: none;
    border: none;
    font-size: 1.7em;
    cursor: pointer;
    color: var(--tertiary-color) !important;
}

.left-arrow,
.right-arrow {
    background: none !important;
    padding: 0 !important;
    width: 10px !important;
    position: absolute;
    top: 22%;
    transform: translateY(-50%);
    cursor: pointer;
}

.left-arrow {
    left: 15%;
    z-index: 1100;
}

.right-arrow {
    right: 15%;
    z-index: 1100;
}
</style>