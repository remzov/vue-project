<template>
    <div class="uk-text-center">
        <h1>Продвижение сайта.</h1>
        <p>
        Выберите услуги по продвижению, которые вам требуются.
        </p>
        <div class="uk-margin">
            <label>
                <input 
                    type="checkbox" 
                    v-model="services" 
                    value="SEO"          
                >
                SEO
            </label>
        </div>
        <div class="uk-margin">
            <label>
                <input 
                    type="checkbox" 
                    v-model="services" 
                    value="Директ"
                >
                Директ
            </label>
        </div>
        <div class="uk-margin">
            <label>
                <input 
                    type="checkbox" 
                    v-model="services" 
                    value="SMM"  
                >
                SMM
            </label>
        </div>
        <div class="uk-margin">
            <label>
                <input 
                    type="checkbox" 
                    v-model="services" 
                    value="Другое"
                >
                Другое
            </label>
        </div>
        <div class="uk-margin">
            <label>
                <div class="uk-margin">Дополнительная информация:</div>
                <textarea class="uk-textarea" v-model="text"></textarea>
            </label> 
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
            services: this.data.services,
            text: this.data.comment
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
            this.$store.dispatch(
                'inputPromotionInfo', {
                    promotionServicesInputs: this.services, 
                    promotionServicesText: this.text
                }
            );
        }
    }
}
</script>

<style scoped>
    button {
        padding: 10px 20px;
    }
    textarea {
        max-width: 80%;
        height: 200px;
        resize: none;
    }
</style>