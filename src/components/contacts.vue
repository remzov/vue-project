<template>
    <div class="uk-container uk-container-small">
        <div class="uk-text-center">
            <h1>Продвижение сайта.</h1>
            <p>
                Введите контактные данные
            </p>
            <div class="uk-flex uk-child-width-1-3 uk-margin-large">
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
            </div>
            <button class="uk-button uk-button-secondary" type="button" @click="stepHandler(pickedOption)">
                Далее <span uk-icon="arrow-right"></span>
            </button> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contactsName: '',
            contactsTel: ''
        }
    },
    methods: {
        stepHandler(type) {
            this.$store.dispatch('inputContactData', {
                contactsName: contactsName,
                contactsTel: contactsTel
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