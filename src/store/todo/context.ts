import { useContext } from "react";
import createStore from "../createStore";
import { TodoState, reducer } from "./reducer";

const initialState: TodoState = {
  todos: [
    {
      id: "2023-03-30T14:37:00.595Z",
      title: "helllllo",
      desc: "Desc1",
      completed: false,
      tags: ["WORK", "FAMILY"],
    },
    {
      id: "2023-03-30T14:37:01.795Z",
      title: "guuu",
      desc: "Desc2",
      completed: false,
      tags: ["ENTERTAINMENT", "STUDY"],
    },
  ],
  todoDisplay: [
    {
      id: "2023-03-30T14:37:00.595Z",
      title: "helllllo",
      desc: "Desc1",
      completed: false,
      tags: ["WORK", "FAMILY"],
    },
    {
      id: "2023-03-30T14:37:01.795Z",
      title: "guuu",
      desc: "Desc2",
      completed: false,
      tags: ["ENTERTAINMENT", "STUDY"],
    },
  ],
  filters: { tags: [], text: "", completed: false },
  todo: { desc: "", title: "" },
  modal: false,
  loading: false,
  mode: "ADD",
};
const { Context, Provider, Consumer } = createStore(reducer, initialState);

export { Context as AppContext, Provider as TodoProvider, Consumer };

export function useTodo() {
  const [state, dispatch] = useContext(Context);
  return { state, dispatch };
}
