// import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is activated","success")
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#6c757d";
      showAlert("Dark mode is activated","success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About Us" mode = {mode} toggleMode={toggleMode} />
      <Alert alert= {alert}/>
      <div className="container my-3">
      <Routes>
      <Route  exact path="/" element={<TextForm  showAlert = {showAlert} heading="Enter your Text to Analyze" mode = {mode}/>}>
      </Route>
      <Route exact path="/about" element={<About/>}>
      </Route>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
