<template>
    <div class="uk-container uk-container-small">
        <div class="uk-text-center">
            <h1>Продвижение сайта.</h1>
            <p>
            Оставьте ссылку на свой старый сайт.
            </p>
            <div class="uk-flex uk-child-width-1-3 uk-margin-large uk-flex-center">
                <input class="uk-input" type="text" v-model="link"> 
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
            link: ''
        }
    },
    methods: {
        stepHandler() {
            this.$store.dispatch('inputPromotionLink', this.link);
        }
    }
}
</script>

<style scoped>
    button {
        padding: 10px 20px;
    }
</style>