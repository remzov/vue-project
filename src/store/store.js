import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const INITIAL_PATH = ['greetings'];
const PROMOTION_PATH = ['promotionLink', 'promotionInfo', 'contacts', 'promotionSubmit'];

const INITIAL_PROMOTION_DATA = {
    serviceType: '',
    promotionLink: '',
    promotionServices: '',
    promotionComment: '',
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
        }
    },
    actions: {
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
                        path: 'remaking'
                    });
                    break;
                }
                case 'promotion': {
                    context.commit('setServiceType', {
                        type: 'promotion',
                        path: PROMOTION_PATH,
                        initialData: INITIAL_PROMOTION_DATA
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
            switch (this.state.data.serviceType) {
                case 'developing': {
                    context.commit('setDevelopingContacts', payload);
                    break;
                }
                case 'remaking': {
                    context.commit('setRemakingContacts', payload);
                    break;
                }
                case 'promotion': {
                    context.commit('setPromotionContacts', payload);
                    break;
                }
                default: false;
            } 
        },
        pickedDevelopingType(context, payload) {
            context.commit('setDevelopingType', payload);
        },
        reset(context) {
            context.commit('reset');
        }
    },
    mutations: {
        setServiceType(state, payload) {
            state.steps.path = payload.path;
            state.data = payload.initialData;
            state.data.serviceType = payload.type;
        },
        setPromotionLink(state, payload) {
            state.steps.current++;
            state.data.promotionLink = payload;
        },
        inputPromotionInfo(state, payload) {
            state.steps.current++;
            state.data.promotionServices = payload.promotionServicesInputs;
            state.data.promotionComment = payload.promotionServicesText;
        },
        setContactsData(state, payload) {
            state.steps.current++;
            state.data.contactsName = payload.contactsName;
            state.data.contactsTel = payload.contactsTel;
        },
        setPromotionContacts(state, payload) {
            state.steps.current++;
            state.data.contactsName = payload.contactsName;
            state.data.contactsTel = payload.contactsTel;
        },
        setRemakingContacts() {

        },
        setDevelopingContacts() {

        },
        reset(state) {
            state.steps.path = ['greetings'];
            state.steps.current = 0;
            for (let field in state.data) {
                field = '';
            }
        }
    },
    getters: {
        currentStep(state) {
            return state.steps.path[state.steps.current];
        },
        promotionProjectData(state) {
            return {
                type: state.data.serviceType,
                link: state.data.promotionLink,
                services: state.data.promotionServices,
                comment: state.data.promotionComment,
                contactsName: state.data.contactsName,
                contactsTel: state.data.contactsTel
            }
        }
    },
});