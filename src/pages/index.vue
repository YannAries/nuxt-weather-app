<template>
    <div id="app">
        <main>
            <default-weather />
            <hidden-search />
            <aside>
                <weather-details />
            </aside>
        </main>
    </div>
</template>

<script>
import DefaultWeather from '@/components/DefaultWeather';
import HiddenSearch from '@/components/HiddenSearch';
import WeatherDetails from '@/components/WeatherDetails';

export default {
    components: {
        DefaultWeather,
        HiddenSearch,
        WeatherDetails,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

#app {
    // font-family: Raleway, sans-serif;
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
