import type { Route } from "./+types/login";
import { Login } from "../login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Log in to your account / TACHIBANA" },
    { name: "description", content: "Welcome to log in to your account" },
  ];
}

export default function LoginPage() {
  return <Login />;
}
