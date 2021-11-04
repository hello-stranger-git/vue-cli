import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)
const routes = [
    {
        path:'/Home',
        component:()=>import('../pages/Home.vue')
    },
    {
        path:'/About',
        component:()=>import('../pages/About.vue')
    }
]

const router = new VueRouter({
    routes
}) 
export default router