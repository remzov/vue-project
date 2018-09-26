<template>
    <div class="uk-container uk-container-small">
        <div class="uk-text-center">
            <h1>Продвижение сайта.</h1>
            <p>
            Выберите услуги по продвижению, которые вам требуются.
            </p>
            <div class="uk-margin">
                <label>
                    <input type="checkbox" name="services" v-model="services" value="SEO">
                    SEO
                </label>
            </div>
            <div class="uk-margin">
                <label>
                    <input type="checkbox" name="services" v-model="services" value="Директ">
                    Директ
                </label>
            </div>
            <div class="uk-margin">
                <label>
                    <input type="checkbox" name="services" v-model="services" value="SMM">
                    SMM
                </label>
            </div>
            <div class="uk-margin">
                <label>
                    <input type="checkbox" name="services" v-model="services" value="Другое">
                    Другое
                </label>
            </div>
            <div class="uk-margin">
                <label>
                    Дополнительная информация:<br>
                    <textarea class="uk-textarea" v-model="text"></textarea>
                </label> 
            </div>
            <button class="uk-button uk-button-secondary" type="button" @click="stepHandler">
                Далее <span uk-icon="arrow-right"></span>
            </button>  
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [],
            text: ''
        }
    },
    methods: {
        stepHandler() {
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
</style>