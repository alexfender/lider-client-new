import React from "react";
import { Route, Routes } from "react-router-dom";

import { AccountLayout } from "layout/AccountLayout";

import { IRoute, accountRoutes } from "../routes";

const childRoutes = (routes: IRoute[]) =>
  routes.map(({ path, component: Component }, index) => (
    <Route key={index} path={path} element={<Component />} />
  ));

export const RoutesRender = () => (
  <AccountLayout>
    <Routes>
      {childRoutes(accountRoutes)}
      <Route path="*" element={<>404</>} />
    </Routes>
  </AccountLayout>
);
