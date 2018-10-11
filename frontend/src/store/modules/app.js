const app = {
    state: {
        device: 'desktop',
    },
    getters: {
        device: state => state.device,
    },
    mutations: {
        TOGGLE_DEVICE: (state, device) => {
            state.device = device;
        }
    },
    actions: {
        toggleDevice({ commit }, device) {
            commit('TOGGLE_DEVICE', device);
        }
    }
}

export default app;