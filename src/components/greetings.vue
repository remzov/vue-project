<template>
    <div class="uk-text-center">
        <p class="greetings__text">
            Хотите, чтобы мы помогли с сайтом?<br>
            Выберите, что вам нужно!
        </p>
        <div class="uk-flex uk-child-width-1-3 uk-margin-large">
            <labeL>
                Разработка сайта
                <input 
                    type="radio" 
                    name="greetings" 
                    value="developing" 
                    v-model="pickedOption"
                > 
            </label>
            <label>
                Ремейк сайта
                <input 
                    type="radio" 
                    name="greetings" 
                    value="remaking"
                    v-model="pickedOption"
                > 
            </label>
            <labeL>
                Продвижение сайта
                <input 
                    type="radio" 
                    name="greetings" 
                    value="promotion" 
                    v-model="pickedOption"
                > 
            </label>
        </div>
        <div class="uk-flex uk-flex-center">
            <button class="uk-button uk-button-secondary" type="button" @click="pickingServiceType(pickedOption)">
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
            pickedOption: this.data.serviceType
        }
    },
    props: ['data'],
    methods: {
        reset() {
            this.$store.dispatch('reset');
        },
        pickingServiceType(type) {
            this.$store.dispatch('pickedServiceType', type);
        }
    }
}
</script>

<style scoped>
    .greetings__text {
        font-size: 24px;
    }
    button {
        padding: 10px 20px;
    }
    label {
        margin-right: 25px;
        font-size: 20px;
    }
</style>