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
            imageLoaded: false,
            showBackToTop: false,
            currentPerson: 0,
            people: [
                {
                    name: 'NICOLETTA', description: "Ciao, sono Nicoletta e opero come professionista nella vendita diretta da oltre vent'anni. Nel 2020 ho fondato Conte di Varano 3.Zero, un progetto dedicato al mondo dell'arredamento, delle piccole ristrutturazioni, dei complementi d'arredo e dei sistemi ri riposo. La mia missione è aiutarti a trasformare i tuoi spazi in ambienti confortevoli, funzionali e su misura per le tue esigenze.", image: 'nicoletta.webp'
                },
                {
                    name: 'MARIO', description: 'Ciao io sono Mario, dal 1979 opero nella vendita diretta , servendo oggi la terza generazione dei miei clienti. Dopo aver gestito due mobilifici, ho deciso di affiancarmi in questo progetto, mettendo la mia esperienza al servizio della nostra realtà. Oltre ad essere un arredatore, sono un’artista e realizzo opere anche su commissione che diventano complementi d’arredo unici ed inimitabili.', image: 'mario_b&w.webp'
                },
                {
                    name: 'DODO', description: 'Ciao io sono Dodo, la mascotte ed il vostro consulente personale, nato per accompagnarti in una scelta libera e consapevole, in quanto ti fornirò tutti gli elementi necessari a fare la scelta più indicata per le tue esigenze e per quelle di tutta la famiglia. Grazie a solide collaborazioni e partnership costruite negli anni, non ci limitiamo a offrire solo ciò che trovi nella nostra azienda, ma possiamo proporti anche le migliori soluzioni dei nostri partner commerciali.', image: 'about_us_dodo.webp'
                },
            ],
            isHoveredBrindisi: false,
            isHoveredTorino: false,
            iconDefaultTorino: "icon_torino.webp",
            iconHoverTorino: "icon_torino_hover.webp",
            iconDefaultBrindisi: "icon_brindisi.webp",
            iconHoverBrindisi: "icon_brindisi.webp",
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
        isInactive(index) {
            return (
                index === (this.currentPerson - 1 + this.people.length) % this.people.length ||
                index === (this.currentPerson + 1) % this.people.length
            );
        },
        isLeft(index) {
            return (index === (this.currentPerson - 1 + this.people.length) % this.people.length);
        },
        isRight(index) {
            return (index === (this.currentPerson + 1) % this.people.length);
        },
        setSlide() {
            setTimeout(() => {
                this.imageLoaded = true;
            }, 100);
        },
    },
    async mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    async destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
}
</script>

