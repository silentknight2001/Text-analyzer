import "./App.css";
// import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from "./components/Alert";



function App() {
  const [mode, setMode] = useState('light');  //weather darkMod Eneble or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{ //show Alert is a event/function 
    setAlert({     //..its means now alert is a object.....................
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);
    
  }

  const toggleMode =()=>{
    if(mode==='light'){

      setMode('dark')
      document.body.style.backgroundColor= 'black';
      showAlert("DarkMode has been enable", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
      showAlert("Light has been enable", "success");
    }

  }

  return (
    <>
<Navbar title="helloworld" HomeText="About us" mode={mode} toggleMode={toggleMode}/>

<Alert alert ={alert}/>

<div className="container my-3">
<TextForm showAlert ={showAlert} heading ="Enter the text analyzs below" mode ={mode}/>
  {/* <About/> */}
</div>


    </>
  );
}

export default App;
