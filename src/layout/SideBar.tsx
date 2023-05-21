import cx from "clsx";
import { tags } from "../config";
import Image from "next/image";

export default function SideBar() {
  return (
    <div className={cx("pt-0 w-full")}>
      <div className={cx("md:hidden grid grid-cols-2 sm:grid-cols-4", " ")}>
        {tags.map((tag) => (
          <button key={tag.label} className="rounded-md py-2">
            <div className="flex flex-row space-x-2 items-center">
              <div className={cx("p-3.5 rounded-full", tag.className)}></div>
              <span className="text-sm text-brown">{tag.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div
        className={cx(
          "hidden md:flex flex-col space-y-6",
          "md:px-0 md:pt-6 md:space-y-4 md:flex-start md:flex-col ",
          " "
        )}
      >
        {tags.map((tag) => (
          <button key={tag.label} className="rounded-md py-2">
            <div className="flex flex-row space-x-0.5 md:space-x-2 items-center">
              <div
                className={cx("md:p-3.5 p-2.5 rounded-full", tag.className)}
              ></div>
              <span className="text-sm text-brown">{tag.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="hidden md:flex gap-1 pt-8 items-center">
        <input className="my-checkbox" type="checkbox"></input>
        <label className="text-brown/70 text-sm">Hide Done Tasks</label>
      </div>
      <div className="pt-24 hidden md:block">
        <Image
          src="/assets/Untitled.png"
          width={160}
          height={180}
          alt="illustration"
        />
      </div>
    </div>
  );
}
