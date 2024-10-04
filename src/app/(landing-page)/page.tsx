import type { FC } from "react";
import Hero from "./_components/hero";
import Header from "@/components/header";

const Page: FC = () => {
  return (
    <div>
      <Header />
      <div className="w-full mt-[70px]   h-screen">
        <Hero />
      </div>
    </div>
  );
};

export default Page;
