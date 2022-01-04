<template>
    <aside>
        <div class="container">
            <div class="header">
                <!-- <button class="btn search" type="submit">Search for places</button> -->

                <!-- <div v-if="showMe">
                    <button type="button" class="btn search" @click="showMe = !showMe()">Search for places</button>
                </div> -->

                <button class="btn icon" type="submit" @click="clickedBtn">
                    <img src="@/assets/svg/gps_fixed_white_24dp.svg" alt="User Current location" />
                </button>
            </div>
            <div class="weather-symbol">
                ::before
                <img src="@/assets/svg/cloud_white_24dp.svg" alt="" />
            </div>
            <div class="default-temperature">
                <h3>
                    <!-- <span>{{ default-temperature }}</span> -->
                    <span class="unit">°C</span>
                    <!-- <span class="unit">°{{ unit }}</span> -->
                </h3>
            </div>
            <h4 class="type">Sunny</h4>
            <!-- <h4 class="type">{{ weatherStateName }}</h4> -->
            <div class="footer">
                <div class="date">
                    <span>Today</span>
                    <span class="separator">-</span>
                    <span>Mon, Jan 01</span>
                    <!-- <span>{{ formatDate }}</span> -->
                </div>
                <div class="location">
                    <img src="@/assets/svg/location_on_white_24dp.svg" alt="" />
                    <span>Montréal</span>
                    <!-- <span>{{ currentCity.locationTitle }}</span> -->
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'DefaultWeather',
    data() {
        return {
            info: [],
            errored: false,
        };
    },
    computed: {},

    // async mounted() {
    //     this.info = await this.$axios.$get(
    //         'https://www.openweathermap.org/data/2.5/weather?q={quebec}&appid={13e98cc8aba1bfd9310dfab158b20f62}',
    //         'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=13e98cc8aba1bfd9310dfab158b20f62}',
    //     );
    // },

    methods: {
        clickedBtn() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        console.log(position.coords.latitude);
                        console.log(position.coords.longitude);
                    },
                    (error) => {
                        console.log(error.message);
                    },
                );
            } else {
                console.log('Your browser does not support geolocalisation!');
            }
        },
    },
};
</script>

<style lang="scss" scoped>
aside {
    height: 100vh;
    background-color: #1e213a;
}

@media (min-width: 768px) {
    aside {
        height: 100%;
    }
}

.container {
    background: #1e213a;
    height: 100%;
    margin: auto;
    flex-direction: column;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 20px 0 20px;
}

@media (min-height: 768px) {
    header {
        padding: 30px 40px 0 40px;
    }
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: #6e707a;
    color: #e7e7eb;
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: 0 4px 4px rgba(0 0 0 /25%);
    transition: all 0.3s ease-in-out;
}

.search {
    padding: 0 18px;
    font-size: 16px;
}

.icon {
    width: 40px;
    border-radius: 100%;
}

.weather-symbol {
    position: relative;
    width: 120%;
    padding: 60px 0;
    box-sizing: border-box;
}

.weather-symbol:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.1;
    background: url(@/assets/img/Cloud-background.png) no-repeat;
    background-position: 50%;
    background-size: cover;
}

.weather-symbol img {
    display: block;
    width: 170px;
    margin: auto;
}

@media (min-height: 768px) {
    .weather-symbol img {
        width: 212px;
    }
}

.default-temperature h3 {
    text-align: center;
    color: #e7e7eb;
    font-size: 96px;
    font-weight: 500;
}

@media (min-height: 768px) {
    .default-temperature h3 {
        font-size: 120px;
    }
}

.default-temperature .unit {
    color: #a09fb1;
    font-size: 48px;
}

.type {
    color: #a09fb1;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
}

.footer {
    padding-bottom: 20px;
    box-sizing: border-box;
}

@media (min-height: 768px) {
    .footer {
        padding-bottom: 40px;
    }
}

.footer .date {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a09fb1;
    font-size: 18px;
    font-weight: 500;
}

.footer .separator {
    margin: 0 15px;
}

.footer .location {
    color: #a09fb1;
    font-size: 18px;
    font-weight: 500;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.location img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
}
</style>
