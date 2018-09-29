<template>
    <div id="app">
        <div class="uk-margin-top">
            <greetings v-if="steps[lastStepIndex] == 'greetings'"/>
            <remakingLink v-if="steps[lastStepIndex] == 'remakingLink'"/>
            <developingType v-if="steps[lastStepIndex] == 'developingType'"/>
            <promotionLink v-if="steps[lastStepIndex] == 'promotionLink'"/>
            <promotionInfo v-if="steps[lastStepIndex] == 'promotionInfo'"/>
            <contacts v-if="steps[lastStepIndex] == 'contacts'"/>
            <promotionSubmit 
                v-if="steps[lastStepIndex] == 'promotionSubmit'"
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
            'steps',
            'lastStepIndex',
            'projectType',
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
