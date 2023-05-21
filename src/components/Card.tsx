import Image from "next/image";
import { useState } from "react";

export default function Card({
  // item,
  // id,
  title = "Title",
  desc = "Description",
  // onDeleteItem,
  // onUpdateItem,
}) {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col h-fit w-full bg-yellow px-5 py-4 space-y-4 rounded-sm line">
        <div className="flex justify-between">
          <span className="text-brown font-semibold">{title}</span>
          <button
            type="button"
            className="inline-flex w-full max-w-[5rem] justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={(e) => setToggle(!toggle)}
          >
            <Image
              src="/assets/svgs/ellipsis.svg"
              alt="icon"
              width={25}
              height={10}
            />
          </button>
          show
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                Account settings
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
              >
                Support
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-2"
              >
                License
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <span className="text-brown text-sm tracking-wide leading-6 font-[350]">
        {desc}
      </span>
      <div className="flex justify-between ">
        <div className="flex gap-2">
          <button className="p-3.5 bg-pink rounded-full"></button>
          <button className="p-3.5 bg-blue rounded-full"></button>
          <button className="p-3.5 bg-purple rounded-full"></button>
        </div>

        <div className="flex gap-1.5 items-center">
          <input className="my-checkbox" type="checkbox"></input>{" "}
          <label className="text-brown text-sm font-medium">Done</label>
        </div>
      </div>
    </>
  );
}
