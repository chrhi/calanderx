import MaxWidthWrapper from "@/components/max-width-wrapper";

interface Props {
  children: React.ReactNode;
}

export default function AuthLaout({ children }: Props) {
  return (
    <div>
      <div className="w-full h-[70px] border-b bg-white ">
        <MaxWidthWrapper className="h-full">
          <div className="w-full h-full flex items-center justify-start ">
            <span className="text-xl font-bold">Aurwan</span>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="w-full h-[calc(100vh-70px)] flex flex-col items-center bg-[#f9fafb]">
        <div className="w-full h-full ">{children}</div>
      </div>
    </div>
  );
}
