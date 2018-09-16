<template>
    <div id="app">
        <div class="uk-container">
            <div class="uk-margin-top">
                <greetings v-if="currentSection === 'greetings'" @picked-site-type="pickSiteType"></greetings>
                <landing v-if="currentSection === 'landing'"></landing>
                <visitcard v-if="currentSection === 'visitcard'"></visitcard>
                <store v-if="currentSection === 'store'"></store>
            </div>
        </div>
    </div>
</template>

<script>
import greetings from './components/greetings.vue';
import landing from './components/landing.vue';
import visitcard from './components/visitcard.vue';
import store from './components/store.vue';

export default {
    name: 'app',
    data () {
        return {
           currentSection: 'greetings'
        }
    },
    methods: {
        pickSiteType(option) {
            this.currentSection = option;
        }
    },
    components: {
        greetings,
        landing,
        visitcard,
        store
    },
}
 
</script>

<style scoped>
    
</style>
