import { Metadata } from "next";
import { notFound } from "next/navigation";

import PhotoScreen from "@/components/screens/photo-detail";
import { IMAGES } from "@/lib/images";

export async function generateStaticParams() {
  return IMAGES.map((img) => ({
    id: String(img.id),
  }));
}

// Dynamic metadata per preset
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const photo = IMAGES.find((img) => String(img.id) === params.id);

  if (!photo) {
    return {
      title: "Preset not found",
      description: "This preset could not be found.",
    };
  }

  return {
    title: photo.name,
    description: photo.name,
  };
}

export default async function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const photo = IMAGES.find((img) => String(img.id) === id);

  if (!photo) return notFound();

  return <PhotoScreen photo={photo} />;
}
