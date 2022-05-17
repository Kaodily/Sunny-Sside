export default function Section(props) {
  return (
    <div className={props.class}>
      <img src={props.img} alt="" />
      <div className = 'section_info'>
        <h2>{props.heading}</h2>
        <p>{props.main}</p>
         <p className={props.border}> <a href ='#'>{props.info}</a></p>
      </div>
    </div>
  );
}