<template>
    <section id="call_to_action" class="pt-5">
        <div class="row flex-column align-items-center justify-content-start h-100 mb-5">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <div class="col-8 d-flex justify-content-center mine_banner_text">
                    <h1 class="mine_title">
                        È TUTTO PIÙ
                        <br>
                        FACILE CON
                    </h1>
                </div>
                <div class="col-8 d-flex justify-content-center mine_banner_text_dodo">
                    <span class="text-center mine_font">
                        DODO
                    </span>
                </div>
                <div class="col-8 d-flex justify-content-center w-100 mine_banner">
                    <img srcset="
                    /banner_brown_max.webp 3840w,
                    /banner_brown_desktop.webp 1920w,
                    /banner_brown_tablet.webp 1280w,
                    /banner_brown_mobile.webp 960w,
                    /banner_brown_mini.webp 640w
                    " sizes="(max-width: 640px) 100vw,
                    (max-width: 960px) 100vw,
                    (max-width: 1280px) 100vw,
                    (max-width: 1920px) 100vw,
                    1920px" loading="eager"
                        alt="Immagine di background della sezione call_to_action raffigurante una planimetria di una casa"
                        width="1920" height="1280" class="img-fluid"
                        style="width: 100%; height: auto; max-width: 100%; aspect-ratio: 1920/1280; object-fit: cover;"
                        fetchpriority="high" decoding="async">
                </div>
            </div>
            <div class="col-12 mine_runner">
                <!-- <img src="/dodo_corre.webp" alt=""> -->
                <img src="/dodo_corre.webp" alt="La mascotte del sito, Dodo, che sta correndo in soccorso del cliente"
                    :class="{ 'mine-runner-animation': true, 'active': imageLoaded }" @load="setSlide" />
            </div>
        </div>
        <a href="#services" aria-label="Bottone per andare alla sezione successiva"
            class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
            <div class="next_session_banner">
                <font-awesome-icon icon="circle-chevron-down" />
            </div>
        </a>
    </section>
    <section id="services" class="pt-5 mine_bg_secondary">
        <div
            class="row mine_bg_tertiary rounded-5 flex-column align-items-center justify-content-evenly h-100 mb-5 mine_w text-center gap-3 p-5">

            <div id="services_title" class="col d-flex justify-content-center align-items-center">
                <h1>
                    I NOSTRI
                    <br class="d-md-none">
                    SERVIZI
                </h1>
            </div>
            <div class="col">
                DODO offre <strong>soluzioni create su misura da un team di professionisti</strong> per accompagnare,
                informando, il
                cliente in un <strong>percorso di scelta libera.</strong>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
                <strong>Ecco alcuni dei nostri servizi:</strong>
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
                <a href="#contacts" class="text-decoration-none">
                    <div class="mine_btn_red">
                        CONTATTACI
                    </div>
                </a>
            </div>
        </div>
        <a href="#about_us" aria-label="Bottone per andare alla sezione successiva"
            class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
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
            <button @click="prevPerson" aria-label="Freccia verso sinistra per mostrare la persona precedente"
                class="nav-arrow left-arrow"><font-awesome-icon icon="chevron-left" /></button>

            <div class="carousel-container">
                <div v-for="(person, index) in people" :key="index"
                    :class="['carousel-item', { active: currentPerson === index }]">
                    <div v-if="currentPerson === index" class="person-card">
                        <div class="person-image" :style="{ backgroundImage: `url(${person.image})` }"></div>
                        <div class="person-info">
                            <h3>{{ person.name }}</h3>
                            <p v-html="person.description"></p>
                        </div>
                    </div>
                </div>

                <div v-for="(person, index) in people" :key="'inactive-' + index" v-show="isInactive(index)"
                    :class="['inactive-image', { 'left': isLeft(index), 'right': isRight(index) }]"
                    :style="{ backgroundImage: `url(${person.image})` }">
                </div>
            </div>

            <button @click="nextPerson" aria-label="Freccia verso destra per mostrare la persona successiva"
                class="nav-arrow right-arrow"><font-awesome-icon icon="chevron-right" /></button>
        </div>
        <a href="#mission" aria-label="Bottone per andare alla sezione successiva"
            class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
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
                        <br class="d-md-none">
                        MISSION
                    </h1>
                </div>
            </div>
            <div class="col-10 d-flex flex-column justify-content-center align-items-center">
                <div class="text-center">
                    L'obbiettivo è <strong>avere un DODO in ogni famiglia</strong> che accompagna e guida verso la
                    migliore soluzione
                    <strong>tailor made</strong> sul mercato. Permette quindi alla famiglia di avere <strong>più tempo
                        per se,
                        meno
                        pensieri e
                        risultati garantiti.</strong>
                </div>
            </div>
            <div class="col-10 d-flex flex-column justify-content-center align-items-center">
                <div class="text-center">
                    La consulenza di DODO si propone di avere come punto focale un consulente <strong>formato per
                        ascoltare ed
                        empatizzare,</strong> al fine di comprendere chiaramente le esigenze dell'interlocutore e
                    offrirgli il
                    miglior <strong>servizio personalizzato possibile,</strong> tenendo conto esclusivamente
                    delle sue
                    necessità.
                </div>
            </div>
        </div>
        <div class="row text-center flex-column align-items-center justify-content-start h-100 mine_w pt-4">
            <div class="col-12 d-flex flex-column justify-content-start align-items-center mine_mission_img">
                <img src="/carpet.webp"
                    alt="Immagine in fondo alla sezione mission, raffigurante un carpet con alcuni fogli colorati sopra"
                    loading="lazy">
                <img src="/dodo_in_piedi.webp"
                    alt="Ecco ancora tornare la mascotte Dodo, questa volta in piedi, sorridendo al cliente"
                    class="overlay-img" loading="lazy">
            </div>
        </div>
        <a href="#contacts" aria-label="Bottone per andare alla sezione successiva"
            class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
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
                <div class="col-11 col-xl-6 d-flex justify-content-center align-items-center mine_bg_tertiary p-3 rounded-5"
                    @mouseover="isHoveredTorino = true" @mouseleave="isHoveredTorino = false">
                    <div class="row" style="color: var(--strong-color);">
                        <div class="col-5 d-flex justify-content-center align-items-center">
                            <img :src="isHoveredTorino ? iconHoverTorino : iconDefaultTorino"
                                alt="Icona raffigurante la famosa Mole di Torino" class="city_icon" loading="lazy">
                        </div>
                        <div class="col-7 p-0">
                            <div class="row flex-column h-100 justify-content-center">
                                <div class="col-6 fw-bold">
                                    <h2>
                                        TORINO
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <div class="row flex-column gap-1 text-nowrap">
                                        <div class="col-4 col-md-12">
                                            Strada del Balzetto 1
                                        </div>
                                        <div class="col-4 col-md-12">
                                            (+39) 3891059799
                                        </div>
                                        <div class="col-4 col-md-12">
                                            info@contedivarano3z.it
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-11 col-xl-6 d-flex justify-content-center align-items-center mine_bg_warning p-3 rounded-5"
                    @mouseover="isHoveredBrindisi = true" @mouseleave="isHoveredBrindisi = false">
                    <div class="row" style="color: var(--light-color);">
                        <div class="col-5 d-flex justify-content-center align-items-center">
                            <img :src="isHoveredBrindisi ? iconHoverBrindisi : iconDefaultBrindisi"
                                alt="Icona raffigurante il famoso monumento al marinaio di Brindisi"
                                class="city_icon brindisi" loading="lazy">
                        </div>
                        <div class="col-7 col_brindisi p-0">
                            <div class="row flex-column flex-column h-100 justify-content-center">
                                <div class="col-6 fw-bold">
                                    <h2>
                                        BRINDISI
                                    </h2>
                                </div>
                                <div class="col-6">
                                    <div class="row flex-column gap-1 text-nowrap">
                                        <div class="col-4 col-md-12">
                                            Via del lavoro 21
                                        </div>
                                        <div class="col-4 col-md-12">
                                            (+39) 3804993244
                                        </div>
                                        <div class="col-4 col-md-12">
                                            info@contedivarano3z.it
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
                    <div class="col-4 col-md-6 me-5">
                        <img src="/door2door_marrone.webp"
                            alt="Logo del sito, con il collare di Dodo e la sua cravattina con in aggiunta la scritta DODO , door to door, esperto dell'abitare"
                            loading="lazy">
                    </div>
                    <div class="col-4 col-md-6">
                        <div class="row flex-column">
                            <div class="col-4 col-lg-12 fw-bold fs-3" style="color: var(--strong-color);">
                                SEGUICI!
                            </div>
                            <div class="col-4 col-lg-12 ms-2 qui">
                                <div class="row flex-nowrap qui">
                                    <div class="col-12 col-lg-3 p-0">
                                        <a href="https://www.facebook.com/share/18qC7VoJXt/"
                                            aria-label="Link alla pagina Facebook di Dodo" target="_blank"
                                            rel="noopener noreferrer"
                                            class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
                                            <div class="social_icon">
                                                <font-awesome-icon :icon="['fab', 'facebook']"
                                                    style="font-size: 2em; color: var(--strong-color);" />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-12 col-lg-3 p-0">
                                        <a href="https://www.instagram.com/dodoconsulente?igsh=MXB0MGpub3A0NHZnbg=="
                                            aria-label="Link alla pagina Instagram di Dodo" target="_blank"
                                            rel="noopener noreferrer"
                                            class="btn_next btn btn-white rounded-top-4 rounded-bottom-0 w-100">
                                            <div class="social_icon">
                                                <font-awesome-icon :icon="['fab', 'instagram']"
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
    <a href="#" aria-label="Bottone per tornare in alto nella pagina, alla prima sezione" class="btn_up btn"
        v-show="showBackToTop" @click="scrollToTop">
        <div class="back_to_top">
            <font-awesome-icon icon="circle-chevron-up" />
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

    h1 {
        font-weight: bold;
        font-size: 3em;
    }

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

    .next_session_banner:hover {
        color: var(--strong-color);
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
        bottom: 15.5%;
        height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--warning-color);
    }

    .mine_runner {
        position: absolute;
        bottom: -30%;
        left: 15%;
        overflow: hidden;
        max-width: 100%;
        clip-path: inset(0 59px 0 0);

        img {
            width: 700px;
        }
    }

    .mine_banner_text_dodo {
        span {
            font-weight: 800;
            font-size: 6.2em;
        }
    }

    .mine_font {
        /* font-family: 'Rock Salt', cursive !important; */
        /* font-family: 'Patrick Hand', cursive !important; */
        /* font-family: 'Gloria Hallelujah', cursive !important; */
        font-family: 'Nunito', sans-serif !important;
        font-weight: 800;
        font-size: 6.5em;
    }
}

