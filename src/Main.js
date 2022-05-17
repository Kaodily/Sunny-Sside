export default function Main(props) {
  return (
    <div className= {props.class}>
      <h2>{props.heading}</h2>
      <p>{props.main}</p>
    </div>
  );
}
