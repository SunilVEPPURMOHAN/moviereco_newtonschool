import React, { useEffect, useState } from "react";
import "../components/styles.css";
import Movie from '../components/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import Navb from "../components/Navb";


const YourOwn = ()=>{
//   let {id} = useParams();
//   console.log(id);
//   if (id==='') id = 'sunil';
//   if(localStorage.getItem(id)===null) id = 'sunil';

  const [userGenre, setgenre] = useState("Horror");
  const[user,setUser] = useState('sunil');
  const[caution,setCaution] = useState('Key in your user name');
  const[movielist,setMovielist] = useState({Horror:[],Action:[],Drama:[],War:[],SciFiction:[]});

  function OnClickHandler(item) {
    setgenre(item);
  }

  useEffect(()=>{
    if(localStorage.getItem(user)===null) {
setCaution("user doesn't exist");
    }
    else  {
    setMovielist(JSON.parse(localStorage.getItem(user)));
    setCaution("Congrats! Your page is ready");
  }
  },[user]);

  return (
   
    <div className="App">
       <Navb/>
       <h1>{caution}</h1>
       <input type="text" value={user} onChange={(event)=>setUser(event.target.value)}></input>
       {/* <Button onClick={handleClick}>Change user</Button> */}
      <h1 className="display-4" style={{padding: 30}}>movie recommendations for you!</h1>
      <hr />
      <div className="bgm1">
        <h4 style={{ color: "white " }}>
          <b> Checkout my favorite movies.</b>
          <em>Select a genre to get started </em>
        </h4>
        <div>
          {['Horror','Action','Drama','War','SciFiction'].map((item) => (
            <Button className="btn-danger btn-lg" onClick={() => OnClickHandler(item)}>
              {item}
            </Button>
          ))}
        </div>
      </div>

      <hr />


      <div className="d-flex container-fluid" style={{flexWrap: "wrap", justifyContent: "space-around"}}>
      {movielist[userGenre].map((xxx) =>
      <Movie movie={xxx} />)}
      </div>
   </div>
    
  );
}

export default YourOwn;
