/* @flow
<template lang="pug">
header.navbar
  .inner
    v-header-item(v-for="item of navbarRoutes"
      v-bind:icon="item.icon"
      v-bind:text="item.text"
      v-bind:route="item.route"
      v-bind:ripple="item.ripple"
    )
</template>
*/
// <script>
export default {
  name: 'Header',
  props: {
    navbarRoutes: {
      type: Array,
      default: () => []
    }
  }
}
// </script>

/*
<style lang="stylus" scoped>
@import '../../css/settings/_colors.styl'
@import '../../css/settings/_variables.styl'
@import '../../css/generic/_z-depths.styl'

header.navbar
  @extend .z-depth-1
  background-image: linear-gradient(
    alpha($theme.primary, 0.8),
    lighten(
      alpha($theme.primary, 0.8),
      80%
    )
  )
  height $navbar-height
  width 100%
  text-align center

  .inner
    display flex
    flex-wrap nowrap
    align-items center
    justify-content space-around
    width 100%
    height 100%
#ercot-logo
  align-self flex-start
  width 100px

</style>
*/
