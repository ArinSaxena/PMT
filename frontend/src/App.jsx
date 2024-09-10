import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Members from "./Components/Members/Members";
import Projects from "./Components/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";
import SingleProject from './Components/SingleProject/SingleProject'
import TaskDetails from "./Components/TaskDetails/Taskdetails";
// import Toggle from "./Components/Toggle/toggle.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/" />} />
        {/* <Route path='/Signup' element={<Signup/>}/> */}
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<SingleProject/>}/>
        <Route path="/tasks/:taskTitle" element={<TaskDetails/>}/>
        <Route path="/members" element={<Members />} />
        {/* <Route path="/toggle" element={<Toggle />} /> */}

        

      </Routes>
    </div>
  );
}

export default App;
