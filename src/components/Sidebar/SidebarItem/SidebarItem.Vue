<template lang="pug">
router-link(:to="route")
  span.header-item
    i(
      v-if="icon",
      class="fa",
      :class="iconPrefixed"
    )
    b {{ ' ' + (text ? text : route) }}
</template>

<script>
export default {
  name: 'HeaderItem',
  props: {
    icon: String,
    text: String,
    route: String,
    ripple: Boolean
  },
  computed: {
    iconPrefixed () {
      return 'fa-' + this.icon
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../css/settings/_colors.styl'
  @import '../../../css/settings/_variables.styl'
  @import '../../../css/generic/_z-depths.styl'

.header-item
  font-variant small-caps
  font-weight 400
  font-size 0.9rem
  color black
</style>
