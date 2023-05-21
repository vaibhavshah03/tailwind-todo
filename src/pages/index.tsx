import { Inter } from "next/font/google";
import Link from "next/link";
import cx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="snap-y no-scrollbar snap-mandatory overflow-scroll h-screen scroll-smooth">
        <div
          id="landing-page"
          className="snap-start scroll-smooth bg-yellow lg:bg-white h-screen "
        >
          <div className="h-screen overflow-hidden flex lg:flex-col justify-center lg:justify-between items-center">
            <motion.div
              animate={{ translateY: -4 }}
              transition={{
                from: -180,
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1.5,
              }}
            >
              <Image
                className="hidden lg:flex lg:rotate-180 lg:-translate-x-80"
                src={"/assets/illustration1.png"}
                alt="illustration1"
                width={200}
                height={200}
              ></Image>
            </motion.div>
            <div className="flex text-center justify-center items-center">
              <motion.div
                animate={{ translateX: 100 }}
                transition={{
                  from: 0,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1.5,
                }}
                className="flex text-center justify-center items-center font-semibold text-brown text-8xl"
              >
                -
              </motion.div>
              <span className="font-semibold text-9xl text-brown tracking-wide ">
                <a className="hover:snap-end" href="#about">
                  todo
                </a>
              </span>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              animate={{ translateY: 0 }}
              transition={{
                from: 180,
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1.5,
              }}
            >
              <Image
                className="hidden lg:flex lg:translate-x-96"
                src={"/assets/illustration3.png"}
                alt="illustration3"
                width={160}
                height={160}
              ></Image>
            </motion.div>
          </div>
        </div>
        <div
          id="about"
          className="scroll-smooth snap-start flex flex-col items-center h-screen justify-center"
        >
          <div className="w-full text-center">
            <span className="about-todo text-blue">t</span>
            <span className="about-todo text-pink">o</span>
            <span className="about-todo text-green">d</span>
            <span className="about-todo text-purple">o</span>
          </div>
          <div
            className={cx(
              "block w-full max-w-md  mt-8 px-4 ",
              "sm:mt-10",
              "font-light tracking-wider text-brown text-center text-md"
            )}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et
          </div>
          <div className="m-6"></div>
          <Link href={"/homepage"} className="">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={cx(
                "py-2 px-6 w-32 rounded-lg ",
                "text-xs font-medium",
                "bg-brown text-white",
                "hover:shadow-sm hover:shadow-brown"
              )}
            >
              Get Started
            </motion.button>
          </Link>
          <div className="mt-24">
            <Image
              className=""
              height={310}
              width={300}
              alt="illustration"
              src="/assets/illustrations.png"
            />
          </div>
          <div className="bg-yellow w-full max-w-xs h-fit flex flex-col space-y-0.5 rounded-lg p-4">
            <div className="flex flex-row justify-between items-center">
              <div className="line-through text-brown font-medium">
                Download todo app
              </div>
              <button className="w-8 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="stroke-slate-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>
            </div>
            <div className=" pt-3 line-through text-brown text-xs">
              the first step for better life
            </div>
            <div className="flex justify-between">
              <div className="flex flex-row gap-1 pt-4 items-center mb-1 ">
                <button className="rounded-full bg-pink p-3"></button>
                <button className="rounded-full bg-purple p-3"></button>
              </div>

              <div className="flex items-center gap-1">
                <input type="checkbox" className="my-checkbox" />
                <p className="text-brown text-xs text-center">Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
