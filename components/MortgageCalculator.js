// Swastik Shetty
// This is the interactive Mortgage Calculator component.
// It uses React state to handle inputs and calculate the monthly payment in real-time.
// I've added a visual breakdown of the payment for better clarity.

'use client';

import React, { useState, useEffect } from 'react';

export default function MortgageCalculator() {
  // State variables for all the calculator inputs.
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [propertyTax, setPropertyTax] = useState(500);
  const [homeInsurance, setHomeInsurance] = useState(150);

  // State for the calculated payment components.
  const [principalAndInterest, setPrincipalAndInterest] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // This useEffect hook recalculates the payment whenever an input changes.
  useEffect(() => {
    const calculateMonthlyPayment = () => {
      const loanAmount = homePrice - downPayment;
      if (loanAmount <= 0) {
        setPrincipalAndInterest(0);
        setMonthlyPayment(0);
        return;
      }
      
      const monthlyInterestRate = (interestRate / 100) / 12;
      const numberOfPayments = loanTerm * 12;

      // The formula for calculating monthly mortgage payment.
      const pni = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      
      const tax = parseFloat(propertyTax || 0);
      const insurance = parseFloat(homeInsurance || 0);
      const totalMonthly = pni + tax + insurance;
      
      setPrincipalAndInterest(pni);
      setMonthlyPayment(totalMonthly);
    };

    calculateMonthlyPayment();
  }, [homePrice, downPayment, loanTerm, interestRate, propertyTax, homeInsurance]);

  // Helper function to format numbers as currency.
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }

  return (
    // Using the consistent 'content-card' style.
    <div className="content-card p-8">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Left side: User input fields */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Loan details</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="home-price" className="block text-sm font-medium text-gray-700">Home Price</label>
              <input id="home-price" type="number" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} className="input-field mt-1" />
            </div>
            <div>
              <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700">Down Payment</label>
              <input id="down-payment" type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} className="input-field mt-1" />
            </div>
            <div>
              <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700">Loan Term (years)</label>
              <select id="loan-term" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} className="input-field mt-1">
                <option value="30">30 years</option>
                <option value="20">20 years</option>
                <option value="15">15 years</option>
                <option value="10">10 years</option>
              </select>
            </div>
            <div>
              <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
              <input id="interest-rate" type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="input-field mt-1" />
            </div>
             <div>
              <label htmlFor="property-tax" className="block text-sm font-medium text-gray-700">Monthly Property Tax ($)</label>
              <input id="property-tax" type="number" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} className="input-field mt-1" />
            </div>
             <div>
              <label htmlFor="home-insurance" className="block text-sm font-medium text-gray-700">Monthly Home Insurance ($)</label>
              <input id="home-insurance" type="number" value={homeInsurance} onChange={(e) => setHomeInsurance(e.target.value)} className="input-field mt-1" />
            </div>
          </div>
        </div>

        {/* Right side: Calculation results */}
        <div className="bg-light-green-bg rounded-lg p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-lg text-gray-600">Your estimated monthly payment</h3>
            <p className="text-5xl font-bold text-gray-800 my-4">{formatCurrency(monthlyPayment)}</p>
            
            {/* Visual breakdown of the payment */}
            <div className="w-full mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Principal & Interest</span>
                    <span className="font-medium text-gray-800">{formatCurrency(principalAndInterest)}</span>
                </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Property Tax</span>
                    <span className="font-medium text-gray-800">{formatCurrency(propertyTax || 0)}</span>
                </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Home Insurance</span>
                    <span className="font-medium text-gray-800">{formatCurrency(homeInsurance || 0)}</span>
                </div>
            </div>

            <button className="btn-primary mt-8 w-full">Get my personalized rate</button>
        </div>
      </div>
    </div>
  );
}

