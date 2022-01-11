<template>
    <div class="container">
        <!-- <pre>{{ weatherData }}</pre> -->
        <div class="temp-unit">
            <button class="active" type="submit">°C</button>
            <button class="" type="submit">°F</button>
        </div>
        <five-days-forecast :weather-data="weatherData" />
        <todays-highlights :weather-data="weatherData" />
        <footer>
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
        };
    },
};
</script>

<style lang="scss" scoped>
// TODO: remplacer avec foundation

.container {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 40px 0;
}

.temp-unit {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.temp-unit {
    justify-content: flex-end;
}

.temp-unit button {
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 18px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #585676;
    color: #fff;
    transition: all 0.3s ease-in-out;
}

.temp-unit button:first-child {
    margin-right: 12px;
}

.temp-unit button.active {
    background-color: #e7e7eb;
    color: #110e3c;
    cursor: default;
}

footer {
    color: #616475;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    margin-top: 20px;
}
</style>
