<template lang="pug">
.k-pane
  slot
</template>

<script>
export default {
  name: 'Placeholder'
}
</script>

<style lang="stylus" scoped>
.k-pane {
  background rgba(0,0,0,0.65)
  margin 10px auto
  color WhiteSmoke
  border-radius 3px
  width 600px
  height auto
  text-align center
  /*font-size 5rem*/
  user-select none
  position relative
  padding 10px
}
</style>
