<template>
    <div class="layout">
        <app-header />
        <nuxt />
        <app-footer />
    </div>
</template>

<script>
import AppHeader from "~/components/AppHeader"
import AppFooter from "~/components/AppFooter"

export default {
    components: {
        AppHeader,
        AppFooter,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only & Pages-->
<style lang="scss">
.layout {
    // Add layout style
}
</style>