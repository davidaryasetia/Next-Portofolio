export default function Field({ label, name, type, className }) {
  const addClassName = className ? `${className}` : "";
  const formControlClassName = `bg-transparent border border-primarygray-300 py-2 px-8 w-full outline-none ${addClassName}`;
  return (
    <div className="mb-6">
      <label htmlFor="name" className="block mb-1 text-sm font-semibold">
        {label}
      </label>
      {type === "text" && (
        <input
          type="text"
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}
      {type === "textarea" && (
        <textarea name={name} id={name} className={formControlClassName} />
      )}
    </div>
  );
}
