"use client";

import Link from "next/link";
import Image from "next/image";
import { SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetTitle,
  SheetClose,
  SheetTrigger,
  SheetContent,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        return (
          <SheetClose asChild key={link.route}>
            <Link
              href={link.route}
              className={`flex items-center justify-start gap-4 bg-transparent p-4 ${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
                className={`${!isActive && "invert-colors"}`}
              />

              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {link.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="menu"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="background-light900_dark200 no-scrollbar overflow-y-auto border-none"
      >
        <SheetTitle className="hidden">Menu</SheetTitle>
        <SheetDescription className="hidden">Menu list</SheetDescription>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            alt="DevOverflow"
            width={23}
            height={23}
          />

          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            Dev <span className="text-primary-500">Overflow</span>
          </p>
        </Link>

        <div className="space-y-8">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          {/* sign-in / sign-up */}
          <SignedOut>
            <div className="flex flex-col gap-3">
              {/* Sign-in */}
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary no-focus min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>

              {/* Sign-up */}
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 no-focus min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
