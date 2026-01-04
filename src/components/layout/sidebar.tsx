import { DialogTitle } from "@radix-ui/react-dialog";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LINKS } from "@/consts/nav-links";
import { SOCIALS } from "@/consts/social-links";
import NavLink from "../nav-link";

export function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="mr-auto cursor-pointer md:hidden">
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <DialogTitle>
            <Image
              src="/logo2.png"
              alt="logo img"
              sizes="100vw"
              style={{
                width: 250,
                height: "auto",
              }}
              width={351}
              height={87}
            />
          </DialogTitle>
        </SheetHeader>

        <div className="mt-5 flex flex-col items-center gap-8 px-8">
          {LINKS.map((li) => {
            return (
              <SheetClose asChild key={li.link}>
                <NavLink className="w-fit text-lg" href={li.link}>
                  {li.title}
                </NavLink>
              </SheetClose>
            );
          })}
        </div>

        <SheetFooter>
          <div className="mb-6 flex items-center justify-evenly">
            {SOCIALS.map((soc) => {
              return (
                <a target="_blank" key={soc.link} href={soc.link}>
                  <soc.icon fill="black" width={soc.size} height={soc.size} />
                </a>
              );
            })}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
