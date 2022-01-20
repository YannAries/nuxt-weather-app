<template>
    <div class="layout">
        <div v-if="$nuxt.isOffline">You are offline</div>
        <nuxt />
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only & Pages-->
<style lang="scss">
// .layout {
// }
</style>
