import React, { useEffect } from "react";
import LoanCalculator from "./Calculation";

const Calculator = () => {
  return (
    <section className=" bg-white min-h-[100vh] w-full">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col items-center justify-center">

        {/* Loan Calculator */}
        <LoanCalculator />
      </div>
    </section>
  );
};

export default Calculator;
