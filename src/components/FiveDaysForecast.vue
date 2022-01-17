<template>
    <div class="weather-forecast">
        <div v-for="day in weatherData.daily.slice(1, 6)" :key="day.dt" class="weather-card">
            <h5 class="text-center">{{ $moment.unix(day.dt).format('ddd, DD MMM') }}</h5>
            <img :src="'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png'" alt="weather" />
            <div class="inline-flex">
                <span> {{ day.temp.max | tempConvert | mathRound }}</span>
                <span> {{ day.temp.min | tempConvert | mathRound }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FiveDaysForecast',

    props: {
        weatherData: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            city: '',
        };
    },

    computed: {},
};
</script>

<style lang="scss" scoped>
.weather-forecast {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
}
.weather-card {
    background: $color-mirage;
    padding: 15px;
    width: 120px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    font-weight: 500;
    font-size: 1em;
    color: $color-athens-gray;
    margin-bottom: 20px;
    h5 {
        // text-align: center;
        font-size: 1rem;
    }
    img {
        width: 58px;
        margin: 20px auto;
    }
}
.inline-flex {
    display: inline-flex;
    span {
        margin: 5px;
    }
}
</style>
