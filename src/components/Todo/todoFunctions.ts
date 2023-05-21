import { ChangeEvent, useCallback, useState } from "react";

export type ITodo = {
  id: string;
  title: string;
  desc: string;
  completed: boolean;
  edit: boolean;
};

const mockTodo = [
  {
    id: "2023-03-30T14:37:00.595Z",
    title: "helllllo",
    desc: "Desc1",
    completed: false,
    edit: false,
  },
  {
    id: "2023-03-30T14:37:01.795Z",
    title: "guuu",
    desc: "Desc2",
    completed: false,
    edit: false,
  },
  {
    id: "2023-03-30T14:37:02.874Z",
    title: "gdgsyfgud",
    desc: "Desc3",
    completed: false,
    edit: false,
  },
  {
    id: "2023-03-30T14:37:03.833Z",
    title: "jfsdgtt",
    desc: "Desc4",
    completed: false,
    edit: false,
  },
];
export default function useTodoFunctions() {
  const [todo, setTodo] = useState<ITodo[]>(mockTodo);
  const [todoTitleText, setTodoTitleText] = useState<string>("");
  const [todoDescText, setTodoDescText] = useState<string>("");
  const [editTodoTitleText, setEditTodoTitleText] = useState<string>("");
  const [editTodoDescText, setEditTodoDescText] = useState<string>("");

  const onAddItem = useCallback(() => {
    const data = todo.find(
      (item) => item.title.toLowerCase() === todoTitleText.toLowerCase()
    );
    if (!data) {
      setTodo((prev) => [
        ...prev,
        {
          id: new Date().toISOString(),
          title: todoTitleText,
          desc: todoDescText,
          completed: false,
          edit: false,
        },
      ]);
      setTodoTitleText("");
      setTodoDescText("");
    } else {
      window.alert("Title already exists!");
    }
  }, [todoTitleText, todoDescText]);

  const onDeleteItem = (id: string) => {
    setTodo((prev) => prev.filter((todo: ITodo) => todo.id !== id));
  };

  const onUpdateItem = (id: string) => {
    const data = todo.find(
      (item) =>
        item.id !== id &&
        item.title.toLowerCase() === editTodoTitleText.toLowerCase()
    );
    if (!data) {
      setTodo((prev) =>
        prev.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                title: editTodoTitleText,
                desc: editTodoDescText,
                edit: false,
              }
            : todo
        )
      );
      setEditTodoTitleText("");
      setEditTodoDescText("");
    } else {
      window.alert("Todo already exists!");
    }
  };
}
