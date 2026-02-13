import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PresetScreen from "@/components/screens/preset-detail";
import { PRESETS } from "@/lib/presets";

// Pre-generate all preset routes
export async function generateStaticParams() {
  return PRESETS.map((img) => ({
    id: String(img.id),
  }));
}

// Dynamic metadata per preset
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const preset = PRESETS.find((img) => String(img.id) === id);

  if (!preset) {
    return {
      title: "Preset not found",
      description: "This preset could not be found.",
    };
  }

  return {
    title: preset.name,
    description: preset.name,
  };
}

// Page component
export default async function PresetPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const preset = PRESETS.find((img) => String(img.id) === id);

  if (!preset) return notFound();

  return <PresetScreen preset={preset} />;
}