#services {
    margin-top: -20%;
    z-index: 2;
    background-color: var(--secondary-color);

    h1 {
        font-weight: 800 !important;
    }

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

    .mine_btn_red:hover {
        background-color: var(--strong-color);
    }

    .btn_next {
        position: absolute;
        bottom: -1%;
        height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--warning-color);
    }

}

#about_us {
    background-color: var(--secondary-color);

    h1 {
        font-weight: 800 !important;
    }

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

    .btn_next {
        position: absolute;
        bottom: -1%;
        height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--warning-color);
    }

    .carousel {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 680px;
        max-width: 800px;
        margin: 0 auto;
        overflow: hidden;
        color: var(--light-color);
    }

    .carousel-container {
        margin-top: 2.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.5s ease-in-out;
    }

    .carousel-item {
        opacity: 0.5;
        transform: scale(0.8);
        transition: opacity 0.5s, transform 0.5s;
        width: 70%;
        text-align: center;
        margin: 0;
    }

    .carousel-item.active {
        opacity: 1;
        transform: scale(1);
    }

    .person-card {
        background: var(--warning-color);
        border-radius: 3em;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding-left: 2em;
        padding-right: 2em;
        padding-top: 3em;
        position: relative;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 600px;
    }

    .person-image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        position: absolute;
        top: -60px;
        left: 50%;
        transform: translateX(-50%);
        border: 7px solid white;
        /* 10px mediaquery */
        z-index: 1000;
        transition: all 0.5s ease;
    }

    .inactive-image {
        position: absolute;
        top: 30%;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        /* filter: blur(3px) grayscale(50%); */
        transition: all 0.5s ease;
        z-index: 900;
    }

    .inactive-image.left {
        left: 14%;
        top: 0%;
        transform: translateX(-52%);
    }

    .inactive-image.right {
        right: 14%;
        top: 0%;
        transform: translateX(50%);
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
        color: var(--strong-color) !important;
    }

    .left-arrow,
    .right-arrow {
        background: none !important;
        padding: 0 !important;
        width: 10px !important;
        position: absolute;
        top: 12%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .left-arrow {
        left: 26%;
        z-index: 1100;
    }

    .right-arrow {
        right: 28%;
        z-index: 1100;
    }
}

