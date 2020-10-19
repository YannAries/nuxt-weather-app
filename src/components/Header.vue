<template>
    <header class="header">
        <p>HEADER</p>
        <nav>
            <nuxt-link :to="localePath('index')">{{$t("menu.home")}}</nuxt-link>
        </nav>
    </header>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.header {
    // Add header style
}
</style>
