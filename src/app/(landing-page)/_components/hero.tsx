import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-[450px] grid grid-cols-2 py-12  gap-y-4">
        <div className="w-full h-full flex flex-col justify-start gap-y-4">
          <h2 className="text-7xl font-bold text-start">
            Scheduling infrastructure for everyone.
          </h2>

          <p className="text-xl text-start">
            Meet CalanderX, the event-juggling scheduler for everyone. Focus on
            meeting, not making meetings. Free for individuals.
          </p>

          <Button className="bg-[#181818] min-w-[100px] w-fit h-[50px]   text-white">
            Start Free Trial
          </Button>
        </div>

        <div className="w-full h-full flex items-center justify-center "></div>
      </div>

      <div className="w-full h-[100px] items-center flex flex-col gap-y-4">
        <span className=" text-2xl">powered by </span>
        <div className="w-full h-[70px] bg-yellow-400"></div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
