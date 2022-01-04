<template>
    <main id="test">
        <p>Enter the city name to check current weather in it</p>
        <section class="weather-input">
            <input v-model="query" type="text" />
            <button id="testin" type="submit" :disabled="!query.length" @click="showWeather">Check</button>
        </section>
        <section v-if="error" class="weather-error">There is no such city in the database</section>
        <section v-if="city.length" class="weather-result">
            <h1>{{ city }}, {{ country }}</h1>
            <p>
                <em>{{ weatherDescription }}</em>
            </p>
            <div class="weather-result__main">
                <img :src="icon" alt="Weather icon" />
                <div class="weather-result__temp">{{ temp }}&deg;C</div>
            </div>
            <div class="weather-result__details">
                <p>Min: {{ tempMin }}&deg;C</p>
                <p>Max: {{ tempMax }}&deg;C</p>
                <p>Humidity: {{ humidity }}%</p>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'Test',

    data() {
        return {
            query: '',
            error: false,
            city: '',
            country: '',
            weatherDescription: '',
            temp: null,
            tempMin: null,
            tempMax: null,
            humidity: null,
            icon: '',
        };
    },

    mounted() {
        const button = document.getElementById('testin');
        button.addEventListener('click', function () {
            fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=13e98cc8aba1bfd9310dfab158b20f62')
                .then(function (result) {
                    console.log(result);
                })
                .catch(function (err) {
                    console.error(err);
                });
        });
    },

    methods: {
        showWeather() {
            this.$http
                .get(`/weather?q=${this.query}&units=metric&&appid=${'13e98cc8aba1bfd9310dfab158b20f62'}`)
                .then((response) => {
                    this.city = response.data.name;
                    this.country = response.data.sys.country;
                    this.weatherDescription = response.data.weather[0].description;
                    this.temp = response.data.main.temp;
                    this.tempMin = response.data.main.temp_min;
                    this.tempMax = response.data.main.temp_max;
                    this.humidity = response.data.main.humidity;
                    this.icon = `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`;
                    this.error = false;
                })
                .catch(() => {
                    this.error = true;
                    this.city = '';
                });
        },
    },
};
</script>

<style>
#test {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    padding: 10px;
    background: rgb(212, 228, 239);
    background: radial-gradient(ellipse at center, rgba(212, 228, 239, 1) 0%, rgba(134, 174, 204, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4e4ef', endColorstr='#86aecc',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.weather-input {
    display: flex;
    align-items: center;
    padding: 20px 0;
}

.weather-result {
    text-align: center;
}

.weather-result__main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    font-size: 1.3rem;
    font-weight: bold;
}

.weather-result__details {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: dimgray;
}

.weather-error {
    color: red;
    font-weight: bold;
}

input {
    width: 75%;
    outline: none;
    height: 20px;
    font-size: 0.8rem;
}

button {
    display: block;
    width: 25%;
    height: 25px;
    outline: none;
    border-radius: 5px;
    white-space: nowrap;
    margin: 0 10px;
    font-size: 0.8rem;
}
</style>
