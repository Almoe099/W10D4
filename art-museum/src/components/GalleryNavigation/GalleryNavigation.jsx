import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

const GalleryNavigation = ({ galleries }) => {
  console.log(galleries);
  return (
    <nav>
      <h1>Galleries</h1>,
      {galleries.map((gallery) => (
        <NavLink
          key={gallery.id}
          to={`/galleries/${gallery.id}`}
          activeClassName="active"
        >
          {gallery.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default GalleryNavigation;
