import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from './../components/Landing.vue'
import Login from './../views/Login.vue'
import Register from './../views/register.vue'
import Dashboard from './../views/Dashboard.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
        { path: '/', name : 'Home',component: Landing },
        { path: '/login', name: 'Login',component: Login },
        { path: '/register', name: 'Register',component: Register },
        { path : '/dashboard', name: 'Dashboard',component: Dashboard,  
        meta: {
            authRequired: true,
        }, 
    },
]

const router = new VueRouter({mode : 'history',routes})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next({
                path: '/',
            });
        }
    } else {
        next();
    }
});
export default router