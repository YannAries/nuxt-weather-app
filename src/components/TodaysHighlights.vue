<template>
    <div>
        <h4>Today's Highlights</h4>
        <div class="highlights">
            <!-- <pre>{{ forecast }}</pre> -->
            <div>
                <h5 class="text-center">Wind Status</h5>
                <p class="text-center">
                    <span>{{ weatherData.current.wind_speed }}<span class="unit">mph</span></span>
                </p>
                <div class="wind">
                    <button type="submit">
                        <img src="@/assets/svg/near_me_white_24dp.svg" alt="Near me" />
                    </button>
                    <!-- <span :style="`transform: rotate(${{ windDirIcon }}deg)`"
                        ><img src="@/assets/svg/near_me_white_24dp.svg" alt="Near me"
                    /></span> -->
                    <span>{{ windDirStr }}</span>
                </div>
            </div>
            <div>
                <h5 class="text-center">Humidity</h5>
                <p class="text-center">
                    <span>{{ weatherData.current.humidity }}<span class="unit">&#37;</span></span>
                </p>
                <div class="prog">
                    <div class="indicators">
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                    </div>
                    <div class="bar position-relative">
                        <div class="percentage position-absolute"></div>
                    </div>
                    <div class="unit text-right">
                        <span>&#37;</span>
                    </div>
                </div>
            </div>
            <div>
                <h5 class="text-center">Visibility</h5>
                <p class="text-center">
                    <span>{{ weatherData.current.visibility }}<span class="unit">miles</span></span>
                </p>
            </div>
            <div>
                <h5 class="text-center">Air Pressure</h5>
                <p class="text-center">
                    <span>{{ weatherData.current.pressure }}<span class="unit">mb</span></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
function windDirection(num) {
    const val = Math.floor(num / 22.5 + 0.5);
    const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return arr[val % 16];
}

export default {
    name: 'TodaysHighlights',

    components: {},

    props: {
        weatherData: {
            type: Object,
            default: () => {},
        },
    },

    data() {
        return { city: '' };
    },

    computed: {
        windDirIcon() {
            return this.weatherData.current.wind_deg + 90;
        },
        // Points cardinaux
        windDirStr() {
            return windDirection(this.weatherData.current.wind_deg);
        },
    },
};
</script>

<style lang="scss" scoped>
h4 {
    color: $color-athens-gray;
    margin-bottom: 32px;
    margin-top: 12px;
    font-weight: 700;
}
.highlights {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 48px;
    color: $color-athens-gray;
    > div {
        background: $color-mirage;
        padding: 20px;
        box-sizing: border-box;
    }
    p {
        font-size: 48px;
        margin: 10px 0;
    }
    .wind {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        button {
            margin-right: 10px;
            width: 30px;
            height: 30px;
            border: none;
            outline: none;
            background: rgba(255, 255, 255, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: $container-100;
        }
        span {
            font-size: 14px;
            font-weight: 500;
        }
    }
    .unit {
        font-size: 32px;
    }
    .prog {
        width: $container-100;
    }
}
button {
    img {
        transform: rotate(170deg);
    }
}
.prog {
    .indicators {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $color-santas-gray;
    }
    .bar {
        height: 8px;
        width: $container-100;
        margin-top: 2px;
        background-color: $color-athens-gray;
        border-radius: 100px;
        // position: relative;
        div {
            height: $container-100;
            // position: absolute;
            top: 0;
            left: 0;
            background: $color-paris-daisy;
            border-radius: 100px;
        }
    }
    .unit {
        // text-align: right;
        margin-top: 4px;
        color: $color-santas-gray;
        font-size: 12px;
    }
}
.percentage {
    width: 70%;
}
@media (min-width: 768px) {
    .highlights {
        grid-template-columns: 1fr 1fr;
        -moz-column-gap: 48px;
        column-gap: 48px;
    }
}
@media (min-height: 768px) {
    .highlights {
        p {
            font-size: 64px;
        }
    }
}
</style>
