import MaxWidthWrapper from "@/components/max-width-wrapper";

interface Props {
  children: React.ReactNode;
}

export default function AuthLaout({ children }: Props) {
  return <MaxWidthWrapper>{children}</MaxWidthWrapper>;
}
