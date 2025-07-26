import type { PropsList } from "../Interfaces/common";
const ListCondition = ({ lst }: PropsList) => {
  ///Map
  //Filter
  //Short
  const Mapfilter = lst?.listItems?.map((item, index) => (
    <li key={index}>
      {item.name} &nbsp; {item.calories}
    </li>
  ));
  const listdisplay = (
    <div className="ListCategory">
      <h2> Category : MapFilter</h2>
      <ul>{Mapfilter}</ul>
    </div>
  );

  const FilterListItemIntAsc = [...lst.listItems].filter(
    (a) => a.calories > 100
  );
  const FilterListItemIntAsclist = FilterListItemIntAsc.map((item, index) => (
    <li key={index}>
      {item.name} &nbsp; {item.calories}
    </li>
  ));
  const FilterListItemIntAscdisplay = (
    <div className="ListCategory">
      <h2> Category : more then 100 calroy</h2>
      <ul>{FilterListItemIntAsclist}</ul>
    </div>
  );

  const orderListItemIntAsc = [...lst.listItems].sort(
    (a, b) => a.calories - b.calories
  );
  const orderListItemIntAsclist = orderListItemIntAsc.map((item, index) => (
    <li key={index}>
      {item.name} &nbsp; {item.calories}
    </li>
  ));
  const orderListItemIntAscdisplay = (
    <div className="ListCategory">
      <h2> Category : order short calories asc short</h2>
      <ul>{orderListItemIntAsclist}</ul>
    </div>
  );

  const orderListItemIntdesc = [...lst.listItems].sort(
    (a, b) => b.calories - a.calories
  );
  const orderListItemIntdesclist = orderListItemIntdesc.map((item, index) => (
    <li key={index}>
      {item.name} &nbsp; {item.calories}
    </li>
  ));
  const orderListItemIntdescdisplay = (
    <div className="ListCategory">
      <h2> Category : order short calories desc short</h2>
      <ul>{orderListItemIntdesclist}</ul>
    </div>
  );

  const orderListItemstrAsc = [...lst.listItems].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const orderListItemstrAsclist = orderListItemstrAsc.map((item, index) => (
    <li key={index}>
      {item.name} &nbsp; {item.calories}
    </li>
  ));
  const orderListItemstrAscdisplay = (
    <div className="ListCategory">
      <h2> Category : order short name asc short</h2>
      <ul>{orderListItemstrAsclist}</ul>
    </div>
  );

  const orderListItemstrdesc = [...lst.listItems].sort((a, b) =>
    b.name.localeCompare(a.name)
  );
  const orderListItemstrdesclist = orderListItemstrdesc.map((item, index) => (
    <li key={index}>
      {item.name} &nbsp; {item.calories}
    </li>
  ));
  const orderListItemstrdescdisplay = (
    <div className="ListCategory">
      <h2> Category : order short name desc short</h2>
      <ul>{orderListItemstrdesclist}</ul>
    </div>
  );
  //  return { listdisplay };
  return (
    <>
      <div>{listdisplay}</div>
      <div>{FilterListItemIntAscdisplay}</div>
      <div>{orderListItemIntAscdisplay}</div>
      <div>{orderListItemIntdescdisplay}</div>
      <div>{orderListItemstrAscdisplay}</div>
      <div>{orderListItemstrdescdisplay}</div>
    </>
  );
};

export default ListCondition;
