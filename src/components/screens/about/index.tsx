import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import me2 from "../../../../public/me2.jpg";

const AboutScreen = () => {
  return (
    <div className="flex min-h-dvh items-center justify-center py-6">
      <Container>
        <div className="mx-auto w-full max-w-2xl rounded-sm bg-blue-100 px-4 py-6 sm:px-9 sm:py-14">
          <h1 className="xs:text-3xl text-2xl font-semibold uppercase md:text-5xl">
            Hooman Shahidi
          </h1>

          <div className="mt-5 grid gap-3 sm:block">
            <Image
              className="float-none me-3 aspect-16/9 w-full rounded-lg object-cover outline -outline-offset-1 outline-black/10 sm:float-start sm:w-2/5"
              width={190}
              height={260}
              alt="Hooman Shahidi img"
              src={me2}
              placeholder="blur"
              quality={100}
              sizes="100vw"
              loading="eager"
            />

            <p className="">
              I am Hooman Shahidi, also known online as HoomanVisuals. I am an automotive
              photographer and content creator based in London, Ontario. My work is dedicated to
              capturing the lines, details, and personality of every vehicle I shoot, translating a
              passion for cars into high-quality visual content.
              <br />
              Since starting in 2023, I have focused on building a style that highlights the best of
              automotive culture. I take a straightforward approach to my photography, whether I’m
              shooting at a local meet or a private session. My goal is simple: to produce clean,
              striking images that showcase the car exactly how it was meant to be seen.
            </p>
          </div>

          <div className="mt-5">
            <Link className="underline" href="/contact">
              Get in Touch
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutScreen;
