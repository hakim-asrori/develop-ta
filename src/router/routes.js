import auth from "./services/auth";

export default [
  ...auth,
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/my-profile",
    name: "My Profile",
    component: () => import("../pages/MyProfile.vue"),
  },
  {
    path: "/articles",
    name: "Article",
    component: () => import("../pages/Article.vue"),
  },
  {
    path: "/experts",
    name: "Expert",
    component: () => import("../pages/Expert.vue"),
  },
  {
    path: "/company-members",
    name: "Company Member",
    component: () => import("../pages/CompanyMember.vue"),
  },
];
