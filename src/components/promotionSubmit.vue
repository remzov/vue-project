<template>
    <div class="uk-text-center">
        <h1>Продвижение сайта.</h1>
        <p>
            Подтвердите ваш заказ.
        </p>
        <form class="uk-form">
            <div v-if="data.link" class="uk-margin">
                <div class="label">Ссылка на старый сайт:</div>
                <div class="result">{{ data.link }}</div>
            </div>
            <div v-if="data.services.length > 0" class="uk-margin">
                <div class="label">Список услуг:</div>
                <div class="result">{{ data.services }}</div>
            </div>
            <div v-if="data.comment" class="uk-margin">
                <div class="label">Ваш комментарий:</div>
                <div class="result">{{ data.comment }}</div>
            </div>
            <div v-if="data.contactsName" 
            class="uk-margin">
                <div class="label">Ваше имя:</div>
                <div class="result">{{ data.contactsName }}</div>
            </div>
            <div v-if="data.contactsTel" class="uk-margin">
                <div class="label">Ваш телефон:</div>
                <div class="result">{{ data.contactsTel }}</div>
            </div>
            <div class="uk-flex uk-flex-center">
                <button class="uk-button" type="button" @click="stepBack">
                    <span uk-icon="arrow-left"></span> Назад 
                </button>  
                <button 
                    class="uk-button uk-button-secondary" 
                    type="submit" 
                    @click.prevent="submitOrder">
                    Подтвердить заказ
                </button>     
                <button class="uk-button" type="button" @click="reset">
                    Сбросить
                </button>  
            </div>   
        </form>
    </div>
</template>

<script>
export default {
    props: ['data'],
    methods: {
        reset() {
            this.$store.dispatch('reset');
        },
        stepBack() {
            this.$store.dispatch('stepBack');
        },
        submitOrder() {
            alert('заказ отправлен!');
            this.reset();
        }
    }
}
</script>

<style scoped>
    button {
        padding: 10px 20px;
    }
    .label {
        font-size: 22px;
    }
    .result {
        font-size: 28px;
        font-weight: 700;
    }
</style>