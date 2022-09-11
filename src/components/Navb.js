import { Link } from "react-router-dom";
import './styles.css'

function Navb() {
    return (
      <>
      <div className="centerAlign">
        <Link to="/" style={{ marginRight: 20 }}>Home</Link>
        <Link to="/makeItYours" style={{ marginRight: 20 }}>Make It Yours!</Link>
        <Link to="/YourOwn"style={{ marginRight: 20 }}>All Yours! </Link>
        </div>
      </>
    );
  };

export default Navb;