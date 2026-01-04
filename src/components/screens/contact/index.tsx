import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SOCIALS } from "@/consts/social-links";
import me from "../../../../public/me.jpg";
import me1 from "../../../../public/me1.jpg";

const ContactScreen = () => {
  return (
    <div className="flex min-h-dvh items-center justify-center py-6">
      <Container>
        <div className="relative mx-auto w-full max-w-xl rounded-sm bg-blue-100 shadow-sm shadow-gray-300">
          <div className="relative h-40 min-w-40">
            <Image
              src={me1}
              alt="img"
              fill
              loading="eager"
              className="object-cover"
              priority
              placeholder="blur"
            />
          </div>
          <div className="xs:top-20 xs:size-[130px] absolute top-24 left-1/2 size-24 -translate-x-1/2 overflow-hidden rounded-full bg-white p-1">
            <div className="relative size-full overflow-hidden rounded-full">
              <Image
                placeholder="blur"
                src={me}
                alt="img"
                fill
                loading="eager"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-16 px-4 pb-6">
            <h1 className="xs:text-2xl text-center text-xl font-semibold text-nowrap">
              Hooman Shahidi
            </h1>
            <h2 className="xs:text-xl text-center text-base text-nowrap text-gray-500">
              Professional Photographer
            </h2>
            <div className="mt-6 flex justify-evenly">
              {SOCIALS.map((soc) => {
                return (
                  <a target="_blank" className="xs:size-6 size-4" key={soc.link} href={soc.link}>
                    <soc.icon width="inherit" height="inherit" />
                  </a>
                );
              })}
            </div>
            <hr className="my-5 border-gray-400" />
            <div className="flex flex-col">
              <a
                role="button"
                className="bg-primary xs:text-base text-primary-foreground mx-auto rounded-sm px-8 py-2 text-sm"
                href="mailto:hooman.visuals@gmail.com"
              >
                Contact Me
              </a>
              <span className="mt-2 text-center text-xs">hooman.visuals@gmail.com</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactScreen;
