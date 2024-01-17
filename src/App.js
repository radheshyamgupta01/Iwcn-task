import React from "react";

import Note from "./Component/Note/Note";
import Task3 from "./Component/Task3/Task3";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./Component/Table/Table";
import TaskHeader from "./Component/TaskHeader/TaskHeader";
function App() {
  return (
    <>
      <Router>
        <TaskHeader></TaskHeader>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/task2" element={<Note />} />
          <Route path="/task3" element={<Task3 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
