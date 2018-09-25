<template>
    <div id="app">
        <div class="uk-margin-top">
            <greetings v-if="this.steps[this.lastStepIndex] == 'greetings'"/>
            <remakingLink v-if="this.steps[this.lastStepIndex] == 'remakingLink'"/>
            <developingType v-if="this.steps[this.lastStepIndex] == 'developingType'"/>
            <promotionLink v-if="this.steps[this.lastStepIndex] == 'promotionLink'"/>
            <promotionInfo v-if="this.steps[this.lastStepIndex] == 'promotionInfo'"/>
            <contacts v-if="this.steps[this.lastStepIndex] == 'contacts'"/>
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

export default {
    name: 'app',
    components: {
        greetings,
        remakingLink,
        promotionLink,
        developingType,
        promotionInfo,
        contacts
    },
    computed: {
        ...mapGetters([
            'steps',
            'lastStepIndex'
        ])
    }
}
 
</script>
