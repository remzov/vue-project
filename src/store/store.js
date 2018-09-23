import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        steps: ['greetings'],
        data: {
            serviceType: ''
        }
    },
    actions: {
        pickedServiceType(context, payload) {
            context.commit('setServiceType', payload);
        },
        inputRemakingLink(context, payload) {
            context.commit('setRemakingLink', payload);
        },
        inputPromotionLink(context, payload) {
            context.commit('setDevelopingType', payload);
        },
        pickedDevelopingType(context, payload) {
            context.commit('setPromotionLink', payload);
        },
    },
    mutations: {
        setServiceType(state, payload) {
            // state = {
            //     ...state, 
            //     steps: 
            //     data: {
            //         serviceType: payload
            //     }
            // }
            state.steps = state.steps.concat(payload);
            state.data.serviceType = payload;
            console.log(state.steps)
        },

        setRemakingLink(state, payload) {
            state = {
                ...state, 
                steps: state.steps.concat('remakingLink'),
                data: {
                    remakingLink: payload
                }
            }
        },
        setPromotionLink(state, payload) {
            state = {
                ...state, 
                steps: state.steps.concat('promotionLink'),
                data: {
                    promotionLink: payload
                }
            }
        },
        setDevelopingType(state, payload) {
            state = {
                ...state, 
                steps: state.steps.concat('developingType'),
                data: {
                    developingType: payload
                }
            }
        }
    },
    getters: {
        steps(state) {
            return state.steps;
        },
        lastStepIndex(state) {
            return state.steps.length - 1 ;
        }
    },
});