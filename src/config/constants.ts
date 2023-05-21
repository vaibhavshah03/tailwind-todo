export enum TODO_TAGS {
  WORK = "work",
  STUDY = "study",
  ENTERTAINMENT = "entertainment",
  FAMILY = "family",
}

export const tags = [
  { label: TODO_TAGS.WORK, className: "bg-purple" },
  { label: TODO_TAGS.STUDY, className: "bg-blue" },
  { label: TODO_TAGS.ENTERTAINMENT, className: "bg-pink" },
  { label: TODO_TAGS.FAMILY, className: "bg-green" },
];
