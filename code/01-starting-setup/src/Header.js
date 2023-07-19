export default function Header(props) {
  return (
    <div>
      <header className="item">
        <img src={props.star} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
    </div>
  );
}
