import Home from '@/components/HomePage.vue'
import DailyItems from '@/components/DailyItems.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/home', name: 'Home', component: Home },
  { path: '/dailies', name: 'Dailies', component: DailyItems }
]

export default routes
