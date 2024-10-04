import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="w-full h-[70px] border-b bg-white shadow fixed top-0">
      <MaxWidthWrapper className="h-full">
        <div className="w-full h-full flex items-center justify-between">
          <div className="w-fit h-full flex items-center justify-start gap-x-4 ">
            <span className="text-xl font-bold ">CalanderX</span>
          </div>

          <div className="w-fit h-full flex items-center justify-end gap-x-4">
            <Button>sign in</Button>
            <Button className="bg-[#181818] text-white">
              strat free trial
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
