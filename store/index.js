export const state = () => ({
    stateExemple: null,
})

export const mutations = {
    logout () {
        this.commit('user/reset');
        this.commit('token/reset');
    },
}

export const actions = {
    nuxtServerInit () {

    },
}

//export const strict = false
