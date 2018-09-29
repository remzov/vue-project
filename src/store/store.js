import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        steps: ['greetings'],
        data: {
            serviceType: '',
            promotionLink: '',
            promotionServices: '',
            promotionComment: '',
            contactsName: '',
            contactsTel: ''
        }
    },
    actions: {
        pickedServiceType(context, payload) {
            switch (payload) {
                case 'developing': {
                    context.commit('setServiceType', {
                        projectType: 'developing',
                        nextStep: 'developingType'
                    });
                    break;
                }
                case 'remaking': {
                    context.commit('setServiceType', {
                        projectType: 'remaking',
                        nextStep: 'remakingLink'
                    });
                    break;
                }
                case 'promotion': {
                    context.commit('setServiceType', {
                        projectType: 'promotion',
                        nextStep: 'promotionLink'
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
            switch (payload.projectType) {
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
            state.steps = state.steps.concat(payload.nextStep);
            state.data.serviceType = payload.projectType;
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
        setPromotionContacts(state, payload) {
            state.steps = state.steps.concat('promotionSubmit');
            state.data.contactsName = payload.contactsName;
            state.data.contactsTel = payload.contactsTel;
        },
        setRemakingContacts() {

        },
        setDevelopingContacts() {

        },
        reset(state) {
            state.steps = ['greetings'];
            for (let field in state.data) {
                field = '';
            }
        }
    },
    getters: {
        steps(state) {
            return state.steps;
        },
        lastStepIndex(state) {
            return state.steps.length - 1 ;
        },
        projectType(state) {
            return state.data.serviceType;
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