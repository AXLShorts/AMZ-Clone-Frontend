import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "q4hc0jtk",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  useCdn: true, // Set to false if you need fresh data
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function fileUrl(source: any) {
  if (!source?.asset?._ref) return undefined;
  const ref = source.asset._ref;
  const parts = ref.split('-');
  
  // Handle file assets (file-id-extension)
  if (parts[0] === 'file') {
    const [, id, extension] = parts;
    return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${id}.${extension}`;
  }
  
  // Handle image assets if passed by mistake (image-id-dimensions-extension)
  if (parts[0] === 'image') {
    const [, id, , extension] = parts;
    return `https://cdn.sanity.io/images/${client.config().projectId}/${client.config().dataset}/${id}-${parts[2]}.${extension}`;
  }

  return undefined;
}
