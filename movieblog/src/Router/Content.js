import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const router = [
  {
    path: "/home",
    component: require("../components/Home/index").default,
    name: "home",
  },
  {
    path: "/detail",
    component: require("../components/Movie/Detail").default,
    name: "detail",
  },
];

console.log(router);

const Content = () => {
  return (
    <BrowserRouter>
      <Switch>
        {router.map((route) => {
          <Route
            path={route.path}
            render={() => <route.component />}
            key={route.name}
          />;
        })}
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Content;
