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
            switch (payload) {
                case 'developing': {
                    context.commit('setServiceType', 'developingType');
                    break;
                }
                case 'remaking': {
                    context.commit('setServiceType', 'remakingLink');
                    break;
                }
                case 'promotion': {
                    context.commit('setServiceType', 'promotionLink');
                    break;
                }
                default: false;
            } 
        },
        inputPromotionLink(context, payload) {
            context.commit('setPromotionLink', payload);
        },
        inputPromotionInfo(context, payload) {
            context.commit('inputPromotionInfo', payload);
        },
        inputRemakingLink(context, payload) {
            context.commit('setRemakingLink', payload);
        },
        inputContactData(context, payload) {
            context.commit('setContactsData', payload);
        },
        pickedDevelopingType(context, payload) {
            context.commit('setDevelopingType', payload);
        },
    },
    mutations: {
        setServiceType(state, payload) {
            state.steps = state.steps.concat(payload);
            state.data.serviceType = payload;
        },
        setPromotionLink(state, payload) {
            state.steps = state.steps.concat('promotionInfo');
            state.data.promotionLink = payload;
        },
        inputPromotionInfo(state, payload) {
            state.steps = state.steps.concat('contacts');
            state.data.promotionServices = payload.promotionServicesInputs;
            state.data.promotionComment = payload.promotionServicesText;
        },
        setContactsData(state, payload) {
            state.steps = state.steps.concat('promotionSubmit');
            state.data.contactsName = payload.contactsName;
            state.data.contactsTel = payload.contactsTel;
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