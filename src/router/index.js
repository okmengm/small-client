import Vue from "vue";
import VueRouter from "vue-router";

//引入路由配置
import routes from "@/router/routes";

Vue.use(VueRouter);



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
