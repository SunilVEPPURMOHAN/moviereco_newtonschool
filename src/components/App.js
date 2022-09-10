import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/data.js';
import Home from "../pages/Home";
import UserForm from "../pages/UserForm";
import { Route, Routes } from "react-router-dom";
import Error from '../pages/Error';
import YourOwn from "../pages/YourOwn";

const MovieDatabase = data.sunilChoice;

// var movies = Object.keys(MovieDatabase);

export default function App() {
 localStorage.setItem('sunil', JSON.stringify(MovieDatabase));

  return (<>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/makeItYours" element={<UserForm/>} />
  <Route path="/YourOwn" element={<YourOwn/>} />
  <Route component={<Error/>} />
  </Routes>
      {/* <Home datum={MovieDatabase} name="Sunil"/> */}
      </>
  );
}
