import "./../Assets/Styles/sidebars.css";
import ListItemNavLink from "./ListItemNavLink";

function Sidebar() {
  const userName = "Reuben F";

  const listItemDetails = [
    { id: 1, link: "#", icon: "#home", title: "Home", classes: " active nav-link text-white" },
    { id: 2, link: "#", icon: "#speedometer2", title: "Dashboard", classes: " nav-link text-white " },
    { id: 3, link: "#", icon: "#table", title: "Orders", classes: " nav-link text-white " },
    { id: 4, link: "#", icon: "#grid", title: "Products", classes: " nav-link text-white " },
    { id: 5, link: "#", icon: "#people-circle", title: "Customers", classes: " nav-link text-white " },
  ];

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use href="#bootstrap" />
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <ListItemNavLink
          link={listItemDetails[0].link}
          icon={listItemDetails[0].icon}
          title={listItemDetails[0].title}
          classes={listItemDetails[0].classes}
        ></ListItemNavLink>
        <ListItemNavLink
          link={listItemDetails[1].link}
          icon={listItemDetails[1].icon}
          title={listItemDetails[1].title}
          classes={listItemDetails[1].classes}
        ></ListItemNavLink>
        <ListItemNavLink
          link={listItemDetails[2].link}
          icon={listItemDetails[2].icon}
          title={listItemDetails[2].title}
          classes={listItemDetails[2].classes}
        ></ListItemNavLink>
        <ListItemNavLink
          link={listItemDetails[3].link}
          icon={listItemDetails[3].icon}
          title={listItemDetails[3].title}
          classes={listItemDetails[3].classes}
        ></ListItemNavLink>
        <ListItemNavLink
          link={listItemDetails[4].link}
          icon={listItemDetails[4].icon}
          title={listItemDetails[4].title}
          classes={listItemDetails[4].classes}
        ></ListItemNavLink>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>{userName}</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
