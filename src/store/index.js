export const state = () => ({
    tempUnit: 'celcius',
    // weatherUnit: '',
});

export const mutations = {
    changeUnit(state, unit) {
        state.tempUnit = unit;
        console.log(unit);
    },
    changeDegree(state, degree) {},
};

export const actions = {
    nuxtServerInit() {},
};

// export const strict = false
