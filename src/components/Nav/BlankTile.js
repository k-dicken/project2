export default function BlankTile(props) {
  //blank tile, takes in a color
  return (
    <div
      style={{
        backgroundColor: props.color,
      }}
      className="tile blank-tile"
    ></div>
  );
}
