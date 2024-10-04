import SideBar from "./_components/sidebar";

interface Props {
  children: React.ReactNode;
}

export default function AuthLaout({ children }: Props) {
  return (
    <div>
      <SideBar />
      <div className="ml-80 ">{children}</div>
    </div>
  );
}
