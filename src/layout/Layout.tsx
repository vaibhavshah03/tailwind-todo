import cx from "clsx";
import SideBar from "./SideBar";
import Header from "./Header";

export default function Layout({ children }: React.ComponentProps<"main">) {
  return (
    <main
      className={cx(
        "flex flex-col space-y-6",
        "md:px-16 px-4 mx-auto",
        "w-full h-screen py-4 md:py-10"
      )}
    >
      <header className="">
        <Header />
      </header>
      <section className="w-full h-full flex flex-col md:flex-row">
        <aside className="md:w-[18%] w-full">
          <SideBar />
        </aside>
        <aside className="md:w-[82%] w-full pt-6">{children}</aside>
      </section>
    </main>
  );
}
