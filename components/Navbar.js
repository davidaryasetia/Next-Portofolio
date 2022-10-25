/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import classNames from "classnames";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12 ">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav dir="horizontal" scheme="light" />
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button href="#contact" pill variant="outline-yellow">
            Contact
          </Button>
        </div>
        <div className="w-9/12 md:hidden text-right">
          <img
            src="menu.svg"
            alt="menu logo"
            className="inline-block"
            onClick={() => setOffcanvas(true)}
          />
        </div>
      </div>

      <div
        className={classNames(
          "fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition",
          offcanvas ? "right-0" : "-right-full "
        )}
      >
        <Nav dir="vertical" scheme="dark" />
      </div>
    </>
  );
}
