/* eslint-disable @next/next/no-img-element */
export default function ProjectItems({ name, description, image, alt }) {
  return (
    <>
      <article className="text-center">
        <img src={image} className="w-full rounded-lg" alt={alt} />
        <h3 className="text-2xl font-semibold mb-1 mt-4">{name}</h3>
        <p className="text-lg text-gray-400">{description}</p>
      </article>
    </>
  );
}
