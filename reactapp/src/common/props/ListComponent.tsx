import type { PropsList } from "../Interfaces/common";
const ListComponent = ({ lst }: PropsList) => {
  const ListItemsDisplay = lst?.listItems?.map((item, index) => (
    <li key={index}>
      {item.name} &nbsp; {item.calories}
    </li>
  ));
  const listdisplay = (
    <div className="ListCategory">
      <h2> Category : {lst?.category}</h2>
      <ul>{ListItemsDisplay}</ul>
    </div>
  );

  //  return { listdisplay };
  return <>{listdisplay}</>;
};

export default ListComponent;
