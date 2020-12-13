export const state = () => ({
    auth: null,
    user: null,
    agency: null
});

export const mutations = {
    setAuth(state, payload) {
        state.auth = payload
    },
    setUser(state, payload) {
        state.user = payload;
    },
    setAgency(state, payload) {
        state.agency = payload
    },
    logout(state) {
        state.auth = null;
        state.user = null;
        state.agency = false
    }
};

export const actions = {
    // async getUser({ commit }) {
    //   try {
    //     const user = await this.$axios.$get('/me');
    //     await commit('setUser', user);
    //   } catch (error) {

    //   }
    // },

    async nuxtServerInit({ commit, dispatch }, { app, req }) {
        if (req.headers.cookie) {
            const auth = app.$cookies.get('auth');
            const user = app.$cookies.get('user');
            const agency = app.$cookies.get('agency');

            await commit('setAuth', auth);
            await commit('setUser', user);
            agency === 1 ? commit('setAgency', true) : commit('setAgency', false);
        }
    }

};


export const getters = {
    // getNotificationsStatus: state => state.notifications.filter(el => !el.seen).length
};
