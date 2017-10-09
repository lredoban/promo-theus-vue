<template lang="html">
  <object class="icon" type="image/svg+xml" :data="basedData"></object>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    basedData () { return require(`~/assets/svg/${this.name}.svg`) }
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
