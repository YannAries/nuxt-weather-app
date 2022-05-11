<template>
    <aside>
        <div v-if="showContainer" class="container">
            <div class="header">
                <button class="btn search" type="submit" @click="showContainer = !showContainer">
                    Search for places
                </button>
                <button class="btn icon" type="submit" @click="clickedBtn">
                    <img
                        src="@/assets/svg/gps_fixed_white_24dp.svg"
                        alt="User Current location"
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                    />
                </button>
            </div>
            <div v-if="weatherData.weather" class="weather-symbol">
                <!-- <nuxt-img src="@/assets/svg/cloud_white_24dp.svg" alt="White cloud" /> -->
                <img
                    alt="weather icon"
                    :src="'https://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@4x.png'"
                />
            </div>
            <div class="default-temperature">
                <h3 class="text-center">
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
                    <img
                        src="@/assets/svg/location_on_white_24dp.svg"
                        alt="location"
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                    />
                    <span>{{ weatherData.name }}, {{ weatherData.sys.country }}</span>
                </div>
            </div>
        </div>
        <!-- HiddenSearch -->
        <div v-else class="search-container">
            <div class="container">
                <div class="close-bar">
                    <button type="button" @click="showContainer = !showContainer">
                        <img
                            src="@/assets/svg/close_white_18dp.svg"
                            alt="Close"
                            sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        />
                    </button>
                </div>
                <form action="" class="search-bar" @submit.prevent="getWeather">
                    <div>
                        <span>
                            <img
                                src="@/assets/svg/search_white_24dp.svg"
                                alt="search"
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                            />
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
const l = (arg) => console.log(arg);

export default {
    name: 'DefaultWeather',
    props: {
        weatherData: {
            type: Object,
            default: () => {},
        },
    },

    data() {
        return { showContainer: true, city: '', result: {} };
    },

    created() {
        setTimeout(() => {
            this.showContainer = true;
        }, 3000);
    },

    methods: {
        getWeather() {
            this.$emit('get-weather', this.city);
        },
        clickedBtn() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        l(position.coords.latitude);
                        l(position.coords.longitude);
                    },
                    (error) => {
                        l(error.message);
                    },
                );
            } else {
                l('Your browser does not support geolocalisation !');
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
    @include display-between;
    background: $color-mirage;
    height: $container-100;
    margin: $global-auto;
    flex-direction: column;
    box-sizing: $global-border-box;
    position: relative;
    width: $container-100;
    inline-size: $container-100;
    z-index: 2;
    padding-inline-end: 2.875rem;
    padding-inline-start: 2.875rem;
}

.header {
    display: flex;
    justify-content: space-between;
    width: $container-100;
    padding: 20px 20px $zero-unit 20px;
}

.btn {
    @include center-justify-content;
    height: 40px;
    background-color: $color-storm-gray;
    color: $color-athens-gray;
    border: $global-none;
    outline: $global-none;
    cursor: pointer;
    box-shadow: $zero-unit 4px 4px rgba(0 0 0 /25%);
    transition: transform 1s;
}

.search {
    padding: $zero-unit 18px;
    font-size: 16px;
}

.icon {
    width: 40px;
    border-radius: $container-100;
}

.weather-symbol {
    position: relative;
    padding: 60px 140px;
    box-sizing: $global-border-box;
    &:before {
        content: '';
        display: block;
        position: absolute;
        left: $zero-unit;
        top: $zero-unit;
        width: $container-100;
        height: $container-100;
        z-index: 1;
        opacity: 0.1;
        // background: url(@/assets/img/Cloud-background.png) no-repeat;
        background-position: 50%;
        background-size: cover;
    }
    img {
        display: block;
        width: 170px;
        margin: $global-auto;
    }
}

.default-temperature {
    h3 {
        color: $color-athens-gray;
        font-size: 5vw;
        font-weight: $global-weight-medium;
    }
    .unit {
        color: $color-santas-gray;
        font-size: 2.7vw;
    }
}

.type {
    color: $color-santas-gray;
    font-size: 24px;
    font-weight: 600;
}

.footer {
    padding-bottom: 20px;
    box-sizing: $global-border-box;
    .date {
        @include center-justify-content;
        color: $color-santas-gray;
        font-size: 18px;
        font-weight: $global-weight-medium;
    }
    .separator {
        margin: $zero-unit 15px;
    }
    .location {
        @include center-justify-content;
        color: $color-santas-gray;
        font-size: 18px;
        font-weight: $global-weight-medium;
        margin-top: 15px;
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
    left: $zero-unit;
    right: $zero-unit;
    height: 100vh;
    width: $container-100;
}

.close-bar {
    text-align: right;
    padding: 10px 15px;
    box-sizing: $global-border-box;
    margin-bottom: 20px;
    button {
        border: $global-none;
        outline: $global-none;
        background-color: $color-crystalline;
        cursor: pointer;
        padding: $zero-unit;
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
    align-items: $global-center;
    padding-block-start: 4.75rem;
    position: absolute;
    div {
        width: 75%;
        display: flex;
        align-items: $global-center;
        box-sizing: $global-border-box;
        height: 44px;
        border: 1px solid $color-athens-gray;
        transition: all 0.3s ease-in-out;
    }
    span {
        @include center-justify-content;
        height: 44px;
        min-width: 35px;
    }
    input {
        box-sizing: $global-border-box;
        background-color: $color-crystalline;
        border: $global-none;
        outline: $global-none;
        padding: 12px $zero-unit;
        font-size: 1em;
        color: $color-tapa;
        flex-shrink: 1;
        inline-size: $container-100;
        padding-bottom: 0rem;
        outline: $global-none;
        box-shadow: $global-none;
    }
    button {
        border: $global-none;
        outline: $global-none;
        font-size: 1em;
        background: $color-royal-blue;
        border: 1px solid $color-royal-blue;
        color: $color-white;
        cursor: pointer;
        padding: 12px $zero-unit;
        width: 23%;
        margin-left: 2%;
        transition: all 0.3s ease-in-out;
    }
}

@media (min-width: 768px) {
    header {
        padding: 30px 40px $zero-unit 40px;
    }
    aside {
        height: $container-100;
    }
    .search-container {
        width: 31%;
        position: fixed;
    }
    .weather-symbol {
        padding: $zero-unit;
        img {
            width: 212px;
        }
    }
    .icon {
        margin-left: 10px;
    }
    .close-bar {
        text-align: right;
        padding: 15px 20px;
    }
    .footer {
        .date {
            font-size: 15px;
        }
    }
}
</style>
