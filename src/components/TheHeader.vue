<template>
  <header>
    <div class="container">
        <router-link to="/" class="header__logo"><img src="@/assets/img/Logo.png" alt="Logo"></router-link>
        
        <nav>
            <ul class="header__menu">
                <li class="header__menu-item">
                    <router-link to="/">Главная</router-link>
                    
                </li>
                <li class="header__menu-item">
                    <router-link to="/">Портфолио</router-link>
                </li>
            </ul>
        </nav>
        <button class="header__contact">Связаться со мной</button>
    </div>
  </header>
</template>

<script>
export default {
    name: "TheHeader"
}
</script>

<style lang="sass">
header
    position: absolute
    top: 0px
    left: 0px
    width: 100%
    padding: 20px 0px
    .container
        display: flex
        align-items: center
        justify-content: space-between
.header
    &__logo
        width: 40px
    &__menu
        display: flex
        align-items: center
        &-item
            margin-right: 40px
            position: relative
            &::before
                content: ""
                width: 0%
                height: 1px
                background: $white
                position: absolute
                left: 0
                bottom: -2px
                transition: .4s
            &:hover
                &::before
                    width: 100%
            &:last-child
                margin-right: 0px
    &__contact
        border: 1px solid $white
        border-radius: 10px
        padding: 12px 30px
        transition: .4s
        &:hover
            color: $black
            background: $white
</style>