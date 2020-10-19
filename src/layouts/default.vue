<template>
    <div class="layout">
        <Header />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"

export default {
    components: {
        Header,
        Footer,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only & Pages-->
<style lang="scss">
.layout {
    // Add layout style
}
</style>