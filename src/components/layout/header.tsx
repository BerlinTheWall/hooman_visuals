import Image from "next/image";
import Link from "next/link";

import { SideBar } from "./sidebar";
import NavLink from "@/components/nav-link";
import { Container } from "@/components/ui/container";
import { LINKS } from "@/consts/nav-links";
import { SOCIALS } from "@/consts/social-links";

const Header = () => {
  return (
    <header>
      <Container className="flex h-[80px] items-center">
        <SideBar />
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="logo"
              sizes="100vw"
              style={{
                width: 150,
                height: "auto",
                maxHeight: 30,
              }}
              width={100}
              height={250}
              loading="eager"
              priority
            />
          </Link>
        </div>
        <div className="ml-10 hidden grow items-center gap-8 md:flex">
          {LINKS.map((li) => {
            return (
              <NavLink href={li.link} key={li.link}>
                {li.title}
              </NavLink>
            );
          })}
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {SOCIALS.map((soc) => {
            return (
              <a target="_blank" key={soc.link} href={soc.link}>
                <soc.icon width={soc.size} height={soc.size} />
              </a>
            );
          })}
        </div>
      </Container>
    </header>
  );
};

export default Header;
