<template>
  <div class="portfolio__item">
    <div class="portfolio__item-img">
        <button class="portfolio__item-moreInfo">Подробнее</button>
        <img :src="require('@/assets/img/portfolio/' + PortfolioItem.Image)" alt="PortfiolioImg">
    </div>
    <h4 class="portfolio__item-title">{{PortfolioItem.Title}}</h4>
    <p class="portfolio__item-shortdescript">{{PortfolioItem.ShortDescription}}</p>
    <a :href="PortfolioItem.LinkToProject" class="portfolio__item-link">Ссылка на проект</a>
  </div>
</template>

<script>
export default {
    name: "PortfolioItem",
    props: {
        PortfolioItem: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.portfolio
    &__item
        width: 100%
        &-img
            height: 200px
            width: 100%
            position: relative
            &:hover
                .portfolio__item-moreInfo
                    opacity: 1
            img
                width: 100%
                height: 100%
        &-title
            font-size: 20px
            margin-top: 15px
            margin-bottom: 5px
        &-shortdescript
            height: 50px
            overflow: hidden
        &-link
            width: 100%
            padding: 10px 0px
            text-align: center
            border: 1px solid $white
            border-radius: 5px
            transition: .4s
            font-size: 14px
            &:hover
                background: $white
                color: $black
        &-moreInfo
            position: absolute
            width: 100%
            height: 100%
            top: 0
            left: 0
            background: rgba(0, 0, 0, 0.8)
            display: flex
            align-items: center
            justify-content: center
            color: $white
            opacity: 0
            transition: .4s
</style>