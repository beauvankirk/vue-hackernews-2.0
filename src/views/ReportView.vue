<template lang="pug">
  v-report(v-bind="activeReport")
</template>

<script>
/* @flow */ 

import { mapState } from 'vuex'

export default {
  name: 'ReportView',
  computed: {
    ...mapState('reports',
      {
        activeReport: state => state.templates.active
      }
    )
  },
  beforeCreate () {
    this.$store.dispatch('hydrate', { target: 'reports' })
  }
}
</script>

