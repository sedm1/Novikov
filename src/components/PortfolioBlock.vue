<template>
  <section class="portfolio">
    <div class="container">
        <h2 class="section__title  portfolio__title">Портфолио</h2>
        <p class="portfolio__descript codeinsert">За свои 4 года вэб-разработки я успел поработать над множеством интересных проектов. Начиная с простых сайтов, заканчивая полноценными интрнет-магазинами с интеграцией с базой данных. Здесь вы можете озанкомиться с некоторыми моими проектами.</p>
        <div class="portfolio__block">
            <VPortfolioItem
            v-for="(PortfolioItem, index) in PORTFOLIO"
            :key=index
            :PortfolioItem="PortfolioItem"
            ></VPortfolioItem>
        </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VPortfolioItem from './VPortfolioItem.vue'
export default {
  components: { VPortfolioItem },
    name: "PortfolioBlock",
    methods: {
        ...mapActions([
            'GET_PORTFOLIO_FROM_DB'
        ])
    },
    computed: {
        ...mapGetters([
            'PORTFOLIO'
        ])
    },
    mounted(){
        this.GET_PORTFOLIO_FROM_DB()
    }
}
</script>

<style lang="sass" scoped>
.portfolio
    &__title
        margin-bottom: 20px
    &__descript
        max-width: 550px
    &__block
        display: grid
        grid-template-columns: 1fr 1fr 1fr 1fr
        grid-gap: 60px 15px
        margin-top: 40px
</style>