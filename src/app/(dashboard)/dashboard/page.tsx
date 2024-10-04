import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
  return (
    <div className="w-full min-h-screen h-fit ">
      <div className="w-full h-[70px] border-b ">
        <MaxWidthWrapper className="md:px-4 h-full flex items-center justify-start gap-x-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Events type</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
