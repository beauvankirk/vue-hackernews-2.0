import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView'
import ReportView from '../views/ReportView'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/Home',
      component: HomeView,
      name: 'Home'
    },
    {
      path: '/Reports',
      component: ReportView,
      name: 'Reports'
    },
    {
      path: '/RTNET',
      component: ReportView,
      name: 'RTNET'
    },
    {
      path: '/RTCA',
      component: ReportView,
      name: 'RTCA'
    },
    {
      path: '/DSA',
      component: ReportView,
      name: 'DSA'
    },
    {
      path: '/SCED',
      component: ReportView,
      name: 'SCED'
    },
    {
      path: '/RUC',
      component: ReportView,
      name: 'RUC'
    },
    {
      path: '/Wiki',
      component: ReportView,
      name: 'Wiki'
    },
    {
      path: '/',
      redirect: '/Home'
    }
  ]
})
// They are essentially higher order components wrapping ItemList.vue.
