export const state = () => ({
    tempUnit: 'celcius',
});

export const mutations = {
    changeUnit(state, unit) {
        state.tempUnit = unit;
        console.log(unit);
    },
};

export const actions = {
    nuxtServerInit() {},
};

// export const strict = false
