/* @flow
<template lang="pug">
#outerwrapper
  #stars
  #stars2
  #stars3
  #app
    v-header(:navbarRoutes="navbarRoutes")
    #after-header
      v-sidebar.left(:width=200)
      main
        v-container.v-container(fluid)
          router-view.view
      v-sidebar.right(:width=150)
</template>
*/

// <script>
export default {
  name: 'App',
  data () {
    return {
      navbarRoutes: [
        { route: 'Home', icon: 'home' },
        { route: 'Reports', icon: 'file-text-o' },
        { route: 'RTNET' },
        { route: 'RTCA' },
        { route: 'DSA' },
        { route: 'SCED' },
        { route: 'RUC' },
        { route: 'Wiki', icon: 'book' }
      ]
    }
  },
  mounted () {
    this.$vuetify.init()
  }
}
// </script>

/*
<style lang="stylus">
  @import '../../css/normalize.styl'
  @import '../../css/generic/_reset.styl'
  @import '../../css/main.css'
  @import '../../css/precompile.css'
  @import '../../../node_modules/font-awesome/css/font-awesome.min.css'
  @import '../../css/settings/_colors.styl'
  @import '../../css/settings/_variables.styl'
  @import '../../css/generic/_z-depths.styl'

html

body
  margin 0
  font-family Raleway, HelveticaNeue, "Helvetica Neue", open-sans-light, sans-serif
  font-size 10px

#outerwrapper
  position fixed
  height 100%
  width 100%
  background radial-gradient(ellipse, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.95) 100%), center center, no-repeat, url('~/static/img/body/night.jpg'), center center, no-repeat
  background-size 100% 100%, 100% 100%
  background-attachment fixed, fixed

#app
  height 100%
  width 100%
  display flex
  flex-direction column
  flex-wrap nowrap

v-sidebar
  width 200px
  background-image: linear-gradient(
    alpha($theme.secondary, 0.8),
    lighten(
      alpha($theme.secondary, 0.8),
      80%
    )
  )
  v-sidebar 100%

#after-header
  display flex
  flex-wrap nowrap
  width 100%
  height 100%

main
  bottom 0
  margin 0 0
  height 100%
  overflow-y scroll

.v-content
  flex: 1 1 auto
  min-width: 0

.v-container
  position relative
  width 100%
  padding-top 10px

.view

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0

@media (max-width 860px)
  .header .inner
    padding 15px 30px

@media (max-width 600px)
  body
    font-size 14px

</style>
*/
