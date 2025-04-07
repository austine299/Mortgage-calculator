import { useState } from "react";

import calc from "./asset/images/calculator.svg";
import illustration from "./asset/images/illustration-empty.svg";

function App() {

  
  

  const [amount, setAmount] = useState("");
  const [year, setYear] = useState("");
  const [interest, setInterest] = useState("");
  const [totalYearly, setTotalYearly] = useState("");
  const [monthlyRepayment, setMonthlyRepayment] = useState("");
  const [output, setOutput] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [totalInterest, setTotalInterest] = useState("");
  const [repayment, setRepayment] = useState(false);
  const [amountErro, setAmountErro] = useState();
  const [numOfYear, setNumOfYear] = useState();
  const [sumInterest, setSumInterest] = useState("");
  const [rateError, setRateError] = useState()

  let mp = 0;
  let p = amount;
  let r = interest / 100 / 12;
  let n = year * 12;
  let yearlyPay;

  const handleYearInput = (e) => {
    const newValue = e.target.value;
    setYear(newValue);
  };

  const handleAmountInput = (e) => {
    const newValue = e.target.value;
    setAmount(newValue);
  };

  const handleInterestInput = (e) => {
    const newValue = e.target.value;
    setInterest(newValue);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.checked ? event.target.value : null);
  };

  const handleCalculate = () => {
    if (amount && year !== "") {
      mp = (p * r) / (1 - Math.pow(1 + r, -n));
      setMonthlyRepayment(mp.toFixed(2));

      yearlyPay = mp * n;

      setTotalYearly(yearlyPay.toFixed(2));
      setOutput(!output);
      setOutput(true);
    } else {
      setOutput(false);
    }

    if (amount === "") {
      setAmountErro("This field is requaired");
    } else {
      setAmountErro();
    }
    if (year === "") {
      setNumOfYear("This field is requaired");
    } else {
      setNumOfYear();
    }

    if (interest === "") {
      setRateError("This field is requaired");
    } else {
      setRateError();
    }
  };

  const handleInterest = () => {
    if (totalInterest !== "") {
      setTotalInterest(totalInterest);

    }setSumInterest((totalYearly - p).toFixed(2))
    setTotalInterest(true);
    setRepayment(false);
  };

  
  const handleYearlyRepayment = () => {
    if (repayment !== "") {
      setRepayment(!repayment);
    }
    setRepayment(true);
    setTotalInterest(false)
  };

  const handleClear = () => {
    setSelectedValue(false);
    setYear("");
    setAmount("");
    setTotalYearly("");
    setMonthlyRepayment("");
    setOutput(false);
  };
 

  return (
    <div className="bg-blue-50 w-screen h-screen flex justify-center items-center">
      <div className="bg-white sm:w-2/3 h-auto   flex flex-col sm:flex-row  sm:gap-8 justify-between rounded-r-3xl">
        <div className=" sm:w-2/4 p-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <h1 className="text-slate-900 font-bold text-2xl">
              Mortgage Calculator
            </h1>
            <button
              onClick={handleClear}
              className="text-slate-500 hover:underline"
              href="index.html"
            >
              Clear All
            </button>
          </div>
          <div className="mt-11 ">
            <div>
              <label className="text-slate-500">Mortgage Amount</label>
              {amountErro ? (
                <div className="">
                  <div className="w-full h-10 border-2 flex rounded-lg mt-2">
                    <span className="w-8 bg-red-600 text-center flex items-center justify-center rounded-l-lg text-white">
                      $
                    </span>
                    <input
                      required
                      className="w-full border-0 rounded-r-lg p-4"
                      type="text"
                      value={amount}
                      onChange={handleAmountInput}
                    />
                  </div>
                  <span className="text-red-600">{amountErro}</span>
                </div>
              ) : (
                <div className="">
                  <div className="w-full h-10 border-2 flex rounded-lg mt-2">
                    <span className="w-8 bg-blue-50 text-center flex items-center justify-center rounded-l-lg text-slate-500">
                      $
                    </span>
                    <input
                      required
                      className="w-full border-0 rounded-r-lg p-4"
                      type="text"
                      value={amount}
                      onChange={handleAmountInput}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between mt-4">
              <div className="w-5/12">
                <label className="text-slate-500">Mortgage Term</label>
                <div className="w-full h-10 border-2 flex rounded-lg mt-2">
                  <input
                    required
                    className="w-full border-0 rounded-l-lg p-4"
                    type="text"
                    value={year}
                    onChange={handleYearInput}
                  />
                  {numOfYear ? (
                    <span className="w-auto p-1 bg-red-600 text-center flex items-center justify-center rounded-r-lg text-white">
                      years
                    </span>
                  ) : (
                    <span className="w-auto p-1 bg-blue-50 text-center flex items-center justify-center rounded-r-lg text-slate-500">
                      years
                    </span>
                  )}
                </div>
                <span className="text-red-600">{numOfYear}</span>
              </div>

              <div className="w-5/12">
                <label className="text-slate-500">Interest Rate</label>
                <div className="w-full h-10 border-2 flex rounded-lg mt-2">
                  <input
                    required
                    className="w-full border-0 rounded-l-lg p-4"
                    type="text"
                    value={interest}
                    onChange={handleInterestInput}
                  />
                  {rateError ? (
                    <span
                      className="w-8   bg-red-600 text-center flex items-center justify-center 
                      rounded-r-lg text-white"
                    >
                      %
                    </span>
                  ) : (
                    <span
                      className="w-8   bg-blue-50 text-center flex items-center justify-center 
                      rounded-r-lg text-slate-500"
                    >%</span>
                  )}
                </div>
                <span className="text-red-600">{numOfYear}</span>
              </div>
            </div>

            
              <div className="mt-8">
                <label className="text-slate-500">Mortgage Amount</label>
                {repayment ? <div className="w-full h-10 border-2 flex rounded-lg mt-2 bg-red-50">
                  <span className="w-8 bg-blue-50 text-center flex items-center justify-center rounded-l-lg">
                    <input
                      className="cursor-pointer"
                      onClick={handleYearlyRepayment}
                      type="radio"
                      value="repayment"
                      checked={selectedValue === "repayment"}
                      onChange={handleChange}
                    />
                  </span>
                  <span className="flex items-center text-custom-blue text-{20px} font-medium  ml-5">
                    Repayment
                  </span>
                </div>:
                <div className="w-full h-10 border-2 flex rounded-lg mt-2" >
                <span className="w-8 bg-blue-50 text-center flex items-center justify-center rounded-l-lg">
                  <input
                    className="cursor-pointer"
                    onClick={handleYearlyRepayment}
                    type="radio"
                    value="repayment"
                    checked={selectedValue === "repayment"}
                    onChange={handleChange}
                  />
                </span>
                <span className="flex items-center text-custom-blue text-{20px} font-medium  ml-5">
                  Repayment
                </span>
              </div>}
                {totalInterest ?<div className="w-full h-10 border-2 flex rounded-lg mt-2 bg-red-50">
                  <span className="w-8 bg-blue-50 text-center flex items-center justify-center rounded-l-lg">
                    <input
                      className="cursor-pointer"
                      onClick={handleInterest}
                      type="radio"
                      value="interest"
                      checked={selectedValue === "interest"}
                      onChange={handleChange}
                    />
                  </span>

                  <span className="flex items-center text-custom-blue text-{20px} font-medium  ml-5">
                    Interest Only
                  </span>
                </div>:
                <div className="w-full h-10 border-2 flex rounded-lg mt-2">
                <span className="w-8 bg-blue-50 text-center flex items-center justify-center rounded-l-lg">
                  <input
                    className="cursor-pointer"
                    onClick={handleInterest}
                    type="radio"
                    value="interest"
                    checked={selectedValue === "interest"}
                    onChange={handleChange}
                  />
                </span>

                <span className="flex items-center text-custom-blue text-{20px} font-medium  ml-5">
                  Interest Only
                </span>
              </div>}
              </div>

            <button
              onClick={handleCalculate}
              className="bg-custom-bg w-full sm:w-7/12 rounded-3xl h-11 mt-8 text-custom-blue font-bold flex 
                justify-center items-center gap-2 p-2 text-{20px} sm:text-xs"
            >
              <span className="">
                <img className="" src={calc} alt="calc" />
              </span>
              Calculate Repayments
            </button>
          </div>
        </div>
        {output ? (
          <div className=" bg-custom-blue sm:w-2/4 rounded-r-3xl rounded-bl-custom-bl flex flex-col  p-8">
            <h2 className="text-white text-4xl font-bold ">Your results</h2>
            <p className="text-slate-400 mt-5">
              Your results are shown below based on the information you
              provided. to adjust the result, edit the form and click calculate
              repayment again
            </p>
            <div
              className="border-t-8 border-t-custom-bg rounded-2xl 
            bg-slate-900 h-2/4 mt-6 flex flex-col justify-center gap-3 p-6 sm:p-4"
            >
              {repayment=== true? (
                <div>
                  <h6 className="text-slate-400 font-bold">
                    Your monthly repayments
                  </h6>
                  <h1 className="text-custom-bg font-bold text-5xl">
                    ${monthlyRepayment}
                  </h1>
                  <hr className="text-slate-400 mt-2" />

                  <h6 className="text-slate-400 font-bold mt-2">
                    Total you will pay over the term
                  </h6>
                  <h2 className="text-white font-bold text-2xl">
                    ${totalYearly}
                  </h2>
                </div>
              ) : (
                <div>
                  <h6 className="text-slate-400 font-bold">
                    Total interest repayments
                  </h6>
                  <h1 className="text-custom-bg font-bold text-5xl">
                    ${sumInterest}
                  </h1>
                  <hr className="text-slate-400" />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-custom-blue sm:w-2/4 rounded-r-3xl rounded-bl-custom-bl flex flex-col justify-center p-5">
            <img className="text-center h-44" src={illustration} alt="illust" />
            <h3 className="text-center text-white text-2xl font-bold">
              Results Shown Here
            </h3>
            <p className="text-center text-slate-400 font-semibold mt-4">
              Complete the form and click "calculate repayment" to see what your
              monthly repayment would be
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
