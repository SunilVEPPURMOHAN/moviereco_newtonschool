import React from "react";
import { useState } from "react";
import Axios from "axios";
import data from '../components/data/data';
import Movie from "../components/Movie";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navb from "../components/Navb";


const UserForm = ()=>{

  const[text,setText] = useState('');
  const[genr,setGenr] = useState('Horror');
  const[searchlist,setSearchlist] = useState([]);
  const[movielist,setMovielist] = useState({Horror:[],Action:[],Drama:[],War:[],SciFiction:[]});
  const[caution,setCaution] = useState('Click on a movie to populate your list');
  const[user,setUser] = useState('user');

useEffect(()=>{
  if (localStorage.getItem(user) !== null) setMovielist(JSON.parse(localStorage.getItem(user)));
},[user]);


  const searchText = async (event)=>{
    setText(event.target.value);

      const response = await Axios.get(`${data.searchurl}${text.trim().replace(' ','+')}&apikey=${data.apikey}`);
      if(response.data.Response === 'True') setSearchlist(response.data.Search);
      else setSearchlist([{Title:'Undefined'}]);
  };

  const updateMovielist = (event)=>{
    const newlist = movielist;
    const currentmovie = event.target.title;
    if(!newlist[genr].includes(currentmovie)){
    newlist[genr].push(currentmovie);
    setMovielist(newlist);
    setCaution('Movie added!');
    localStorage.setItem(user,JSON.stringify(movielist));
    }
    else{
      setCaution('Movie already in your list! Choose another');
    }
  }

     return(<>
     <Navb/>
    <h1>{caution}</h1>
      <input type="text" value={text} onChange={searchText} placeholder='Search your movie here'></input>
      <label>Choose a Genre:
  <select value={genr} onChange={(event)=>setGenr(event.target.value)}>
    <option value="Horror">Horror</option>
    <option value="Action">Action</option>
    <option value="Drama">Drama</option>
    <option value="War">War</option>
    <option value="SciFiction">SciFiction</option>
  </select>
  </label>

  <input type="text" value={user} onChange={(event)=>setUser(event.target.value)} placeholder="type your user name here"></input>
  {/* <Button className="btn-success btn-outline-success my-2 my-sm-0"> <Link to={"/"+user}>All Yours! </Link></Button> */}
 

  <div className="d-flex container-fluid" style={{flexWrap: "wrap", justifyContent: "space-around"}}>
      {searchlist.map((xxx) =>
      <div title={xxx.Title} onClick={updateMovielist}>
      <Movie movie={xxx.Title}/></div>)}
      </div>
  </>
);
};

export default UserForm;