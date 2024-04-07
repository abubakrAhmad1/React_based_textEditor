import React from "react"
import{Link} from "react-router-dom";

function Nav(props) {
  return (
    <>
    {/* JUST REMOVE LINK TO  */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {props.title}
          </Link>
          <Link to= "/about" >About</Link>
          <Link to = "/start">start App</Link>
        </div>
        
      </nav>
    </>
  );
}
//APPLYING PROPS FUNCTION HERE

// Nav.propTypes = {
//   title: PropTypes.string,
//   productType: PropTypes.string
// };
Nav.defaultProps = {
  title: "N/A",
}
export default Nav;
