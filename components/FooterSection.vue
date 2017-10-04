<template lang="html">
  <footer>
    <section id="footer__left">
        <div>Réalisé par Lovasoa</div>
        <div><nuxt-link to="/mentions">Mentions Légales</nuxt-link></div>
    </section>
    <section id="footer__right">
      <div class="menu__icons">
        <ul>
            <li><a href="http://www.facebook.com/promo.theus.developpement" class="facebook" target="_blank"><SvgIcon name="facebook"/></a></li>
            <li><a href="//plus.google.com/101357276651616256581/about" class="googleplus" target="_blank"><SvgIcon name="googleplus"/></a></li>
            <li><a href="https://www.instagram.com/promo.theus.developpement/" class="instagram" target="_blank"><SvgIcon name="instagram"/></a></li>
        </ul>
      </div>
  </section>
  </footer>
</template>

<script>
import SvgIcon from '~/components/SvgIcon'

export default {
  components: { SvgIcon }
}
</script>

<style scopped>
  .menu__icons>ul li a {
    padding: 0;
  }
</style>
