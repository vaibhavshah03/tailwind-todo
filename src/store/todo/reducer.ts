export enum TODO_TAGS {
  WORK = "WORK",
  STUDY = "STUDY",
  ENTERTAINMENT = "ENTERTAINMENT",
  FAMILY = "FAMILY",
}

export type ITodoTag = TODO_TAGS | keyof typeof TODO_TAGS;

export type ITodo = {
  id: string;
  title: string;
  desc: string;
  completed: boolean;
  tags: ITodoTag[];
};

export type TodoState = {
  todos: ITodo[];
  loading: boolean;
  modal: boolean;
  mode: "EDIT" | "ADD";
  todo: Partial<ITodo>;
};

type Action =
  | { type: "SET_TODO"; payload: ITodo[] }
  | { type: "ADD_TODO" }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "UPDATE_TODO" }
  | { type: "SET_MODE"; payload: TodoState["mode"] }
  | { type: "SET_MODAL"; payload: TodoState["modal"] }
  | { type: "SET_PRE_EDIT"; payload: ITodo["id"] }
  | { type: "SET_PRE_ADD" }
  | { type: "UPDATE_CURRENT_TODO"; payload: TodoState["todo"] }
  | { type: "SET_LOADING"; payload: TodoState["loading"] }
  | { type: "UPDATE_COMPLETED"; payload: ITodo["id"] };

export const reducer = (state: TodoState, action: Action) => {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todos: [...action.payload],
      };

    case "ADD_TODO":
      const data = state.todos.find(
        (item) => item.title.toLowerCase() === state.todo?.title?.toLowerCase()
      );
      if (!data) {
        const newTodo: ITodo = {
          ...(state.todo as ITodo),
          id: new Date().toISOString(),
          completed: false,
        };
        return {
          ...state,
          todos: [...state.todos, newTodo],
          modal: false,
        };
      }
      alert("exist");
      return {
        ...state,
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((i) => i.id !== action.payload),
      };

    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((i) =>
          i.id == state.todo.id ? { ...i, ...state.todo } : i
        ),
        modal: false,
      };

    case "SET_MODE":
      return {
        ...state,
        mode: action.payload,
      };

    case "SET_MODAL":
      return {
        ...state,
        modal: action.payload,
      };

    case "SET_PRE_ADD":
      return {
        ...state,
        todo: { title: "", desc: "", tags: [] } as Partial<ITodo>,
        mode: "ADD" as TodoState["mode"],
        modal: true,
      };

    case "SET_PRE_EDIT":
      return {
        ...state,
        todo: state.todos.find(
          (i) => i.id === action.payload
        ) as Partial<ITodo>,
        mode: "EDIT" as TodoState["mode"],
        modal: true,
      };

    case "UPDATE_CURRENT_TODO":
      return {
        ...state,
        todo: { ...state.todo, ...action.payload },
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "UPDATE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((i) =>
          i.id == action.payload ? { ...i, completed: !i.completed } : i
        ),
      };
    default:
      return {
        ...state,
      };
  }
};
