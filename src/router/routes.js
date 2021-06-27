
  const routes=[
  {
    path: "/",  //首页
    name: "Home",
    component: () => import( "@/views/Home"),
  },
  {
    path: "/login", //登录
    name: "Login",
    component: () => import( "@/views/Login"),
  },
  {
    path: "/register", //注册
    name: "Register",
    component: () => import( "../views/Register"),
  },
  {
    path: "/search/:keyword", //搜索
    name: "Search",
    component: () => import( "../views/Search"),
  },
];

export default routes
