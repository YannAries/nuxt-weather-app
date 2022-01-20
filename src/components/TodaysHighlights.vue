<template>
    <div>
        <h4>Today's Highlights</h4>
        <div class="highlights">
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
                    <div class="bar">
                        <div class="percentage"></div>
                    </div>
                    <div class="unit">
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
    font-weight: $prototype-font-bold;
}
.highlights {
    @include display-grid;
    row-gap: 48px;
    color: $color-athens-gray;
    > div {
        background: $color-mirage;
        padding: 20px;
        box-sizing: $global-border-box;
    }
    p {
        font-size: 48px;
        margin: 10px $zero-unit;
    }
    .wind {
        @include center-justify-content;
        margin-top: 20px;
        button {
            @include center-justify-content;
            margin-right: 10px;
            width: 30px;
            height: 30px;
            border: $global-none;
            outline: $global-none;
            background: rgba(255, 255, 255, 0.3);
            border-radius: $container-100;
        }
        span {
            font-size: 14px;
            font-weight: $global-weight-medium;
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
        @include display-between;
        color: $color-santas-gray;
    }
    .bar {
        height: 8px;
        width: $container-100;
        margin-top: 2px;
        background-color: $color-athens-gray;
        border-radius: 100px;
        position: relative;
        div {
            height: $container-100;
            position: absolute;
            top: $zero-unit;
            left: $zero-unit;
            background: $color-paris-daisy;
            border-radius: 100px;
        }
    }
    .unit {
        text-align: right;
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
        grid-template-columns: none;
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
