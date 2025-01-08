import { NavLink } from "react-router";
export default function Card(props) {
  return (
    <article>
        <NavLink to="/people"  >←</NavLink>


      <img
        src={props.data.data.avatar}
        alt={props.data.data.email}
        className="rounded-full w-16 h-16 mt-2 hover:scale-125 transition-transform"
      />
      <p>
        {props.data.data.first_name}
        {props.data.data.last_name}
      </p>
      <i> {props.data.data.email}</i>
      <p className="mt-4">
        
        {props.data.support.text}
        <br />
        <a href={props.data.support.url}>🔗</a>
       
        
      </p>
    </article>
  );
}
