import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About | Nirbhay Ganorkar",
  description:
    "Learn more about Nirbhay Ganorkar, a frontend developer focused on building performant, scalable, and thoughtful digital experiences.",
};

export default function AboutPage() {
  return <AboutClient />;
}
