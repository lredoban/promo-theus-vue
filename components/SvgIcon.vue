<template lang="html">
  <svg :class="'icon icon-' + name">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script>
function importAll (r) {
  r.keys().forEach(key => { r(key) })
}

importAll(require.context('~/assets/svg', true, /\.svg$/))

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
  .icon
    display: inline-block
    width: 1em
    height: 1em
    fill: currentColor
    position: relative
    vertical-align: middle
</style>
