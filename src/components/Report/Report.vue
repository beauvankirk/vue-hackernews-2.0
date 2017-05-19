<template lang="pug">
#report-wrapper
  #report-title.k-report-title Valley Event Report
  #contentwrapper.k-body-container
    v-placeholder
    template(v-for="(pane, index) of panes")
      v-pane(
        :key="pane.title ? pane.title : pane.key"
      )
        h2(v-if="pane.title") {{ pane.title }}
        component(
          :is="pane.component"
          v-bind="pane.params"
        )
      v-placeholder(:key = "pane.title ? pane.title + '-placeholder': pane.key + '-placeholder'")
</template>

<script>
export default {
  name: 'Report',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Generic Report'
    },
    panes: {
      type: Array,
      required: false,
      default: function () { return [] }
    }
  }
}
</script>

<style lang="stylus" scoped>

.k-report-title
  font-family Raleway, HelveticaNeue, "Helvetica Neue", Helvetica
  font-size 3rem
  font-weight 600
  font-variant-caps small-caps
  border-bottom-width 3px
  border-bottom-style solid
  border-color WhiteSmoke
  color WhiteSmoke
  width 100%
  text-align center
  letter-spacing .2rem

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

.k-table-title
  font-size 2em

</style>
