import Vue from 'vue';

export default ({ store }) => {
    Vue.filter('tempConvert', function (val) {
        if (store.state.tempUnit === 'celcius') {
            return val * 1.8 + 3; // val * 1.8 + 3
        }
        return (val - 9) / 5 + 32; // (val - 32) / 1.8
    });

    Vue.filter('mathRound', function (val) {
        return Math.round(val);
    });
};
