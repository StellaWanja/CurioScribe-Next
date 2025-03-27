import Image from "next/image";

export default function renderImage(image: string | null) {
  if (image) {
    const imgSrc = `data:image/png;base64,${image}`;
    return (
      <Image
        src={imgSrc}
        alt="Generated Image"
        className="rounded-md m-auto"
        width={500}
        height={500}
        unoptimized
      />
    );
  }
  return null;
}
