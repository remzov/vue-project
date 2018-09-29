<template>
    <div id="app">
        <div class="uk-margin-top">
            <greetings v-if="currentStep == 'greetings'"/>
            <!-- <remakingLink v-if="currentStep == 'remakingLink'"/>
            <developingType v-if="currentStep == 'developingType'"/> -->
            <promotionLink v-if="currentStep == 'promotionLink'"/>
            <promotionInfo v-if="currentStep == 'promotionInfo'"/>
            <contacts v-if="currentStep == 'contacts'"/>
            <promotionSubmit 
                v-if="currentStep == 'promotionSubmit'"
                :data="promotionProjectData" 
                :reset="reset"
            />
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import greetings from './components/greetings.vue';
import remakingLink from './components/remakingLink.vue';
import promotionLink from './components/promotionLink.vue';
import developingType from './components/developingType.vue';
import promotionInfo from './components/promotionInfo.vue';
import contacts from './components/contacts.vue';
import promotionSubmit from './components/promotionSubmit.vue';

export default {
    name: 'app',
    components: {
        greetings,
        remakingLink,
        promotionLink,
        developingType,
        promotionInfo,
        contacts,
        promotionSubmit
    },
    computed: {
        ...mapGetters([
            'currentStep',
            'promotionProjectData'
        ])
    },
    methods: {
        reset() {
            this.$store.dispatch('reset');
        }
    }
}
 
</script>
