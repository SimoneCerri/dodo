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
    <div class="container py-5">
        <div class="row text-center">
            <div class="col-4">
                <ul class="list-group rounded-0">
                    <li class="list-group-item border-0">
                        Team :
                    </li>
                    <li class="list-group-item border-0">
                        <a class="text-decoration-none" href="https://www.instagram.com/wolly_makeup.art.magic/"
                            target="_blank" rel="noopener noreferrer">
                            Project Manager
                        </a>
                    </li>
                    <li class="list-group-item border-0">
                        <a class="text-decoration-none" href="https://www.behance.net/peach_design" target="_blank"
                            rel="noopener noreferrer">
                            Designer
                        </a>
                    </li>
                    <li class="list-group-item border-0">
                        <a class="text-decoration-none" href="https://github.com/SimoneCerri" target="_blank"
                            rel="noopener noreferrer">
                            Developer
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-4">
                <ul class="list-group rounded-0">
                    <li class="list-group-item border-0">
                        Legal :
                    </li>
                    <li class="list-group-item border-0">
                        <a class="text-decoration-none" href="" target="_blank" rel="noopener noreferrer">
                            Privacy Policy
                        </a>
                    </li>
                    <li class="list-group-item border-0">
                        <a class="text-decoration-none" href="" target="_blank" rel="noopener noreferrer">
                            Cookies
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
                        <a class="text-decoration-none" href="https://www.facebook.com/share/18qC7VoJXt/"
                            target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    </li>
                    <li class="list-group-item border-0">
                        <a class="text-decoration-none"
                            href="https://www.instagram.com/dodoconsulente?igsh=MXB0MGpub3A0NHZnbg==" target="_blank"
                            rel="noopener noreferrer">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
*,
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