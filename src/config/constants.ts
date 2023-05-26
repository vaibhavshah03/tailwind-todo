import { TODO_TAGS } from "../store/todo/reducer";

export const tags = [
  { label: TODO_TAGS.WORK, className: "bg-purple" },
  { label: TODO_TAGS.STUDY, className: "bg-blue" },
  { label: TODO_TAGS.ENTERTAINMENT, className: "bg-pink" },
  { label: TODO_TAGS.FAMILY, className: "bg-green" },
];

export const tagsClass: Record<TODO_TAGS, string> = {
  [TODO_TAGS.WORK]: "bg-purple",
  [TODO_TAGS.STUDY]: "bg-blue",
  [TODO_TAGS.ENTERTAINMENT]: "bg-pink",
  [TODO_TAGS.FAMILY]: "bg-green",
};
