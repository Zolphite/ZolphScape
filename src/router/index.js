import { createWebHistory, createRouter } from "vue-router";
// import Portal from "@/views/Portal.vue";
// import Register from "@/views/Register.vue";
// import Login from "@/views/Login.vue";
import home from "@/views/Home.vue"
import about from "@/views/About.vue"
import register from "@/views/Register.vue"
import login from "@/views/Login.vue"
import explore from "@/views/Explore.vue"
import profile from "@/views/Profile.vue"
import users from "@/views/Users.vue"

import fb from '../utilities/firebase'

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/about",
    name: "About",
    component: about,
  },
  {
    path: "/register",
    name: "Register",
    component: register,
  },
  {
    path: "/login",
    name: "Login",
    component: login,
  },
  {
    path: "/explore",
    name: "Explore",
    component: explore,
    // meta: { requiresAuth: true },

  },
  {
    path: "/users",
    name: "Users",
    component: users,
    // meta: { requiresAuth: true },

  },
  {
    path: "/profile/:user_id",
    name: "Profile",
    component: profile,
    // meta: { requiresAuth: true },
    props: true,
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: Login,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !await fb.getCurrentUser()) {
    next('/login')
  } else if (requiresAuth && !currentUser) {
    next()
  } else {
    next()
  }
})
export default router;