import { tags, TODO_TAGS } from "../../config";
import cx from "clsx";
import useTodoFunctions, { ITodo } from "../Todo/todoFunctions";

export const TodoModal = () => {
  const active = [
    TODO_TAGS.WORK,
    TODO_TAGS.STUDY,
    TODO_TAGS.ENTERTAINMENT,
    TODO_TAGS.FAMILY,
  ];

  return (
    <div className="">
      <div className="flex justify-between">
        <button className="text-brown text-sm">Cancel</button>
        <button
          // onClick={}
          className="bg-brown text-white text-sm px-10 py-2 rounded-[10px]"
        >
          Add
        </button>
      </div>
      <section className="flex flex-col space-y-4 mt-6">
        <fieldset>
          <label className="text-brown font-semibold text-lg">Title</label>
          <input
            // value={todoTitleText}
            type="text"
            placeholder="add a title ..."
            className="text-brown border-none placeholder-brown focus:outline-none block w-full rounded-lg sm:text-sm py-3 px-3 bg-brown/5 mt-1"
            // onChange={(e) => setTodoTitleText(e.target.value)}
          ></input>
        </fieldset>
        <fieldset>
          <label className="text-brown font-semibold text-lg">
            Description
          </label>
          <textarea
            // value={todoDescText}
            rows={5}
            placeholder="add a description ..."
            className="form-textarea border-none text-brown placeholder-brown focus:outline-none block w-full rounded-lg sm:text-sm py-3 px-3 bg-brown/5 mt-1"
            // onChange={(e) => setTodoDescText(e.target.value)}
          ></textarea>
        </fieldset>
      </section>
      <div className="mt-6">
        <label className="text-brown font-semibold text-lg">Tags</label>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-3 sm:space-x-4 sm:mb-0 mb-4 mt-4 sm:items-center">
        {tags.map((tag) => (
          <button
            key={tag.label}
            className={cx("flex items-center rounded-xl space-x-2 py-2 px-4", {
              "bg-brown/5 ": active.includes(tag.label),
            })}
          >
            <div className={cx("w-8 h-8 rounded-full", tag.className)}></div>
            <span className="text-sm text-brown">{tag.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
