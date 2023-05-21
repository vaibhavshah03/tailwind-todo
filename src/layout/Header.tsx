import Link from "next/link";
import { Modal } from "../components/";
import { useState } from "react";
import { TodoModal } from "../components/TodoModal/TodoModal";

export default function Header() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal
        className="w-full max-w-3xl h-fit bg-white rounded-[20px] py-6 sm:py-10 px-8"
        open={modal}
        onClose={() => setModal(false)}
      >
        <TodoModal />
      </Modal>
      <div className="flex w-full flex-row justify-between items-center">
        <Link href={"/"}>
          <button className="text-3xl text-brown font-semibold">todo</button>
        </Link>

        <button className="text-5xl text-brown" onClick={() => setModal(true)}>
          +
        </button>
      </div>
    </>
  );
}
