<script>

export default {
    name: 'Footer',
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
    <section id="footer">
        <div class="container py-5">
            <div class="row text-center">
                <div class="col-4">
                    <ul class="list-group rounded-0">
                        <li class="list-group-item border-0">
                            Legal :
                        </li>
                        <li class="list-group-item border-0">
                            <a class="text-decoration-none" href="" aria-label="Link all'informativa sulla privacy"
                                target="_blank" rel="noopener noreferrer">
                                Privacy Policy
                            </a>
                        </li>
                        <li class="list-group-item border-0">
                            <a class="text-decoration-none" href="" aria-label="Link all'informativa sui cookies"
                                target="_blank" rel="noopener noreferrer">
                                Cookies
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-4">
                    <ul class="list-group rounded-0">
                        <li class="list-group-item border-0">
                            Team :
                        </li>
                        <li class="list-group-item border-0">
                            <a class="text-decoration-none" aria-label="Link alla project manager del sito"
                                href="https://www.instagram.com/wolly_makeup.art.magic/" target="_blank"
                                rel="noopener noreferrer">
                                PM - Wolly
                            </a>
                        </li>
                        <li class="list-group-item border-0">
                            <a class="text-decoration-none" aria-label="Link alla designer del sito"
                                href="https://www.behance.net/peach_design" target="_blank" rel="noopener noreferrer">
                                Design - Peach
                            </a>
                        </li>
                        <li class="list-group-item border-0">
                            <a class="text-decoration-none" aria-label="Link al developer/sviluppatore del sito"
                                href="https://github.com/SimoneCerri" target="_blank" rel="noopener noreferrer">
                                Dev - ScorpioN
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-4">
                    <ul class="list-group rounded-0">
                        <li class="list-group-item border-0">
                            Social :
                        </li>
                        <li class="list-group-item border-0">
                            <a class="text-decoration-none" aria-label="Link alla pagina Facebook di Dodo"
                                href="https://www.facebook.com/share/18qC7VoJXt/" target="_blank"
                                rel="noopener noreferrer">
                                Facebook
                            </a>
                        </li>
                        <li class="list-group-item border-0">
                            <a class="text-decoration-none" aria-label="Link alla pagina Instagram di Dodo"
                                href="https://www.instagram.com/dodoconsulente?igsh=MXB0MGpub3A0NHZnbg=="
                                target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="row text-center">
                <div class="col-12">
                    Made by ScorpioN
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#footer,
.list-group-item {
    background-color: var(--strong-color);
}

.list-group {
    .list-group-item:nth-child(1) {
        color: var(--tertiary-color);
        font-weight: bold;
        font-size: 1.2em;
    }
}

a {
    color: var(--primary-color);
}
</style>