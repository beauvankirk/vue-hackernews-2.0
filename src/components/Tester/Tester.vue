<template lang="pug">
#report-component-wrapper.k-component-wrapper
  #report-content-wrapper.k-content-wrapper
    #contentwrapper.k-body-container
      img(src="../../assets/logo.png")
      v-pane
      v-hello
</template>

<script>
export default {
  name: 'Tester'
}
</script>

<style lang="stylus" scoped>

.k-component-wrapper
  padding-top 65px
  overflow-y scroll
  height 100%
  width 100%
  text-align center

.k-content-wrapper
  position absolute
  width 100%
  text-align center

.k-body-container
  margin 30px auto
  border-radius 3px
  min-width 200px
  height auto
  text-align center
  text-align center
  max-width 800px
  font-size 1rem


</style>
