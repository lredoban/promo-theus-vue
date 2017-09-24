<template>
  <div id="main">
    <header-section/>
    <nuxt/>
    <footer-section/>
  </div>
</template>

<script>
  import HeaderSection from '~/components/HeaderSection.vue'
  import FooterSection from '~/components/FooterSection.vue'

  export default {
    components: { HeaderSection, FooterSection }
  }
</script>

<style lang="sass">
  #main
    position: relative
    min-height: 100vh
</style>
