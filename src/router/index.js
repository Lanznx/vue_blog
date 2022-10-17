// this is router
import Vue from 'vue'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

// Nav Guards
router.beforeEach((to, from, next) => {

    // Check for requiresAuth guard
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Check if NOT logged in
        if (!firebase.auth().currentUser) {
            // Go to login
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            // Proceed to route
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        // Check if logged in
        if (firebase.auth().currentUser) {
            // Go to login
            next({
                path: '/dashboard',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            // Proceed to route
            next()
        }
    } else {
        // Proceed to route
        next()
    }
}

)

export default router
