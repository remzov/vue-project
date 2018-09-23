<template>
    <div class="uk-text-center">
        <h1>Разработка сайта.</h1>
        <p>
           Выберите уровень вашего будущего сайта.
        </p>
        <div class="uk-flex uk-child-width-1-3 uk-margin-large">
            <labeL>
                Дорогой и крутой
                <input type="radio" name="greetings" value="rich" v-model="pickedOption"> 
            </label>
            <label>
                Стандарт
                <input type="radio" name="greetings" value="standard" v-model="pickedOption"> 
            </label>
            <labeL>
                Чтобы был
                <input type="radio" name="greetings" value="poor" v-model="pickedOption"> 
            </label>
        </div>
        <button class="uk-button uk-button-secondary" type="button" @click="stepHandler(pickedOption)">
            Далее <span uk-icon="arrow-right"></span>
        </button> 
    </div>
</template>

<script>
export default {
    methods: {
        stepHandler(type) {
            this.$store.dispatch('pickedDevelopingType', type);
        }
    }
}
</script>

<style scoped>
    button {
        padding: 10px 20px;
    }
</style>