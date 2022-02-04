import Vue from 'vue';

export default ({ store }) => {
    Vue.filter('tempConvert', function (val) {
        let temp;

        if (store.state.tempUnit === 'celcius') {
            temp = ((val - 32) * 5) / 9;
            return Math.round(temp) + '\xB0C';
        } else {
            temp = (val * 9) / 5 + 32;
            return Math.round(temp) + '\xB0F';
        }
    });
};
