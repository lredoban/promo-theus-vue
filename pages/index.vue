<template>
  <main id="accueil">
  	<section class="accueil__index">
  		<div>
  			<a href="#" class=" disabled">
  				<div class="badge"><svg class="icon icon-activity"><use xlink:href="#icon-activity"></use></svg></div>
  				<div>
  					<h2>Notre Activité</h2>
  					<p>Tout savoir sur l'activité<br> de Promo-Theüs</p>
  				</div>
  			</a>
  		</div>
  		<div>
  			<nuxt-link to="/realisations">
  				<div class="badge"><svg class="icon icon-real"><use xlink:href="#icon-real"></use></svg></div>
  				<div>
  					<h2>Nos Réalisations</h2>
  					<p>Découvrez le travail <br>de toute une équipe</p>
  				</div>
  			</nuxt-link>
  		</div>
  		<div>
  			<nuxt-link to="/terrains">
  				<div class="badge"><svg class="icon icon-land"><use xlink:href="#icon-land"></use></svg></div>
  				<div>
  					<h2>Nos Terrains</h2>
  					<p>Les biens que nous <br> proposons à la vente</p>
  				</div>
  			</nuxt-link>
  		</div>
  		<div>
  			<nuxt-link to="/contact">
  				<div class="badge"><svg class="icon icon-contact"><use xlink:href="#icon-contact"></use></svg></div>
  				<div>
  					<h2>Nous Contacter</h2>
  					<p>Nous répondrons à vos <br>questions au plus vite</p>
  				</div>
  			</nuxt-link>
  		</div>
  	</section>
  	<section>
  		<nuxt-link to="contact" class="btn">Contactez-nous</nuxt-link>
  	</section>
  	<section class="show-img desktop">
      <div v-for="(img, origin) of images">
        <img :src="img" :alt="origin.slice(2).slice(0,-4)">
      </div>
  	</section>
  </main>
</template>

<script>
var cache = {}

function importAll (r) {
  r.keys().forEach(key => { cache[key] = r(key) })
}

importAll(require.context('~/assets/img/index', true, /\.(jpg|png)$/))
/* const previewArray = require.context('~/assets/img/index', false, /^\.\/.*\.jpg$/)
const yo = previewArray.keys().forEach(previewArray) */

export default {
  data: () => {
    return {
      images: cache
    }
  },
  mounted: () => {
    console.warn(cache)
  }
}
</script>

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

</style>
