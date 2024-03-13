import React, { useEffect } from 'react';
import InputData from "./InputData";
import { CALCULATOR_DATA } from "../assets/CALCULATOR_DATA";
import { calculateInvestmentResults } from "../util/investment";

export default function UserInput({ tableData, handleChange, updateResults }) {
    useEffect(() => {
        console.log("useEffect triggered:", tableData);
      
        const { initialInvestment, annualInvestment, expectedReturn, duration } = tableData;
      
        // Parse input values to ensure they are valid numbers
        const parsedInitialInvestment = parseFloat(initialInvestment);
        const parsedAnnualInvestment = parseFloat(annualInvestment);
        const parsedExpectedReturn = parseFloat(expectedReturn);
        const parsedDuration = parseInt(duration);
      
        if (!isNaN(parsedInitialInvestment) && !isNaN(parsedAnnualInvestment) && !isNaN(parsedExpectedReturn) && !isNaN(parsedDuration)) {
          console.log("Input values:", {
            initialInvestment: parsedInitialInvestment,
            annualInvestment: parsedAnnualInvestment,
            expectedReturn: parsedExpectedReturn,
            duration: parsedDuration,
          });
      
          // Calculate results
          const results = calculateInvestmentResults({
            initialInvestment: parsedInitialInvestment,
            annualInvestment: parsedAnnualInvestment,
            expectedReturn: parsedExpectedReturn,
            duration: parsedDuration,
          });
      
          console.log("Updating results:", results);
          updateResults(results);  // Update results without isTriggered
        }
      }, [tableData]); // Remove 'duration' from the dependency array
      
  function handleInputChange(label, value) {
    handleChange(label, value);
  }

  return (
    <section id="user-input">
      <form className="input-group">
        {CALCULATOR_DATA.map((calcData) => (
          <InputData
            key={calcData.name}
            label={calcData.name}
            type={calcData.type}
            min={calcData.min}
            max={calcData.max}
            value={tableData[calcData.name]}
            onChange={(e) => handleInputChange(calcData.name, e.target.value)}
          />
        ))}
      </form>
    </section>
  );
}
