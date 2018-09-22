<template>
    <div class="greetings uk-text-center">
        
        <p>
            Вы хотите заказать какой-то сайт?<br>
            Выберите, что вам нужно!
        </p>
        <div class="uk-flex uk-child-width-1-3 uk-margin-large">
            <labeL>
                Лендинг
                <input type="radio" name="greetings" value="landing" v-model="pickedOption"> 
            </label>
            <labeL>
                Визитка
                <input type="radio" name="greetings" value="visitcard" v-model="pickedOption"> 
            </label>
            <labeL>
                Интернет-магазин
                <input type="radio" name="greetings" value="store" v-model="pickedOption"> 
            </label>
        </div>
        <button class="uk-button uk-button-secondary" type="button" @click="pickingType">
            Далее <span uk-icon="arrow-right"></span>
        </button>
    </div>    
</template>

<script>

export default {
    data() {
        return {
            pickedOption: ''
        }
    },
    methods: {
        pickingType() {
            this.$emit('picked-site-type', this.pickedOption)
        }
    }
}

</script>

<style scoped>

    label {
        margin-right: 25px;
        font-size: 24px;
    }

</style>