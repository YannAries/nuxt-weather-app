<template>
    <aside>
        <div v-if="showContainer" class="container">
            <div class="header">
                <!-- <pre>{{ weatherData }}</pre> -->
                <button class="btn search" type="submit" @click="showContainer = !showContainer">
                    Search for places
                </button>
                <button class="btn icon" type="submit" @click="clickedBtn">
                    <img src="@/assets/svg/gps_fixed_white_24dp.svg" alt="User Current location" />
                </button>
            </div>
            <div v-if="weatherData.weather" class="weather-symbol">
                <!-- <img src="@/assets/svg/cloud_white_24dp.svg" alt="White cloud" /> -->
                <img
                    alt="weather icon"
                    :src="'https://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@4x.png'"
                />
            </div>
            <div class="default-temperature">
                <h3>
                    <span>{{ weatherData.main.temp }}<span class="unit">&deg;C</span></span>
                </h3>
            </div>
            <h4 class="type text-capitalize text-center">{{ weatherData.weather[0].description }}</h4>
            <div class="footer">
                <div class="date">
                    <span>Today</span>
                    <span class="separator">-</span>
                    <span>{{ currentDateTime() }}</span>
                </div>
                <div class="location">
                    <img src="@/assets/svg/location_on_white_24dp.svg" alt="" />
                    <span>{{ weatherData.name }}, {{ weatherData.sys.country }}</span>
                </div>
            </div>
        </div>
        <!-- HiddenSearch -->
        <div v-else class="search-container">
            <div class="container">
                <div class="close-bar">
                    <button type="button" @click="showContainer = !showContainer">
                        <img src="@/assets/svg/close_white_18dp.svg" alt="Close" />
                    </button>
                </div>
                <form action="" class="search-bar" @submit.prevent="getWeather">
                    <div>
                        <span>
                            <img src="@/assets/svg/search_white_24dp.svg" alt="search" />
                        </span>
                        <input
                            id="input-search"
                            v-model="city"
                            type="search"
                            name="q"
                            placeholder="search location"
                            aria-label="search through app"
                        />
                    </div>
                    <button type="submit">Search</button>
                </form>
                <!-- <p class="empty-message">No Locations founded</p> -->
            </div>
        </div>
        <!-- HiddenSearch / -->
    </aside>
</template>

<script>
export default {
    name: 'DefaultWeather',
    components: {},

    props: {
        weatherData: {
            type: Object,
            default: () => {},
        },
    },

    data() {
        return { showContainer: true, city: '', result: {} };
    },

    methods: {
        getWeather() {
            this.$emit('get-weather', this.city);
        },
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
                console.log('Your browser does not support geolocalisation !');
            }
        },

        currentDateTime() {
            // ou utiliser MomentJS
            const dateObj = new Date();
            const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ];
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const day = days[dateObj.getDay()];
            const date = dateObj.getDate();
            const month = months[dateObj.getMonth()];
            return `${day}${','} ${date} ${month}`;
        },
    },
};
</script>

<style lang="scss" scoped>
aside {
    height: 100vh;
    background-color: $color-mirage;
}
.container {
    background: $color-mirage;
    height: 100%;
    margin: auto;
    flex-direction: column;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: $container-100;
    margin: auto;
    inline-size: $container-100;
    z-index: 2;
    padding-inline-end: 2.875rem;
    padding-inline-start: 2.875rem;
}
.header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 20px 0 20px;
}
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: $color-storm-gray;
    color: $color-athens-gray;
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: 0 4px 4px rgba(0 0 0 /25%);
    transition: transform 1s;
}
.search {
    padding: 0 18px;
    font-size: 16px;
}
.icon {
    width: 40px;
    border-radius: $container-100;
}
.weather-symbol {
    position: relative;
    width: 120%;
    padding: 60px 0;
    box-sizing: border-box;
    &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: $container-100;
        height: $container-100;
        z-index: 1;
        opacity: 0.1;
        background: url(@/assets/img/Cloud-background.png) no-repeat;
        background-position: 50%;
        background-size: cover;
    }
    img {
        display: block;
        width: 170px;
        margin: auto;
    }
}
.default-temperature {
    h3 {
        text-align: center;
        color: $color-athens-gray;
        font-size: 96px;
        font-weight: 500;
    }
    .unit {
        color: $color-santas-gray;
        font-size: 48px;
    }
}
.type {
    color: $color-santas-gray;
    // text-align: center;
    font-size: 24px;
    font-weight: 600;
}
.footer {
    padding-bottom: 20px;
    box-sizing: border-box;
    .date {
        display: flex;
        align-items: center;
        justify-content: center;
        color: $color-santas-gray;
        font-size: 18px;
        font-weight: 500;
    }
    .separator {
        margin: 0 15px;
    }
    .location {
        color: $color-santas-gray;
        font-size: 18px;
        font-weight: 500;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.location {
    img {
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }
}
.search-container {
    background-color: $color-mirage;
    position: absolute;
    left: 0;
    right: 0;
    height: 100vh;
    width: $container-100;
}
.close-bar {
    text-align: right;
    padding: 10px 15px;
    box-sizing: border-box;
    margin-bottom: 20px;
    button {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        border-radius: $container-100;
        transition: all 0.3s ease-in-out;
        position: absolute;
        right: 0rem;
    }
    img {
        height: $container-100;
    }
}
.search-bar {
    width: 90%;
    display: flex;
    align-items: center;
    padding-block-start: 4.75rem;
    position: absolute;
    div {
        width: 75%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 44px;
        border: 1px solid $color-athens-gray;
        transition: all 0.3s ease-in-out;
    }
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
        min-width: 35px;
    }
    input {
        box-sizing: border-box;
        background-color: transparent;
        border: none;
        outline: none;
        padding: 12px 0;
        font-size: 1em;
        color: $color-tapa;
        flex-shrink: 1;
        inline-size: $container-100;
        padding-bottom: 0rem;
        outline: none;
        box-shadow: none;
    }
    button {
        border: none;
        outline: none;
        font-size: 1em;
        background: $color-royal-blue;
        border: 1px solid $color-royal-blue;
        color: $color-white;
        cursor: pointer;
        padding: 12px 0;
        width: 23%;
        margin-left: 2%;
        transition: all 0.3s ease-in-out;
    }
}
@media (min-width: 768px) {
    aside {
        height: $container-100;
    }
    .search-container {
        width: 31%;
        position: fixed;
    }
    .close-bar {
        text-align: right;
        padding: 15px 20px;
    }
}
// @media (min-height: 768px) {
//     header {
//         padding: 30px 40px 0 40px;
//     }
//     .footer {
//         padding-bottom: 40px;
//     }
//     .close-bar {
//         padding: 15px 20px;
//     }
// }

// comment
// #input-search {
//     padding-inline-start: -0.1rem;
// }

// @media (min-height: 768px) {
//     .weather-symbol img {
//         width: 212px;
//     }
// }

// @media (min-height: 768px) {
//     .default-temperature h3 {
//         font-size: 120px;
//     }
// }
</style>
