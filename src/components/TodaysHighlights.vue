<template>
    <div>
        <h4>Today's Highlights</h4>
        <div class="highlights">
            <div>
                <h5>Wind Status</h5>
                <p>
                    <!-- <span>{{ windSpeed }}</span> -->
                    <span class="unit">mph</span>
                </p>
                <div class="wind">
                    <button type="submit">
                        <img src="@/assets/svg/near_me_white_24dp.svg" alt="Near me" />
                    </button>
                    <!-- <span>{{ windDirection }}</span> -->
                </div>
            </div>
            <div>
                <h5>Humidity</h5>
                <p>
                    <!-- <span>{{ humidity }}</span> -->
                    <span class="unit">%</span>
                </p>
                <div class="prog">
                    <div class="indicators">
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                    </div>
                    <div class="bar">
                        <div class="percentaage"></div>
                    </div>
                    <div class="unit">
                        <span>%</span>
                    </div>
                </div>
            </div>
            <div>
                <h5>Visibility</h5>
                <p>
                    <!-- <span>{{ visibility }}</span> -->
                    <span class="unit">Miles</span>
                </p>
            </div>
            <div>
                <h5>Air Pressure</h5>
                <p>
                    <!-- <span>{{ airPressure }}</span> -->
                    <span class="unit">mb</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodaysHighlights',
    components: {},

    props: {
        windSpeed: {
            type: Number,
            required: true,
        },
        windDirection: {
            type: Number,
            required: true,
        },
        humidity: {
            type: Number,
            required: true,
        },
        visibility: {
            type: Number,
            required: true,
        },
        airPressure: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
h4 {
    // font-size: 18px;
    color: #e7e7eb;
    margin-bottom: 32px;
    margin-top: 12px;
    font-weight: 700;
}

// @media (min-height: 768px) {
//     h4 {
//         font-size: 20px;
//     }
// }

.highlights {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 48px;
    color: #e7e7eb;
}

@media (min-width: 768px) {
    .highlights {
        grid-template-columns: 1fr 1fr;
        -moz-column-gap: 48px;
        column-gap: 48px;
    }
}

.highlights > div {
    background: #1e213a;
    padding: 20px;
    box-sizing: border-box;
}

.highlights h5 {
    text-align: center;
}

.highlights p {
    text-align: center;
    font-size: 48px;
    margin: 10px 0;
}

@media (min-height: 768px) {
    .highlights p {
        font-size: 64px;
    }
}

.highlights .wind {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

.highlights .wind button {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    background: hsla(0, 0%, 100%, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
}

.highlights .wind span {
    font-size: 14px;
    font-weight: 500;
}

button img {
    transform: rotate(170deg);
}

.highlights .unit {
    font-size: 32px;
}

.highlights .prog {
    width: 100%;
}

.prog .indicators {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #a09fb1;
}

.prog .bar {
    height: 8px;
    width: 100%;
    margin-top: 2px;
    background-color: #e7e7eb;
    border-radius: 100px;
    position: relative;
}

.percentage {
    width: 70%;
}

.prog .bar div {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #ffec65;
    border-radius: 100px;
}

.prog .unit {
    text-align: right;
    margin-top: 4px;
    color: #a09fb1;
    font-size: 12px;
}
</style>
