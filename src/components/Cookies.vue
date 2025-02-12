<script>
export default {
    data() {
        return {
            consentGiven: false
        };
    },
    methods: {
        acceptCookies() {
            this.consentGiven = true;
            localStorage.setItem('cookieConsent', 'accepted');
            /* Qui sotto in caso gestione fututi cookie */
            /* document.cookie = "cookieName=cookieValue; max-age=3600; path=/"; */
        },
        declineCookies() {
            this.consentGiven = true;
            localStorage.setItem('cookieConsent', 'declined');
        }
    },
    mounted() {
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
            this.consentGiven = true;
        }
    }
};
</script>

<template>
    <div v-if="!consentGiven" class="cookie-consent-banner">
        <!-- Qui sotto messaggio preimpostato per quando inserirò cookie -->
        <!-- <p>Questo sito utilizza cookie per migliorare l'esperienza dell'utente. Accetti i cookie?</p> -->
        <p>Questo sito attualmente non utilizza cookie di alcun tipo. Tuttavia, per garantire la massima trasparenza e
            conformità con le normative vigenti (come il GDPR per l'UE), ti informiamo che potremmo introdurre cookie in
            futuro. In tal caso, ti verrà richiesto di esprimere nuovamente il tuo consenso. Grazie per la tua
            comprensione.</p>
        <button class="btn border shadow" @click="acceptCookies">Accetta</button>
        <button class="btn border shadow" @click="declineCookies">Rifiuta</button>
    </div>
</template>

<style scoped>
.cookie-consent-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--secondary-color);
    padding: 10px;
    text-align: center;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

button {
    margin: 0 5px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: var(--strong-color);
    color: var(--light-color);
}
</style>