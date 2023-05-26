import cx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useTodo } from "../store";
import { ITodo } from "../store/todo/reducer";

type Props = {
  data: ITodo;
};
export default function Card({ data }: Props) {
  const { title, desc } = data;
  const [toggle, setToggle] = useState<boolean>(false);
  const { dispatch } = useTodo();

  const onDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: data.id });
  };

  const onEdit = () => {
    dispatch({ type: "SET_PRE_EDIT", payload: data.id });
  };

  return (
    <>
      <div className="flex flex-col h-fit w-full bg-yellow px-5 py-4 space-y-4 rounded-sm ">
        <div className="relative flex flex-row items-center justify-between">
          <span className="text-brown font-semibold">{title}</span>
          <button
            type="button"
            className=""
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
          {toggle && (
            <div
              className={cx(
                "absolute right-0 top-4",
                "rounded-md bg-white",
                "flex z-20 mt-2 w-full max-w-[12rem] h-fit shadow-lg ocus:outline-none"
              )}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <button
                  onClick={onEdit}
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  Edit
                </button>
                <button
                  onClick={onDelete}
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
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
        </div>{" "}
      </div>
    </>
  );
}
