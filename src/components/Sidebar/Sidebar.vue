/* @flow
<template lang="pug">
#sidebar-container(v-bind:style="{ flexBasis: width + 'px' }")
</template>
*/
// <script>
export default {
  name: 'Header',
  props: {
    width: {
      type: Number,
      default: 200
    }
  }
}
// </script>

/*
<style lang="stylus" scoped>
@import '../../css/settings/_colors.styl'
@import '../../css/settings/_variables.styl'
@import '../../css/generic/_z-depths.styl'

#sidebar-container
  height 100%
</style>
*/
