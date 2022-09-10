import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function Navb() {
    return (
      <>
      <Navbar bg="light" variant="light" sticky="top" >
        <Link to="/" style={{ marginRight: 20 }}>Home</Link>
        <Link to="/makeItYours" style={{ marginRight: 20 }}>Make It Yours!</Link>
        <Link to="/YourOwn"style={{ marginRight: 20 }}>All Yours! </Link>
        </Navbar>
      </>
    );
  };

export default Navb;