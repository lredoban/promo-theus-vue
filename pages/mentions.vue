<template lang="pug">
  main#mentions
    include:markdown-it ../content/mentions.md
</template>

<style scoped lang="sass">
  @import ~assets/css/base/_variables.scss

  #mentions
    padding-bottom: calc(3em + #{$footer-height})
    h2
      margin-top: 50px
    p
      margin: 0 auto
      max-width: calc(800px - 2em)
      padding: 0 1em
      text-align: justify
</style>
