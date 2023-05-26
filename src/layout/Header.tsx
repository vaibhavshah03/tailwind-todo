import Link from "next/link";
import { Modal } from "../components/";
import { TodoModal } from "../components/TodoModal/TodoModal";
import { useTodo } from "../store";

export default function Header() {
  const { dispatch, state } = useTodo();

  const openModal = () => {
    dispatch({ type: "SET_PRE_ADD" });
  };

  const closeModal = () => {
    dispatch({ type: "SET_MODAL", payload: false });
  };

  return (
    <>
      <Modal
        className="w-full max-w-3xl h-fit bg-white rounded-[20px] py-6 sm:py-10 px-8"
        open={state.modal}
        onClose={closeModal}
      >
        <TodoModal />
      </Modal>
      <div className="flex w-full flex-row justify-between items-center">
        <Link href={"/"}>
          <button className="text-3xl text-brown font-semibold">todo</button>
        </Link>

        <button className="text-5xl text-brown" onClick={openModal}>
          +
        </button>
      </div>
    </>
  );
}
