<template>
    <div id="app">
        <div class="uk-container">
            <div class="uk-margin-top">
                <greetings v-if="this.steps[this.lastStepIndex] == 'greetings'"/>
                <remakingLink v-if="this.steps[this.lastStepIndex] == 'remaking'"/>
                <developingType v-if="this.steps[this.lastStepIndex] == 'developingType'"/>
                <promotionLink v-if="this.steps[this.lastStepIndex] == 'promotionLink'"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import greetings from './components/greetings.vue';
import remakingLink from './components/remakingLink.vue';
import promotionLink from './components/promotionLink.vue';
import developingType from './components/developingType.vue';

export default {
    name: 'app',
    components: {
        greetings,
        remakingLink,
        promotionLink,
        developingType
    },
    computed: {
        ...mapGetters([
            'steps',
            'lastStepIndex'
        ])
    },
    created() {
        console.log(this.steps, this.lastStepIndex )
    }
}
 
</script>
