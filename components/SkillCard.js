/* eslint-disable @next/next/no-img-element */
export default function SkillCard({ name, level, image, alt, imageClassName }) {
  const addImageClassName = imageClassName ? `${imageClassName}` : "";
  return (
    <>
      <div className="bg-white shadow-skill rounded-lg p-6 flex items-center">
        <img src={image} alt={alt} className={`mr-6 ${addImageClassName}`} />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-400 font-semibold">{level}</p>
        </div>
      </div>
    </>
  );
}
