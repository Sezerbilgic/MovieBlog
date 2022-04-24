const router = [
  {
    path: "/home",
    component: require("../components/Home/index").default,
    name: "home",
  },
  {
    path: "/detail/:id",
    component: require("../components/Movie/Detail").default,
    name: "detail",
  },
];

export default router;
