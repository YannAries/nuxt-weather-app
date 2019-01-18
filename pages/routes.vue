<template>
    <div class="routes">
        <template v-for="item in items">
            <router-link
                :key="item.name"
                :to="item.path"
            >
                {{ item.name }}
            </router-link>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Routes',
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
.routes{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    a {
        display: block;
        color: #42b983;
    }
}
</style>
