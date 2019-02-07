const tokenInit = {
    accessToken: null,
    expiresIn: null,
    refreshToken: null,
    tokenType: null,
    wantToLog: false,
};

export const state = () => (JSON.parse(JSON.stringify(tokenInit)))

export const mutations = {

    setToken(state, token) {
        this.commit('token/setAccessToken', token.access_token)
        this.commit('token/setExpiresIn', token.expires_in)
        this.commit('token/setRefreshToken', token.refresh_token)
        this.commit('token/setTokenType', token.token_type)
    },

    setAccessToken(state, access_token) {
        state.accessToken = access_token;
    },

    setExpiresIn(state, expiresIn) {
        state.expiresIn = expiresIn;
    },

    setRefreshToken(state, refreshToken) {
        state.refreshToken = refreshToken;
    },

    setTokenType(state, tokenType) {
        state.tokenType = tokenType;
    },

    setWantToLog(state, wantToLog) {
        state.wantToLog = wantToLog;
    },

    reset() {
        this.commit('token/setAccessToken', tokenInit.accessToken)
        this.commit('token/setExpiresIn', tokenInit.expiresIn)
        this.commit('token/setRefreshToken', tokenInit.refreshToken)
        this.commit('token/setTokenType', tokenInit.tokenType)
        this.commit('token/setWantToLog', tokenInit.wantToLog)
    },

}

export const getters = {
    getAccessToken: state => state.accessToken,
    getWantToLog: state => state.wantToLog,
}
