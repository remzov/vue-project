<template>
    <div id="app">
        <div class="uk-container">
            <div class="uk-margin-top">
                <h1 class="uk-text-center uk-margin-large">Выбери себе сайт!</h1>
                <greetings 
                v-if="currentSection === 'greetings'" 
                @picked-site-type="setSiteType"
                />
                <price
                />
            </div>
        </div>
    </div>
</template>

<script>
import greetings from './components/greetings.vue';
import price from './components/price.vue';

export default {
    name: 'app',
    data () {
        return {
           currentSection: 'greetings'
        }
    },
    methods: {
        setSiteType(option) {
            this.currentSection = option;
        }
    },
    components: {
        greetings,
        price
    },
}
 
</script>
