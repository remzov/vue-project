import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const INITIAL_PATH = ['greetings'];
const PROMOTION_PATH = ['oldlink', 'promotionInfo', 'contacts', 'promotionSubmit'];
const REMAKING_PATH = ['oldlink', 'promotionInfo', 'contacts', 'remakingSubmit'];

const INITIAL_PROMOTION_DATA = {
    serviceType: '',
    link: '',
    services: [],
    comment: '',
    contactsName: '',
    contactsTel: ''
}

const INITIAL_REMAKING_DATA = {
    serviceType: '',
    link: '',
    services: [],
    comment: '',
    contactsName: '',
    contactsTel: ''
}

export default new Vuex.Store({
    state: {
        steps: {
            path: INITIAL_PATH,
            current: 0
        },
        data: {
            serviceType: '' 
        }
    },
    actions: {
        stepBack(context) {
            context.commit('setStepBack');
        },
        reset(context) {
            context.commit('reset');
        },
        pickedServiceType(context, payload) {
            switch (payload) {
                case 'developing': {
                    context.commit('setServiceType', {
                        type: 'developing',
                        path: 'developing'
                    });
                    break;
                }
                case 'remaking': {
                    context.commit('setServiceType', {
                        type: 'remaking',
                        path: REMAKING_PATH,
                        initialData: {...INITIAL_REMAKING_DATA}
                    });
                    break;
                }
                case 'promotion': {
                    context.commit('setServiceType', {
                        type: 'promotion',
                        path: PROMOTION_PATH,
                        initialData: {...INITIAL_PROMOTION_DATA}
                    });
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
        }
    },
    mutations: {
        setStepBack(state) {
            if (state.steps.current === 0) {
                state.steps.path = INITIAL_PATH;
                state.steps.current = 0;
            } else state.steps.current--;      
        },
        reset(state) {
            state.steps.path = ['greetings'];
            state.steps.current = 0;
            state.data = {
                serviceType: '' 
            }
        },
        setServiceType(state, payload) {
            state.steps.path = payload.path;
            state.data = payload.initialData;
            state.data.serviceType = payload.type;
        },
        setPromotionLink(state, payload) {
            state.steps.current++;
            state.data.link = payload;
        },
        inputPromotionInfo(state, payload) {
            state.steps.current++;
            state.data.services = payload.promotionServicesInputs;
            state.data.comment = payload.promotionServicesText;
        },
        setContactsData(state, payload) {
            state.steps.current++;
            state.data.contactsName = payload.contactsName;
            state.data.contactsTel = payload.contactsTel;
        },
        setRemakingContacts() {

        },
        setDevelopingContacts() {

        }
    },
    getters: {
        currentStep(state) {
            return state.steps.path[state.steps.current];
        },
        data(state) {
            return state.data
        }
    },
});