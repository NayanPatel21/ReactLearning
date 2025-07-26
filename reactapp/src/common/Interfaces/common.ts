export  interface ListName {
  category: string;
  listItems: ListItem[];
}

export  interface ListItem {
  name: string;
  calories: number;
}

export  interface PropsList {
  lst: ListName;
}