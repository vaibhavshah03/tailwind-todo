import { FormEvent } from "react";
import Card from "./Card";
import { ITodo } from "./Todo/todoFunctions";

export default function CardContainer(props: listcontainerProps) {
  const { todo, onUpdateItem, onDeleteItem } = props;
  const listItems = todo.map((item) => {
    return (
      <Card
        id={item.id}
        key={item.id}
        item={item}
        onUpdateItem={onUpdateItem}
        onDeleteItem={onDeleteItem}
      />
    );
  });
}

export interface listcontainerProps {
  todo: ITodo[];
  onUpdateItem: (id: string) => void;
  onDeleteItem: () => FormEvent;
}
