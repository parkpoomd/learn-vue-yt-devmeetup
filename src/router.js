import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import Meetups from "./components/Meetup/Meetups";
import CreateMeetup from "./components/Meetup/CreateMeetup";
import Meetup from "./components/Meetup/Meetup";
import Profile from "./components/User/Profile";
import Signup from "./components/User/Signup";
import Signin from "./components/User/Signin";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/meetups",
      name: "meetups",
      component: Meetups
    },
    {
      path: "/meetup/new",
      name: "createMeetup",
      component: CreateMeetup
    },
    {
      path: "/meetups/:id",
      name: "meetup",
      props: true,
      component: Meetup
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ],
  mode: "history"
});
