<template>
    <div class="uk-container uk-container-small">
        <div class="uk-text-center">
            <h1>Продвижение сайта.</h1>
            <p>
                Подтвердите ваш заказ.
            </p>
            <form class="uk-form">
                <div class="uk-margin">
                    <div class="label">Ссылка на старый сайт:</div>
                    <div class="result">{{ data.link }}</div>
                </div>
                <div class="uk-margin">
                    <div class="label">Список услуг:</div>
                    <div class="result">{{ data.services }}</div>
                </div>
                <div class="uk-margin">
                    <div class="label">Ваш комментарий:</div>
                    <div class="result">{{ data.comment }}</div>
                </div>
                <div class="uk-margin">
                    <div class="label">Ваше имя:</div>
                    <div class="result">{{ data.contactsName }}</div>
                </div>
                <div class="uk-margin">
                    <div class="label">Ваш телефон:</div>
                    <div class="result">{{ data.contactsTel }}</div>
                </div>
                <button 
                    class="uk-button uk-button-secondary" 
                    type="submit" 
                    @click.prevent="submitOrder">
                    Подтвердить заказ
                </button>    
            </form>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: ''
        }
    },
    props: ['data'],
    methods: {
        submitOrder() {
            alert('заказ отправлен')
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