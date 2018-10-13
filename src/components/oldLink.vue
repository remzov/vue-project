<template>
    <div class="uk-text-center">
        <h1>{{data.serviceType}}</h1>
        <p>
            Оставьте ссылку на свой старый сайт.
        </p>
        <div class="uk-flex uk-child-width-1-3 uk-margin-large uk-flex-center">
            <input class="uk-input" type="text" v-model="link"> 
        </div> 
        <div class="uk-flex uk-flex-center">
            <button class="uk-button" type="button" @click="stepBack">
                <span uk-icon="arrow-left"></span> Назад 
            </button>  
            <button class="uk-button uk-button-secondary" type="button" @click="stepForward">
                Далее <span uk-icon="arrow-right"></span>
            </button>    
            <button class="uk-button" type="button" @click="reset">
                Сбросить
            </button>  
        </div>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: this.data.link
        }
    },
    props: ['data'],
    methods: {
        reset() {
            this.$store.dispatch('reset');
        },
        stepBack() {
            this.$store.dispatch('stepBack');
        },
        stepForward() {
            this.$store.dispatch('inputLink', this.link);
        } 
    }
}
</script>

<style scoped>
    button {
        padding: 10px 20px;
    }
</style>