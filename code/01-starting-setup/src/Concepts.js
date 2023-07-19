export default function Concepts(props) {
  const listitems = props.items.map((item) => (
    <li>
      <img src={item.image} alt="TODO: TITLE" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </li>
  ));

  return (
    <div>
      <ul id="concepts">{listitems}</ul>
    </div>
  );
}
