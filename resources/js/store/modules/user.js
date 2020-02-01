
const state = {
    user: null,
    counter: 0
};

const getters = {
    getUser: state => state.user,
    getCounter: state => state.counter
};

const actions = {
    setUser: (({commit}, payload) => {
        commit('setUser', payload);
    })
};

const mutations = {
    setUser: (state, payload) => {
        state.user = payload;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
