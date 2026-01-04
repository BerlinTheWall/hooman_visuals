import Image from "next/image";
import Link from "next/link";

import { SOCIALS } from "@/consts/social-links";
import { Container } from "../ui/container";

const Footer = () => {
  return (
    <div className="bg-primary text-primary-foreground py-10">
      <Container className="flex flex-col items-center gap-8 sm:flex-row">
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo3.png"
              alt="logo"
              sizes="100vw"
              style={{
                width: "auto",
                height: 25,
              }}
              width={100}
              height={20}
            />
          </Link>
        </div>
        <div className="ml-0 flex items-center gap-8 sm:ml-auto">
          {SOCIALS.map((soc) => {
            return (
              <a target="_blank" key={soc.link} href={soc.link}>
                <soc.icon fill="white" width={soc.size} height={soc.size} />
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
