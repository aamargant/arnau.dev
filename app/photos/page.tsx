import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";
import img1 from "../pic1.jpg"
import img2 from "../pic2.jpg"
import img3 from "../pic3.jpg"

const images = [
  {
    id: "1",
    src: img1,
  },
  {
    id: "2",
    src: img2,
  },
  {
    id: "3",
    src: img3,
  },
];

export const metadata: Metadata = {
  title: "Photos | Arnau Amargant",
  metadataBase: new URL("https://arnau.dev/photos"),
  description: "Explore photos taken by Arnau Amargant",
  openGraph: {
    title: "Photos | Arnau Amargant",
    url: "https://arnau.dev/photos",
    description: "Explore photos taken by Arnau Amargant",
    images:
      "https://res.cloudinary.com/arnau/image/upload/v1692635149/arnau/photos.png",
  },
};

export default function Photos() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Photos"
        description="This page is still under construction..."
      />
      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="Snowy mountains"
              width={350}
              height={800}
              className="dark:bg-primary-bg bg-secondary-bg"
            />
          ))}
        </Slide>
      </figure>
    </main>
  );
}
