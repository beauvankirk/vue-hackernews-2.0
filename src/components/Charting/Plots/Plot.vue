<template lang="pug">
g#plot-wrapper
  text#plot-title {{ props.title }}
  g#plot-block
    g#plot-body
      g#grids
        grid#horizontal-grids(
          v-for="(grid, index) of grids.horizontal"
          :type="grid.type"
          :variant="horizontal"
        )
        grid#vertical-grids(
          v-for="(grid, index) of grids.vertical"
          :type="grid.type"
          :variant="vertical"
        )
      g#axes
        axis#horizontal-axis(
          v-for="(axis, index) of axes.horizontal"
          :type="axis.type"
          :variant="horizontal"
        )
        axis#vertical-axis(
          v-for="(axis, index) of axes.vertical"
          :type="axis.type"
          :variant="vertical"
        )
      g#series
        seriesgroup(
          v-for="(group, index) of seriesGroups"
          :params="group"
        )
    legend(
      v-if="legendIncluded"
      :params="seriesGroups"
    )
</template>
<script>
export default {
  name: 'Plot',
  props: {
    title: {
      type: String,
      requried: false,
      default: ''
    },
    grids: {
      type: Object,
      required: false,
      default: {}
    },
    axes: {
      type: Object,
      required: false,
      default: {}
    },
    seriesGroups: {
      type: Object,
      required: false,
      default: {}
    },
    useLegend: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>

#plot
  margin 20px 100px
  border-radius 3px
  min-width 200px
  height auto
  text-align center
  border-color rgba(255,255,255,0.8)
  border 20px
  background rgba(255,255,255,0.20)
  text-align center

</style>
