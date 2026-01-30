import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import Link from "next/link";

const galleryImageIds = [
  "gallery-1",
  "gallery-2",
  "gallery-3",
  "gallery-4",
  "gallery-5",
  "gallery-6",
];

const captions: { [id: string]: string } = {
  "gallery-1": "Lush green fields post-monsoon.",
  "gallery-2": "Biochar-enriched soil ready for planting.",
  "gallery-3": "A farmer tending to their crops.",
  "gallery-4": "Early biochar prototype in action.",
  "gallery-5": "Training session with a local Self-Help Group.",
  "gallery-6": "The future we're working for.",
};

export function GallerySection() {
  const galleryImages = galleryImageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

  return (
    <section id="gallery" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Through Our Lens
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into our world, from the soil to the community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => image && (
            <div key={image.id} className="group relative aspect-video overflow-hidden rounded-lg shadow-md">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-0 left-0 p-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {captions[image.id] || image.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/gallery">See More in the Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
