const userInit = {
    firstName: '',
    lastName: '',
};

export const state = () => JSON.parse(JSON.stringify(userInit));

export const mutations = {
    setFirstName(state, firstName) {
        state.firstName = firstName;
    },

    setLasttName(state, lastName) {
        state.lastName = lastName;
    },

    reset() {
        this.commit(
            'user/setFirstName',
            JSON.parse(JSON.stringify(userInit.firstName))
        );
        this.commit(
            'user/setLasttName',
            JSON.parse(JSON.stringify(userInit.lastName))
        );
    },
};