#mission {
    background-color: var(--secondary-color);
    margin-bottom: 4em;

    h1 {
        font-weight: 800 !important;
    }

    .btn_next {
        position: absolute;
        bottom: -3%;
        height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--warning-color);
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
        position: absolute;
        bottom: -1%;
    }
}

#contacts {

    h1 {
        font-weight: 800 !important;
    }

    .col-11 {
        height: 180px;
    }

    .col-11:nth-child(1):hover {
        background-color: var(--strong-color) !important;

        .row {
            color: white !important;
        }

        h2,
        div {
            color: white !important;
        }
    }

    .col-11:nth-child(2):hover {
        background-color: var(--strong-color) !important;
        color: white !important;

        .row {
            color: white !important;
        }

        h2,
        div {
            color: white !important;
        }
    }

    .mine_h {
        height: 100vh;
    }

    .city_icon {
        padding: 1.2em;
        border-radius: 0;
        width: 90%;
    }

    .brindisi {
        padding: 0;
        padding: 1em;
    }

    h2 {
        font-weight: 700;
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
    color: var(--strong-color);
    font-size: 2.5em;
}

.btn_up {
    position: fixed;
    bottom: 20%;
    right: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.btn_next {
    color: var(--warning-color) !important;
}

.mine_bg_tertiary {
    background: var(--tertiary-color);
}

.mine_bg_warning {
    background: var(--warning-color);
}

.mine-runner-animation {
    transform: translateX(100vw);
    transition: transform 1s ease-out;
}

.mine-runner-animation.active {
    transform: translateX(0);
}
</style>