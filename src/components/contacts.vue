<template>
    <div class="uk-text-center">
        <h1>Продвижение сайта.</h1>
        <p>
            Введите контактные данные
        </p>
        <div class="uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-margin-large">
            <div>
                <label>
                    <div class="uk-margin-small">Ваше имя:</div>  
                    <input class="uk-input" type="text" v-model="contactsName">
                </label>
            </div>
            <div class="uk-margin">
                <label>
                    <div class="uk-margin-small">Ваш телефон:</div>  
                    <input class="uk-input" type="tel" v-model="contactsTel">
                </label>
            </div>
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
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            contactsName: this.data.contactsName,
            contactsTel: this.data.contactsTel
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
            this.$store.dispatch('inputContactData', {
                contactsName: this.contactsName,
                contactsTel: this.contactsTel
            });
        }
    }
}
</script>

<style scoped>
    button {
        padding: 10px 20px;
    }
</style>