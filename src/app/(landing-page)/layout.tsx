import LandingPageNavigation from "@/components/layout/landing-page-nav";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <LandingPageNavigation />
      {children}
    </div>
  );
}
