import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'
import Login from '../pages/Login'
import CreateGroup from '../pages/CreateGroup'


Vue.use(VueRouter)

const routes = [
    {path: "/", name: "home", component: Home },
    {path: "/dashboard", name: "dashboard", component: Dashboard },
    {path: "/register", name: "register", component: Register },
    {path: "/login", name: "login", component: Login },
    {path: "/create-group", name: "create-group", component: CreateGroup },
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router