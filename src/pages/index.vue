<template>
    <div id="app" class="margin-0 padding-0">
        <main>
            <default-weather :weather-data="data" @get-weather="getWeather" />
            <aside>
                <weather-details :weather-data="forecast" />
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

    async asyncData({ $axios, $config }) {
        const apiKey = $config.nuxtAppWeatherApiKey;
        // console.log(apiKey, 'apiKey');
        // TODO: Renommer data
        const data = await $axios.$get(
            `https://api.openweathermap.org/data/2.5/weather?q=Quebec&APPID=${apiKey}&units=metric`,
        );
        const forecast = await $axios.$get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,alerts,minutely&appid=${apiKey}&units=metric`,
        );
        return { data, forecast };
    },

    data() {
        return {};
    },

    methods: {
        async getWeather(city) {
            const apiKey = this.$config.nuxtAppWeatherApiKey;
            const response = await this.$axios.$get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`,
            );
            this.data = response;
        },
    },
};
</script>

<style lang="scss" scoped>
#app {
    font-family: $body-font-family;
}

main {
    // @include display-grid;
    height: $global-auto;
    align-items: $global-center;
    overflow: $global-auto;
}

aside {
    background: $color-vulcan;
    height: $container-100;
    z-index: 10;
}

@media (min-width: 768px) {
    main {
        display: grid;
        grid-template-columns: 31% 69%;
        min-height: 100vh;
        overflow: hidden;
    }
}
</style>
