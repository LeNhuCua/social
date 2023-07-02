import React from "react";

const Home = React.lazy(() => import("../pages/home/Home"));
const ChatApp = React.lazy(() => import("../pages/ChatApp"));


//-----KHÁCH HÀNG -------

// const Home = React.lazy(() => import("../views/customer/home/Home"));


const routes = [
  //khách hàng
  { path: "/", exact: true, name: "Trang chủ", element: Home },
  { path: "/info", exact: true, name: "Trang chủ", element: ChatApp },
  

];

export default routes;
