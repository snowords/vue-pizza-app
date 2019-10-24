import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Guide from '../components/about/Guide'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      // 'guide': Guide,
      // 'delivery': Delivery,
      // 'history': History,
    }
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../components/Menu')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../components/Admin'),
    // 路由独享守卫

    // beforEnter: (to,from,next) => {
    //   alert("非登录页面，不能访问此页面");
    //   // next('/login');
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/Register')
  },
   // 二级路由
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/about/About'),
    children: [
      {
        path: '/contact',
        name: 'contact',
        component: () => import('../components/about/Contact')
      },
      {
        path: '/history',
        name: 'history',
        component: () => import('../components/about/History')
      },
      {
        path: '/delivery',
        name: 'delivery',
        component: () => import('../components/about/Delivery')
      },
      {
        path: '/guide',
        name: 'guide',
        component: () => import('../components/about/Guide')
      },
    ]
  },
 
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // router控制滚动行为
  // scrollBehavior(to,from,savePosition){
  //   // return { x: 0, y: 100}
  //   // return { selector : '.btn'}
  //   if(savePosition){
  //     return savePosition;
  //   }else{
  //     return { x: 0, y: 100}
  //   }
  // }
})
// router.beforeEach((to,from,next) => {
//   if(to.path == "/login" || to.path == "/register"){
//     next();
//   }else{
//     alert("还没有登录，请先登录~");
//     next('/login');
//   }
// })


export default router
