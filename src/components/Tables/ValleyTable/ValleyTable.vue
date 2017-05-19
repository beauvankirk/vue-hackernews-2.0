<template>
  <div class="k-table-div">
    <title class="k-table-title">Event Summary</title>
    <table>
      <tr>
        <td class="k-table-header">Reported Event Title</td>
        <td colspan="3">Low Valley GTC Reliability Margin 5/27/2016</td>
      </tr>
      <tr>
        <td class="k-table-header" rowspan="2">Event Time</td>
        <td rowspan="2">5/27/2016 2:00 PM</td>
        <td class="k-table-header">Submittal Time</td>
        <td>5/27/2016 2:45 PM</td>
      </tr>
      <tr>
        <td class="k-table-header k-table-update">Follow-up</td>
        <td class="k-table-update">5/27/2016 6:00 PM</td>
      </tr>
      <tr>
        <td class="k-table-header">author</td>
        <td colspan="3">Beau Van Kirk</td>
      </tr>
      <tr>
        <td class="k-table-header">Contact Info:</td>
        <td colspan="3">ShiftEngineers@ercot.com</br>512 248-6354</td>
      </tr>
      <tr>
        <td class="k-table-header" colspan="4">Event Description</td>
      </tr>
      <tr>
        <td colspan="4">At approximately 14:05, following a rapid scheduled ramp increase of the Railroad DC-Tie export from 150MW to 300MW, thermal constraints caused the valley area generation dispatch to decrease rapidly. This lead to a corresponding increase of the monitored flow on the Valley Import GTC and decrease in its Reliability Margin to a low of 95MW. Specifically, basecase overload of line S_104A and post-contingency overload caused by SCITNE28, which had conflicting shift factors, were binding in SCED with the basecase S_104A overload reaching max shadow price.</td>
      </tr>
      <tr>
        <td class="k-table-header" colspan="4">Valley GTC:</td>
      </tr>
      <tr>
        <td>Base Monitored Flow</td>
        <td>1,100 MW</td>
        <td>VSAT Limiting Contingency</td>
        <td>DCC3NEDG</td>
      </tr>
      <tr>
        <td>Post-Contingency Flow</td>
        <td>1,500 MW</td>
        <td>VSAT Stability Limit Flow</td>
        <td>1,604 MW</td>
      </tr>
      <tr>
        <td colspan="2">Reliability Margin</td>
        <td colspan="2">1,500 MW</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ValleyTable'
}
</script>

<style lang="stylus" scoped>
table
  text-align left


</style>
