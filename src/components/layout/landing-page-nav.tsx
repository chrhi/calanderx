"use client";

import React, { useState } from "react";
import { Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const LandingPageNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      title: "الرئيسية",
      href: "#home",
      description: "الصفحة الرئيسية للموقع",
    },
    {
      title: "حولنا",
      href: "#about",
      description: "تعرف على قصتنا ورؤيتنا",
    },
    {
      title: "المميزات",
      href: "#features",
      description: "اكتشف جميع المميزات المتاحة",
    },
    {
      title: "الأسعار",
      href: "#pricing",
      description: "خطط الأسعار والاشتراكات",
    },
  ];

  const services = [
    {
      title: "حجز المواعيد",
      description: "احجز موعدك بسهولة وسرعة",
      href: "#appointments",
    },
    {
      title: "إدارة العملاء",
      description: "أدر قاعدة عملائك بكفاءة",
      href: "#customers",
    },
    {
      title: "التقارير",
      description: "تقارير مفصلة عن أعمالك",
      href: "#reports",
    },
    {
      title: "الإشعارات",
      description: "تنبيهات فورية للمواعيد",
      href: "#notifications",
    },
  ];

  return (
    <nav
      className="bg-white/80 backdrop-blur-md border-b border-amber-100 sticky top-0 z-50"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Right side in RTL */}
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-amber-500 ml-2" />
            <span className="text-xl font-bold text-gray-900">حجزي</span>
          </div>

          {/* Desktop Navigation - Center-left */}
          <div className="hidden md:block">
            <NavigationMenu dir="rtl">
              <NavigationMenuList className="space-x-reverse space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-amber-600 bg-transparent hover:bg-amber-50 data-[state=open]:bg-amber-50">
                    الخدمات
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {services.map((service) => (
                        <NavigationMenuLink
                          key={service.href}
                          href={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-600 focus:bg-amber-50 focus:text-amber-600"
                        >
                          <div className="text-sm font-medium leading-none">
                            {service.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors focus:bg-amber-50 focus:text-amber-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Auth Buttons - Left side */}
          <div className="hidden md:flex items-center space-x-reverse space-x-3">
            <Button variant="ghost">تسجيل الدخول</Button>
            <Button>ابدأ الآن</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center justify-start">
                    <Calendar className="h-6 w-6 text-amber-500 ml-2" />
                    <span className="text-lg font-bold text-gray-900">
                      حجزي
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 space-y-4">
                  {/* Mobile Navigation Links */}
                  <div className="space-y-2">
                    {navigationItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>

                  {/* Mobile Services */}
                  <div className="border-t pt-4">
                    <h3 className="px-3 text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      الخدمات
                    </h3>
                    <div className="space-y-1">
                      {services.map((service) => (
                        <a
                          key={service.href}
                          href={service.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.title}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Auth Buttons */}
                  <div className="border-t pt-4 space-y-2">
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>
                      تسجيل الدخول
                    </Button>
                    <Button onClick={() => setIsOpen(false)}>ابدأ الآن</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingPageNavigation;
