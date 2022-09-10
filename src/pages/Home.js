import React, { useState } from "react";
import "../components/styles.css";
import Movie from '../components/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { useParams} from "react-router-dom";
import Navb from "../components/Navb";


const Home = ()=>{
  let {id} = useParams();
  console.log(id);
  if (id==='') id = 'sunil';
  if(localStorage.getItem(id)===null) id = 'sunil';

  const [userGenre, setgenre] = useState("Horror");
  
  const MovieDatabase = JSON.parse(localStorage.getItem(id));
  var movies = Object.keys(MovieDatabase);

  


  function OnClickHandler(item) {
    setgenre(item);
  }


  return (
   
    <div className="App">
       <Navb/>
      <h1 className="display-4" style={{padding: 30}}>{id}'s movie recommendations for you!</h1>
      <hr />
      <div className="bgm1">
        <h4 style={{ color: "white " }}>
          <b> Checkout my favorite movies.</b>
          <em>Select a genre to get started </em>
        </h4>
        <div>
          {movies.map((item) => (
            <Button className="btn-danger btn-lg" onClick={() => OnClickHandler(item)}>
              {item}
            </Button>
          ))}
        </div>
      </div>

      <hr />


      <div className="d-flex container-fluid" style={{flexWrap: "wrap", justifyContent: "space-around"}}>
      {MovieDatabase[userGenre].map((xxx) =>
      <Movie movie={xxx} />)}movie
      </div>
   </div>
    
  );
}

export default Home;
