<template>
    <div class="hello">
        <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            class="button lang primary"
        >
            {{ locale.name }}
        </nuxt-link>

        <vue-logo />
        <h1>{{ msg }}</h1>

        <h2>{{ $t('home.essential-link') }}</h2>
        <ul>
            <li>
                <a href="https://vuejs.org" target="_blank">Core Docs</a>
            </li>
            <li>
                <a href="https://forum.vuejs.org" target="_blank">Forum</a>
            </li>
            <li>
                <a href="https://chat.vuejs.org" target="_blank">{{ $t('home.ecosystem') }}</a>
            </li>
            <li>
                <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
            </li>
            <br />
            <li>
                <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
            </li>
        </ul>

        <h2>{{ $t('home.ecosystem') }}</h2>
        <ul>
            <li>
                <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
            </li>
            <li>
                <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
            </li>
            <li>
                <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
            </li>
        </ul>

        <!-- router-link Nuxt style with (translation -> localPath) -->
        <!-- Check: https://nuxt-community.github.io/nuxt-i18n/basic-usage.html#nuxt-link -->
        <nuxt-link :to="localePath('routes')" class="button primary">{{ $t('menu.routes') }}</nuxt-link>
    </div>
</template>

<script>
import VueLogo from '@/components/VueLogo';

export default {
    components: {
        VueLogo,
    },
    data() {
        return {
            msg: this.$t('home.welcome'),
        };
    },
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
    margin-top: 60px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
h1,
h2 {
    font-weight: 400;
}
ul {
    padding: 0;
    list-style-type: none;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.button {
    display: block;
    max-width: 150px;
    margin: 30px auto;
    color: white;
    background-color: #42b983;
}
.lang {
    position: fixed;
    top: 0px;
    right: 30px;
}
</style>
