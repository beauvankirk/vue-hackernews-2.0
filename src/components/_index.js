import Header from './Header'
import HeaderItem from './Header/HeaderItem'
import Sidebar from './Sidebar'
import Pane from './Pane'
import Placeholder from './Placeholder'
import Report from './Report'
import PlotStack from './Charting/PlotStack'
import Grid from './Charting/Grid'
import PlotReliabilityMargin from './Charting/Plots/PlotReliabilityMargin'
import PlotValleyOverview from './Charting/Plots/PlotValleyOverview'
import PlotGroupGen from './Charting/Plots/PlotGroupGen'
import PlotConstraints from './Charting/Plots/PlotConstraints'
import AxisHorizontal from './Charting/AxisHorizontal'
import AxisVertical from './Charting/AxisVertical'
import TimingGraph from './Charting/TimingGraph'
import ValleyTable from './Tables/ValleyTable'
import Description from './Description'
import Bolt from './Graphics/Ercot/Bolt'
import Tester from './Tester'
import Hello from './Hello'

function bootstrap (...components) {
  let entries = {}

  components.forEach(component => {
    Object.keys(component).forEach(key => {
      entries[`V${key}`] = component[key]
    })
  })

  return entries
}

export default bootstrap(
  Header,
  HeaderItem,
  Sidebar,
  Pane,
  Placeholder,
  PlotStack,
  Report,
  Grid,
  PlotReliabilityMargin,
  PlotValleyOverview,
  PlotGroupGen,
  PlotConstraints,
  AxisHorizontal,
  AxisVertical,
  TimingGraph,
  ValleyTable,
  Description,
  Bolt,
  Tester,
  Hello
)
