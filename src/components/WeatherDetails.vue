<template>
    <div class="container">
        <div class="temp-unit">
            <button type="button" @click="convertCelcius">&deg;C</button>
            <button type="button" @click="convertFahr">&deg;F</button>
        </div>
        <five-days-forecast :weather-data="weatherData" />
        <todays-highlights :weather-data="weatherData" />
        <footer class="text-center">
            <h5>{{ message }}</h5>
        </footer>
    </div>
</template>

<script>
import FiveDaysForecast from '@/components/FiveDaysForecast';
import TodaysHighlights from '@/components/TodaysHighlights';

export default {
    name: 'WeatherDetails',
    components: {
        FiveDaysForecast,
        TodaysHighlights,
    },
    props: {
        weatherData: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            message: 'created by Yannick Guion-Firmin - devChallenges.io',
            city: '',
        };
    },

    methods: {
        convertCelcius() {
            this.$store.commit('changeUnit', 'celcius');
            // console.log(this.$store.state.tempUnit);
        },

        convertFahr() {
            this.$store.commit('changeUnit', 'fahr');
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    @include center-container;
    width: 80%;
    height: $container-100;
    margin: $global-auto;
    box-sizing: $global-border-box;
    padding: 40px $zero-unit;
}
.temp-unit {
    @include flex-end;
    margin-bottom: 20px;
    button {
        border: $global-none;
        outline: $global-none;
        font-weight: $prototype-font-bold;
        font-size: 18px;
        width: 40px;
        height: 40px;
        border-radius: $container-100;
        background-color: $color-comet;
        color: $color-white;
        transition: all 0.3s ease-in-out;
        &:first-child {
            margin-right: 12px;
        }
        &:focus {
            background: $color-white;
            color: $color-black;
        }
    }
}

footer {
    color: $color-shuttle-gray;
    font-size: 14px;
    font-weight: 600;
    margin-top: 20px;
}
</style>
