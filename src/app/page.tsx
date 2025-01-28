import { AppHeader } from "@/components/layout/headers/AppHeader";
import { HomePage } from "@/components/layout/home/HomePage";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <AppHeader />
      <hr />
      <HomePage />
    </div>
  );
}
