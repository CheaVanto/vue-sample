import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './../views/dashboard'
import CreateUser from './../views/user/create'
import ListUser from './../views/user/list'
import UpdateUser from './../views/user/update'
import NotFound from './../views/not-found'

Vue.use(VueRouter)

// const needLogin = (to, from, next) => {
//     if (!Vue.$cookies.get('accessToken')) {
//         return router.push({ name: 'login' });
//     }
//     return next();
// }

// const noNeedLogin = (to, from, next) => {
//     if (Vue.$cookies.get('accessToken')) {
//         return router.push({ name: 'dashboard' });
//     }
//     return next();
// }

const routes = [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/user', name: 'list-user', component: ListUser },
    { path: '/user/create', name: 'create-user', component: CreateUser },
    { path: '/user/update/:id', name: 'update-user', component: UpdateUser },

    // not found page 
    { path: '/**', name: 'notfound', component: NotFound },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router