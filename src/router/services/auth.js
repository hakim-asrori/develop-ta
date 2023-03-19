export default [
  {
    path: "/auth/register",
    name: "Register",
    component: () => import("../../pages/auth/Register.vue"),
  },
  {
    path: "/auth/login",
    name: "Login",
    component: () => import("../../pages/auth/Login.vue"),
  },
  {
    path: "/auth/level",
    name: "Register Level",
    component: () => import("../../pages/auth/RegisterLevel.vue"),
  },
  {
    path: "/auth/register/welder-member",
    name: "Register Welder Member",
    component: () => import("../../pages/auth/register/WelderMember.vue"),
  },
  {
    path: "/auth/register/company-member",
    name: "Register Company Member",
    component: () => import("../../pages/auth/register/CompanyMember.vue"),
  },
];
