import React from "react";

const navigation = {
  main: [
    // { name: "About", href: "#" },
    // { name: "Blog", href: "#" },
    // { name: "Jobs", href: "#" },
    // { name: "Press", href: "#" },
    // { name: "Accessibility", href: "#" },
    // { name: "Partners", href: "#" },
  ],
  social: [
    // social items...
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {/* main navigation items */}
        </nav>
        <div className="mt-16 md:flex md:items-center md:justify-center lg:justify-center">
          <div className="flex space-x-6 md:order-2">
            <img
              src="https://res.cloudinary.com/djlx5smmq/image/upload/v1684349648/2023-svdg_kedbgx.svg"
              alt="UACH"
              className="h-32 pb-4 w-auto mx-auto" // Add mx-auto to center the image
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center space-x-10">
          {/* social icons */}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          Derechos reservados &copy; {new Date().getFullYear()} Universidad
          Autónoma de Chihuahua.
        </p>
      </div>
    </footer>
  );
}
