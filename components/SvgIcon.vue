<template lang="html">
  <svg :class="'icon icon-' + name">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script>
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
