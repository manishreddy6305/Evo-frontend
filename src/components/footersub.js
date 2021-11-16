import "./../styles/footersub.css";
import { Link } from "react-router-dom";
const Footersub = ({ heading, links }) => {
  return (
    <>
      <div className="footersub-main">
        <h4 className="fsh">{heading}</h4>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link to="" className="footerlink">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Footersub;
