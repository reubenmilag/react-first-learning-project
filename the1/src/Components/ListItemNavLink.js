import "./../Assets/Styles/sidebars.css";

function ListItemNavLink(props) {
  return (
    <li>
      <a href={props.link} className={props.classes}>
        <svg className="bi me-2" width="16" height="16">
          <use href={props.icon} />
        </svg>
        {props.title}
      </a>
    </li>
  );
}

export default ListItemNavLink;
