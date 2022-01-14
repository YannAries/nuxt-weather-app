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

const apiKey = process.env.NUXT_APP_WEATHER_API_KEY;

export default {
    components: {
        DefaultWeather,
        WeatherDetails,
    },
    async asyncData({ $axios }) {
        // TODO: Renommer data
        const data = await $axios.$get(
            `https://api.openweathermap.org/data/2.5/weather?q=Quebec,CA&APPID=${apiKey}&units=metric`,
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
            const response = await this.$axios.$get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city},CA&APPID=${apiKey}&units=metric`,
            );
            this.data = response;
        },
    },
};
</script>

<style lang="scss" scoped>
// TODO: remplacer avec foundation

#app {
    font-family: $body-font-family;
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
        $prototype-overflow: (hidden);
    }
}

aside {
    background: $color-blue-magenta;
    height: 100%;
    z-index: 10;
}
</style>
