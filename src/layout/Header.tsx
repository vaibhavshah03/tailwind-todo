import Link from "next/link";
import { Modal } from "../components/";
import { TodoModal } from "../components/TodoModal/TodoModal";
import { useTodo } from "../store";
import cx from "clsx";

export default function Header() {
  const { dispatch, state } = useTodo();

  const openModal = () => {
    dispatch({ type: "SET_PRE_ADD" });
  };

  const closeModal = () => {
    dispatch({ type: "SET_MODAL", payload: false });
  };

  const filterTodo = (searchText: string) => {
    dispatch({ type: "FILTER_TODO", payload: { text: searchText } });
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
        <div className="">
          <Link href={"/"}>
            <button className="text-3xl text-brown font-semibold">todo</button>
          </Link>
        </div>
        <div className="flex w-full max-w-lg items-center space-x-6">
          <input
            type="search"
            onChange={(e) => filterTodo(e.target.value)}
            className={cx(
              "w-full border-brown rounded-md text-brown",
              "form-input focus:outline-none placeholder-brown placeholder-opacity-90"
            )}
            placeholder="Search Here..."
          />

          <button className="text-5xl text-brown" onClick={openModal}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
