<template>
    <div id="app">
        <main>
            <default-weather :weather-data="data" @get-weather="getWeather" />
            <aside>
                <weather-details :weather-data="data" />
            </aside>
        </main>
    </div>
</template>

<script>
import DefaultWeather from '@/components/DefaultWeather';
import WeatherDetails from '@/components/WeatherDetails';

export default {
    components: {
        DefaultWeather,
        WeatherDetails,
    },
    async asyncData({ $axios }) {
        const data = await $axios.$get(
            `https://api.openweathermap.org/data/2.5/weather?q=Quebec,CA&APPID=13e98cc8aba1bfd9310dfab158b20f62&units=metric`,
        );
        return { data };
    },
    data() {
        return {};
    },
    methods: {
        async getWeather(city) {
            const response = await this.$axios.$get(
                // `https://api.openweathermap.org/data/2.5/weather?q=${city},CA&APPID=13e98cc8aba1bfd9310dfab158b20f62&units=metric`,
                `https://api.openweathermap.org/data/2.5/weather?q=${city},CA&APPID=13e98cc8aba1bfd9310dfab158b20f62&units=metric`,
            );
            this.data = response;
        },
    },
};
</script>

<style lang="scss" scoped>
// TODO: remplacer avec foundation

* {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Raleway, sans-serif;
}

main {
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    overflow: auto;
}

@media (min-width: 768px) {
    main {
        grid-template-columns: 31% 69%;
        min-height: 100vh;
        overflow: hidden;
    }
}

aside {
    background: #100e1d;
    height: 100%;
    z-index: 10;
}
</style>
