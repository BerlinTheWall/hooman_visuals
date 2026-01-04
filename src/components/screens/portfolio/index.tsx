"use client";

import Masonry from "@/components/masonry";
import { Container } from "@/components/ui/container";
import { IMAGES } from "@/lib/images";

const PortfolioScreen = () => {
  return (
    <Container className="py-10">
      <Masonry items={IMAGES} />
    </Container>
  );
};

export default PortfolioScreen;
