"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Calculator,
  Percent,
  Calendar,
  TrendingUp,
  IndianRupee
} from "lucide-react";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<string>("250000");
  const [interestRate, setInterestRate] = useState<string>("6.5");
  const [loanTerm, setLoanTerm] = useState<string>("30");
  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalInterest: 0,
    totalAmount: 0
  });

  const calculateLoan = () => {
    const principal = Number.parseFloat(loanAmount) || 0;
    const annualRate = Number.parseFloat(interestRate) || 0;
    const years = Number.parseFloat(loanTerm) || 0;

    if (principal <= 0 || annualRate < 0 || years <= 0) {
      setResults({ monthlyPayment: 0, totalInterest: 0, totalAmount: 0 });
      return;
    }

    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    let monthlyPayment = 0;
    if (monthlyRate > 0) {
      monthlyPayment =
        (principal *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else {
      monthlyPayment = principal / numberOfPayments;
    }

    const totalAmount = monthlyPayment * numberOfPayments;
    const totalInterest = totalAmount - principal;

    setResults({
      monthlyPayment: monthlyPayment,
      totalInterest: totalInterest,
      totalAmount: totalAmount
    });
  };

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatNumber = (value: string) => {
    const num = value.replace(/[^\d.]/g, "");
    return num;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Loan,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#164069] to-[#13C8EC]">
                Calculator
              </span>
            </h2>
            {/* <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              From Ivy League to IITs, we fund education dreams across the
              globe. Your destination, our support.
            </p> */}
          </motion.div>
        </div>

        {/* Main Calculator Card */}
        <div className="bg-white/95 backdrop-blur rounded-xl shadow-xl border border-white/20">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Input Section */}
              <div className="lg:col-span-4 space-y-6">
                <div className="text-center lg:text-left mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 justify-center lg:justify-start">
                    ₹ Loan Details
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="loan-amount"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Loan Amount
                    </label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="loan-amount"
                        type="text"
                        value={loanAmount}
                        onChange={(e) =>
                          setLoanAmount(formatNumber(e.target.value))
                        }
                        className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="250000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="interest-rate"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Annual Interest Rate (%)
                    </label>
                    <div className="relative">
                      <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="interest-rate"
                        type="text"
                        value={interestRate}
                        onChange={(e) =>
                          setInterestRate(formatNumber(e.target.value))
                        }
                        className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="6.5"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="loan-term"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Loan Term (Years)
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="loan-term"
                        type="text"
                        value={loanTerm}
                        onChange={(e) =>
                          setLoanTerm(formatNumber(e.target.value))
                        }
                        className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="30"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="w-px h-64 bg-gray-300 hidden lg:block"></div>
                <div className="w-full h-px bg-gray-300 lg:hidden"></div>
              </div>

              {/* Results Section */}
              <div className="lg:col-span-7">
                <div className="text-center lg:text-left mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 justify-center lg:justify-start">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Payment Results
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Monthly Payment - Featured */}
                  <div className="md:col-span-3 bg-gradient-to-r from-[#164069] to-[#13C8EC] p-6 rounded-xl text-white text-center shadow-lg">
                    <div className="text-sm font-medium opacity-90 mb-1">
                      Monthly Payment
                    </div>
                    <div className="text-4xl font-bold">
                      {formatCurrency(results.monthlyPayment)}
                    </div>
                    <div className="text-xs opacity-75 mt-1">
                      Principal & Interest
                    </div>
                  </div>

                  {/* Total Interest */}
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-center shadow-sm">
                    <div className="text-sm text-red-600 font-medium mb-1">
                      Total Interest
                    </div>
                    <div className="text-2xl font-bold text-red-700">
                      {formatCurrency(results.totalInterest)}
                    </div>
                    <div className="text-xs text-red-500 mt-1">
                      Over {loanTerm} years
                    </div>
                  </div>

                  {/* Total Amount */}
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-center shadow-sm">
                    <div className="text-sm text-gray-600 font-medium mb-1">
                      Total Amount
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      {formatCurrency(results.totalAmount)}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Principal + Interest
                    </div>
                  </div>

                  {/* Loan Summary */}
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-yellow-700 font-medium mb-2">
                      Loan Summary
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Principal:</span>
                        <span className="font-medium">
                          {formatCurrency(Number.parseFloat(loanAmount) || 0)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rate:</span>
                        <span className="font-medium">{interestRate}% APR</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Term:</span>
                        <span className="font-medium">{loanTerm} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payments:</span>
                        <span className="font-medium">
                          {Number.parseFloat(loanTerm) * 12} months
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                <strong>Note:</strong> This calculator provides estimates for
                principal and interest only. Additional costs such as insurance,
                taxes, PMI, and fees are not included in these calculations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
