import classNames from "classnames";

export default function NavItem({ href, scheme, children }) {
  const schemes = {
    light: "text-white text-opacity-60 hover:text-opacity-100",
    dark: "text-black",
  };

  const pickedScheme = schemes[scheme];

  return (
    <>
      <li>
        <a
          href={href}
          className={classNames(
            "text-lg font-semibold Stransition",
            pickedScheme
          )}
        >
          {children}
        </a>
      </li>
    </>
  );
}
