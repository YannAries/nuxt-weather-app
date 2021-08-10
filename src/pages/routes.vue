<template>
    <div class="routes">
        <h1>{{ $t('app.routes') }}</h1>

        <template v-for="item in items">
            <!-- VueJs routing style -->
            <router-link :key="item.name" :to="item.path">
                {{ item.name }}
            </router-link>
        </template>
    </div>
</template>

<script>
export default {
    nuxtI18n: {
        paths: {
            en: '/routes', // -> accessible at /en/routes
            fr: '/chemins', // -> accessible at /chemins
        },
    },

    data() {
        return {
            items: [],
        };
    },
    created() {
        this.$router.options.routes.forEach((route) => {
            if (route.path === this.$nuxt.$route.path) return;
            this.items.push({
                name: route.name,
                path: route.path,
            });
        });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.routes {
    margin-top: 60px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    a {
        display: block;
        color: #42b983;
    }
}
</style>
