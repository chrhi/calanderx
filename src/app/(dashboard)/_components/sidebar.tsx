import { Button } from "@/components/ui/button";
import { CalendarDays, Folder, Swords, Zap } from "lucide-react";

const SIDEBAR_NAVIGATIONS = [
  {
    label: "Collect",
    items: [
      {
        name: "Events type",
        url: "/",
        icon: Zap,
      },

      {
        name: "Availability",
        url: "/Availability",
        icon: Swords,
      },
    ],
  },
  {
    label: "Manage",
    items: [
      {
        name: "Bookings",
        url: "/bookings",
        icon: Folder,
      },
    ],
  },
  {
    label: "Looks",
    items: [
      {
        name: "Calander",
        url: "/calander",
        icon: CalendarDays,
      },
    ],
  },
];

export default function SideBar() {
  return (
    <div className="w-80 h-screen fixed top-0 bottom-0 left-0 border-r flex flex-col   bg-[#f9fafb]">
      <div className="w-full h-[70px] border-b flex items-center px-8 justify-start">
        <span className="text-xl font-extrabold ">Aurwan</span>
      </div>
      <div className="w-full flex flex-col gap-y-4 h-fit px-8">
        {SIDEBAR_NAVIGATIONS.map((item) => {
          return (
            <div key={item.label} className="w-full h-fit my-4">
              <h2 className="text-gray-500 my-2 text-sm">{item.label}</h2>

              <div className="flex flex-col gap-y-1">
                {item.items.map((link) => {
                  return (
                    <Button
                      key={link.name}
                      variant={"ghost"}
                      className="w-full flex items-center justify-start text-[#181818] "
                    >
                      <link.icon className="mr-2 w-4 h-4" /> {link.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
