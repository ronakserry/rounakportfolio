import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("start", "routes/start.tsx"),
  route("dashboard", "routes/dashboard.tsx"), 
  route("landing","routes/landing.tsx")
] satisfies RouteConfig;