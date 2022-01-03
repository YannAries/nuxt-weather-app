<template>
    <div class="weather-forecast">
        <div class="weather">
            <h5>Tomorrow</h5>
            <img src="@/assets/img/HeavyCloud.png" alt="Heavy Cloud" />
        </div>
        <div class="weather-card">
            <h5>Fri, Dec 24</h5>
            <img src="@/assets/img/HeavyCloud.png" alt="Heavy Cloud" />
        </div>
        <div class="weather-card">
            <h5>Fri, Dec 25</h5>
            <img src="@/assets/img/HeavyCloud.png" alt="Heavy Cloud" />
        </div>
        <div class="weather-card">
            <h5>Fri, Dec 26</h5>
            <img src="@/assets/img/HeavyCloud.png" alt="Heavy Cloud" />
        </div>
        <div class="weather-card">
            <h5>Fri, Dec 27</h5>
            <img src="@/assets/img/HeavyCloud.png" alt="Heavy Cloud" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'FiveDaysForecast',
    data() {
        return {};
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
}

.weather-card img {
    width: 58px;
    margin: 20px auto;
}
</style>
