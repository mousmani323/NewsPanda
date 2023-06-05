import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#2c2c2c';
    }else {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  let pageSize = 6;
  return (
    <div>
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <NavBar mode={mode} toggleMode={toggleMode}/>
      <Routes>
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              mode={mode} 
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          path="/Business"
          element={
            <News
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
              mode={mode} 
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
              mode={mode} 
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
              mode={mode} 
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
              mode={mode} 
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
              mode={mode} 
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
              mode={mode} 
              toggleMode={toggleMode}
            />
          }
        />
      </Routes>
    </div>
  );
};
export default App;
