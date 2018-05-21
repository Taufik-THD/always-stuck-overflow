import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Questionpage from './views/Questionpage.vue'
import Answerpage from './views/Answerpage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questionpage
    },
    {
      path: '/questions/:id',
      name: 'answer',
      component: Answerpage
    }
  ]
})
