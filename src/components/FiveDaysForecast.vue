<template>
    <div class="weather-forecast">
        <!-- <pre>{{ weatherData }}</pre> -->
        <div class="weather">
            <div class="weather-card">
                <h5>Tomorrow</h5>
                <img
                    :src="'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'"
                    alt="Heavy Cloud"
                />
                <span> {{ weatherData.main.temp_max }} &deg;C </span>
                <span> {{ weatherData.main.temp_min }} &deg;C </span>
            </div>
        </div>
        <div class="weather-card">
            <h5>{{ getWeekDays() }}</h5>
            <img :src="'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'" alt="Heavy Cloud" />
            <span> {{ weatherData.main.temp_max }} &deg;C </span>
            <span> {{ weatherData.main.temp_min }} &deg;C </span>
        </div>
        <div class="weather-card">
            <h5>{{ weatherData.dt }}</h5>
            <img :src="'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'" alt="Heavy Cloud" />
            <span> {{ weatherData.main.temp_max }} &deg;C </span>
            <span> {{ weatherData.main.temp_min }} &deg;C </span>
        </div>
        <div class="weather-card">
            <h5>{{ weatherData.dt }}</h5>
            <img :src="'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'" alt="Heavy Cloud" />
            <span> {{ weatherData.main.temp_max }} &deg;C </span>
            <span> {{ weatherData.main.temp_min }} &deg;C </span>
        </div>
        <div class="weather-card">
            <h5>{{ weatherData.dt }}</h5>
            <img :src="'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'" alt="Heavy Cloud" />
            <span> {{ weatherData.main.temp_max }} &deg;C </span>
            <span> {{ weatherData.main.temp_min }} &deg;C </span>
        </div>
    </div>
</template>

<script>
function getWeekDays(date = new Date()) {
    const d = new Date(+date);
    const f = new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
    });
    const m = d.getMonth();
    const list = [];
    while (d.getMonth() === m) {
        list.push(f.format(d));
        d.setDate(d.getDate() + 1);
    }
    return list;
}

console.log(getWeekDays());

export default {
    name: 'FiveDaysForecast',

    props: {
        weatherData: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return { city: '' };
    },
    // computed: {
    //     fiveDays(city) {
    //         return this.$axios.$get(
    //             `https://api.openweathermap.org/data/2.5/forecast?q=${city},CA&APPID=13e98cc8aba1bfd9310dfab158b20f62&units=metric`,
    //         );
    //     },
    // },

    // methods: {
    //     weatherData.dt {
    //         return fiveDays(this.weatherData.dt);
    //     },
    //     weatherData.main.temp_max() {
    //         return tempConverter(this.weatherData.main.temp_max);
    //     },
    //     weatherData.main.temp_min() {
    //         return tempConverter(this.weatherData.main.temp_min);
    //     },
    // },
};
</script>

<style lang="scss" scoped>
// TODO: remplacer avec foundation

.weather-forecast {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
}

.weather-card {
    background: #1e213a;
    padding: 15px;
    width: 120px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    font-weight: 500;
    font-size: 1em;
    color: #e7e7eb;
    margin-bottom: 20px;
}

.weather-card h5 {
    text-align: center;
    font-size: 1.063rem;
}

.weather-card img {
    width: 58px;
    margin: 20px auto;
}
</style>
