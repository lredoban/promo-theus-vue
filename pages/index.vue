<template>
  <main id="accueil">
    <h1>SITE INTERNET EN MAINTENANCE</h1>
    <p>
      <strong>Afin de pouvoir procéder à des mises à jour, notre site internet est en maintenance.</strong><br>
      Cependant, la rubrique <nuxt-link to='/contact'>contact</nuxt-link> est toujours disponible. Et vous pouvez continuer à nous suivre sur :
    </p>
    <div class="social">
      <a href="http://www.instagram.com/promo.theus.developpement/"><img src="~/assets/img/instagram_logo.png" alt="instagram"></a>
      <a href="http://www.facebook.com/promo.theus.developpement/"><img src="~/assets/img/facebook_logo.png" alt="facebook"></a>
    </div>
    <p>pour accéder à notre profil instagram et à notre page facebook cliquez directement sur l’icône que vous souhaitez</p>
    <p><strong>Nous restons bien entendu joignables par :
      téléphone, mail, et sur les réseaux sociaux.
    </strong></p>
    <p>A très bientôt,
      L’équipe Promo-Theüs
    </p>
  </main>
</template>

<style scoped lang="sass">
  @import ~assets/css/base/_variables.scss

  #accueil
    display: flex
    justify-content: space-around
    flex-direction: column
  .accueil__index
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    > div
      text-align: center
      flex-basis: 50%
      @media only screen and  (min-width: $screen-m)
        flex-basis: 0%
      h2
        margin-bottom: 0
      p
        margin-top: 0
        text-align: center
      &:hover .badge
        background-color: $green
  .show-img
    display: none
    justify-content: space-around
    overflow: hidden
    > div
      height: 88px
      @media only screen and  (min-width: $screen-l)
        height: 100px
      img
        height: 100%
    @media only screen and  (min-width: $screen-m)
      display: flex
  strong
    font-size: 1.4em
    color: $green
  p
    text-align: center
  a
    color: $green
    font-size: 110%
  .social
    img
      height: 150px
      margin-right: 40px
</style>
