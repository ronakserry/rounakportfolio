import type { Route } from "./+types/home";
import Start from "./start";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rounaks' portfolio" },
    { name: "description", content: "Welcome to my space" },
  ];
}

export default function Home() {
  return <Start />
}

