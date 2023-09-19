import { FC } from "react";

import { MainPage } from "pages/Main";
import { SearchPage } from "pages/Search";
import { OrdersPage } from "pages/Orders";

export interface IRoute {
  path: string;
  title: string;
  component: FC;
}

const dashboardRoutes = {
  path: "/",
  title: "Главная",
  component: MainPage,
};

const searchRoutes = {
  path: "/search",
  title: "Поиск детали",
  component: SearchPage,
};

const ordersRoutes = {
  path: "/orders",
  title: "Заказы",
  component: OrdersPage,
};

export const accountRoutes: IRoute[] = [
  dashboardRoutes,
  searchRoutes,
  ordersRoutes,
];

export const menuItems: IRoute[] = [
  dashboardRoutes,
  searchRoutes,
  ordersRoutes,
];
