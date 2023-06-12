import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Result from './Result';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="result/:salesGoal/:salesIncrease/:salesIncrease/:profitMargin/:numSalesReps/:numSupportStaff/:numSalesManagers"
          element={<Result />}
        />
      </Routes>
    </div>
  );
};

export default App;
