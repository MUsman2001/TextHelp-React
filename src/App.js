import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [isGreenMode, setIsGreenMode] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const showGreenMode = (event) => {
    if (event.target.checked) {
      document.body.style.backgroundColor = 'green';
      document.body.style.color = 'white';
      setIsGreenMode(true);
      showAlert("Theme has been Changed", "success");
    } else {
      document.body.style.backgroundColor = mode === 'light' ? 'white' : '#000000';
      document.body.style.color = mode === 'light' ? 'black' : 'white';
      setIsGreenMode(false);
      showAlert("Theme has been Changed", "success");
    }
  };

  const toggleMode = () => {
    if (isGreenMode) {
      return;
    }
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#000000';
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }

  return (
    <>
      {/*<Router>
        <Navbar title="TextHelp" mode={mode} toggleMode={toggleMode} showGreenMode={showGreenMode} isGreenMode={isGreenMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text Below to Analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>*/}
      <Navbar title="TextHelp" mode={mode} toggleMode={toggleMode} showGreenMode={showGreenMode} isGreenMode={isGreenMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
      {<TextForm showAlert={showAlert} heading="Enter the Text Below to Analyze" mode={mode} />}
      </div>
    </>
  );
}

export default App;
