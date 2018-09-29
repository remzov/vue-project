<template>
    <div id="app">
        <div class="uk-margin-top">
            <div class="uk-container uk-container-small">
               <div class="wrapper">
                    <greetings 
                    v-if="currentStep == 'greetings'"
                    :data="data"
                    />
                    <!-- <remakingLink v-if="currentStep == 'remakingLink'"/>
                    <developingType v-if="currentStep == 'developingType'"/> -->
                    <promotionLink 
                        v-if="currentStep == 'promotionLink'"
                        :data="data"
                    />
                    <promotionInfo 
                        v-if="currentStep == 'promotionInfo'"
                        :data="data"
                    />
                    <contacts 
                        v-if="currentStep == 'contacts'"
                        :data="data"
                    />
                    <promotionSubmit 
                        v-if="currentStep == 'promotionSubmit'"
                        :data="data" 
                    />
                </div>
            </div>
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
            'data'
        ])
    }
}
 
</script>

<style scoped>
    .wrapper {
        padding: 30px;
        border: 1px solid #000;
    }
</style>