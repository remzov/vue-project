<template>
    <div class="uk-container uk-container-small">
        <div class="uk-text-center">
            <h1>Продвижение сайта.</h1>
            <p>
                Введите контактные данные
            </p>
            <div class="uk-margin">
                <label>
                    Ваше имя:
                    <input type="text" v-model="contactsName">
                </label>
            </div>
            <div class="uk-margin">
                <label>
                    Ваш телефон:
                    <input type="tel" v-model="contactsTel">
                </label>
            </div>
            <button class="uk-button uk-button-secondary" type="button" @click="stepHandler()">
                Далее <span uk-icon="arrow-right"></span>
            </button> 
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            contactsName: '',
            contactsTel: ''
        }
    },
    methods: {
        stepHandler() {
            this.$store.dispatch('inputContactData', {
                projectType: this.projectType,
                contactsName: this.contactsName,
                contactsTel: this.contactsTel
            });
        }
    },
    computed: {
        ...mapGetters([
            'projectType'
        ])
    }
}
</script>

<style scoped>
    button {
        padding: 10px 20px;
    }
</style>