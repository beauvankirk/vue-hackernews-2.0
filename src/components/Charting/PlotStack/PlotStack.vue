<template lang="pug">
#plotstack-wrapper
  h2#plotstack-title {{ title }}
  #plotstack-block
    svg#plotstack-container
      g#plotstack-body
        g#grids
          grid#horizontal-grids(
            v-for="(grid, index) of grids.horizontal"
            ":params"="grid"
            "variant"="horizontal"
          )
          grid#vertical-grids(
            v-for="(grid, index) of grids.vertical"
            ":params"="grid"
            "variant"="vertical"
          )
        component(
          v-for="(member,index) of members"
          ":is"="member.component"
          v-bind="member.params"
        )
        g#cursors
          cursor.saved(
            v-for="(cursor, index) of cursors.saved"
            ":position"="cursor.position"
          )
          cursor#hover(
            ":position"="cursors.hover.position"
          )
</template>

<script>
export default {
  name: 'PlotStack',
  props: {
    title: {
      type: String,
      requried: false,
      default: ''
    },
    grids: {
      horizontal: {
        type: Object,
        required: false
      },
      vertical: {
        type: Object,
        required: false
      }
    },
    members: {
      type: Array,
      required: false
    },
    cursors: {
      type: Object,
      require: false
    }
  }
}
</script>

<style lang="stylus" scoped>

#plotstack
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
