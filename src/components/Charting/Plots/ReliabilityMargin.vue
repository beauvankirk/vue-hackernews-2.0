
<template>
  <div class="k-plotset">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'PlotSetComponent'

}
</script>

<style lang="stylus" scoped>

.k-plotset
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
