import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import StudentEdit from "@/components/StudentEdit";
import StudentCreate from "@/components/StudentCreate";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/students/edit/:id",
      name: "Edit-Student",
      component: StudentEdit
    },
    {
      path: "/students/create",
      name: "Create-Student",
      component: StudentCreate
    },
    {
      path: "*",
      redirect: { name: "Home" }
    }
  ]
});
