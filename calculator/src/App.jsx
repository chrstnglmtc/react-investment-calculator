import React, { useState } from "react";
import Result from "./components/Result";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [tableData, setTableData] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const [investmentResults, setInvestmentResults] = useState([]);
  
  function handleChange(label, value) {
    // Check if the label is 'duration' and ensure it's a valid number
    const numericValue = label === 'duration' ? parseInt(value) : parseFloat(value);
  
    setTableData((prevData) => ({
      ...prevData,
      [label]: isNaN(numericValue) ? '' : numericValue,
    }));
  }
  

  function updateResults(results) {
    // Check if results is an array, otherwise set it to an empty array
    const updatedResults = Array.isArray(results) ? results : [];
    setInvestmentResults(updatedResults);
  }

  return (
    <>
      <Header />
      <main>
        <UserInput
          tableData={tableData}
          handleChange={handleChange}
          updateResults={updateResults}
        />
        <Result investmentResults={investmentResults} />
      </main>
    </>
  );
}

export default App;
