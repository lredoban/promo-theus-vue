<template lang="html">
  <header>
    <section id="header__top" class="desktop">
      <div class="logo">
          <nuxt-link active-class="current" to="/"><img src="~/assets/img/logo.svg" alt="Logo Promo-Theüs" title="Logo Promo-Theüs"></nuxt-link>
      </div>
      <div class="address">
          <address>
              Centre d'affaires du Zénith - Arche A<br>
              36 rue de Sarliève<br>
              63800 COURNON D'AUVERGNE<br>
              Tél: <span>09.82.27.49.09</span>
          </address>
      </div>
      <div id="header__top__social">
          <ul>
              <li><a href="http://www.facebook.com/promo.theus.developpement" class="facebook" target="_blank"><span>facebook</span><SvgIcon name="facebook"/></a></li>
              <li><a href="//plus.google.com/101357276651616256581/about" class="googleplus" target="_blank"><span>google plus</span><SvgIcon name="googleplus"/></a></li>
              <li><a href="http://www.instagram.com/promotheusdeveloppement/" class="instagram" target="_blank"><span>instagram</span><SvgIcon name="instagram"/></a></li>
          </ul>
      </div>
    </section>
    <nav id="header__bottom" class="clearfix">
        <div id="navbar" class="mobile">
            <div class="logo-inline">
                 <nuxt-link active-class="current" to="/">
                    <div><img src="~/assets/img/logo-no-text.svg" alt="Logo Promo-Theüs" title="Logo Promo-Theüs"></div>
                    <div>
                        Promo-Theüs<br><span>Développement</span>
                    </div>
                 </nuxt-link>
            </div>
            <a class="nav-trigger" href="#0" @click='open = !open' :class='{"nav-open": open }'>
                Menu
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="menu mobile" :class='{"nav-open": open }'>
            <ul>
                <!--<li><a href="#" class="disabled">
                    <div class="square"><SvgIcon name="activity"/></div>
                    Notre Activité
                </a></li>
                <li><nuxt-link active-class="current" to="/realisations">
                    <div class="square"><SvgIcon name="real"/></div>
                    Nos Réalisations
                </nuxt-link></li>
                <li><nuxt-link active-class="current" to="/terrains">
                    <div class="square"><SvgIcon name="land"/></div>
                    Nos Terrains
                </nuxt-link></li>-->
                <li @click='goTo("/")'>
                  Accueil
                </li>
                <li @click='goTo("contact")'>
                  Nous contacter
                </li>
            </ul>
            <div class="menu__icons">
                <ul>
                    <li><a href="http://www.facebook.com/promo.theus.developpement" class="facebook" target="_blank"><SvgIcon name="facebook"/></a></li>
                    <li><a href="//plus.google.com/101357276651616256581/about" class="googleplus" target="_blank"><SvgIcon name="googleplus"/></a></li>
                    <li><a href="http://www.instagram.com/promotheusdeveloppement/" class="instagram" target="_blank"><SvgIcon name="instagram"/></a></li>
                </ul>
            </div>
        </div>
        <ul class="menu desktop">
          <nuxt-link exact-active-class="current" tag="li" to="/">Accueil</nuxt-link>
          <nuxt-link exact-active-class="current" tag="li" to="/contact">Nous contacter</nuxt-link>
        </ul>
    </nav>
  </header>
</template>

<script>
import SvgIcon from '~/components/SvgIcon.vue'

export default {
  components: { SvgIcon },
  data () {
    return {
      open: false
    }
  },
  methods: {
    goTo (path) {
      this.open = false
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang="sass">
  .menu.desktop li
    cursor: pointer
  .menu.mobile li
    height: 50%
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
  .menu__icons>ul
    display: flex
    justify-content: flex-end
    margin: 0
    padding: 0
</style>
