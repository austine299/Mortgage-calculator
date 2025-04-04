import { useState } from "react";

import calc from "./asset/images/calculator.svg";
import illustration from "./asset/images/illustration-empty.svg";

function App() {
  const [amount, setAmount] = useState("");
  const [year, setYear] = useState("");
  const [interest, setInterest] = useState(5.25);
  const [totalYearly, setTotalYearly] = useState("");
  const [monthlyRepayment, setMonthlyRepayment] = useState("");
  const [output, setOutput] = useState(false);

  const handleYearInput = (e) => {
    const newValue = e.target.value;
    setYear(newValue);
  };

  const handleAmountInput = (e) => {
    const newValue = e.target.value;
    setAmount(newValue);
  };

  let mp = 0;
  let p = amount;
  let r = interest / 100;
  let t = year;
  let yearlyPay;
  let n = 12 * t;
  let apr = r / 12;

  const handleCalculate = () => {
    r = interest / 100;
    mp = ((p * apr) / 1 - 1 / (1 + apr)) ^ n;
    setMonthlyRepayment(mp);

    yearlyPay = mp * n;

    setTotalYearly(yearlyPay);
    setOutput(!output);
    setAmount("");
    setYear("");
  };

  return (
    <div className="bg-blue-50 w-screen h-screen flex justify-center items-center">
      <div className="bg-white sm:w-2/3 h-5/6 flex flex-col sm:flex-row  sm:gap-8 justify-between rounded-r-3xl">
        <div className=" sm:w-2/4 p-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <h1 className="text-slate-900 font-bold text-2xl">
              Mortgage Calculator
            </h1>
            <a className="text-slate-500 hover:underline" href="index.html">
              Clear All
            </a>
          </div>
          <div className="mt-11 ">
            <div>
              <label className="text-slate-500">Mortgage Amount</label>
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
                  <span className="w-auto p-1 bg-blue-50 text-center flex items-center justify-center rounded-r-lg text-slate-500">
                    years
                  </span>
                </div>
              </div>

              <div className="w-5/12">
                <label className="text-slate-500">Interest Rate</label>
                <div className="w-full h-10 border-2 flex rounded-lg mt-2">
                  <input
                    required
                    className="w-full border-0 rounded-l-lg p-4"
                    type="text"
                    value={interest}
                  />
                  <span
                    className="w-8   bg-blue-50 text-center flex items-center justify-center 
                      rounded-r-lg text-slate-500"
                  >
                    %
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <label className="text-slate-500">Mortgage Amount</label>
              <div className="w-full h-10 border-2 flex rounded-lg mt-2">
                <span className="w-8 bg-blue-50 text-center flex items-center justify-center rounded-l-lg">
                  <input className="" type="radio" />
                </span>
                <span className="flex items-center text-custom-blue text-{20px} font-medium  ml-5">
                  Repayment
                </span>
              </div>
              <div className="w-full h-10 border-2 flex rounded-lg mt-2">
                <span className="w-8 bg-blue-50 text-center flex items-center justify-center rounded-l-lg">
                  <input className="" type="radio" />
                </span>
                <span className="flex items-center text-custom-blue text-{20px} font-medium  ml-5">
                  Interest Only
                </span>
              </div>
            </div>
            {amount ===0 && year === 0 ? (
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
            ) : (
              <button
                className="bg-custom-bg w-full sm:w-7/12 rounded-3xl h-11 mt-8 text-custom-blue font-bold flex 
              justify-center items-center gap-2 p-2 text-{20px} sm:text-xs"
              >
                <span className="">
                  <img className="" src={calc} alt="calc" />
                </span>
                Calculate Repayments
              </button>
            )}
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
            bg-slate-900 h-2/4 mt-6 flex flex-col justify-center gap-3 p-4"
            >
              <span className="text-slate-400 font-bold">
                Your monthly repayments
              </span>
              <h1 className="text-custom-bg font-bold text-5xl">
                ${monthlyRepayment}
              </h1>
              <hr className="text-slate-400" />

              <span className="text-slate-400 font-bold">
                Total you will pay over the term
              </span>
              <h12 className="text-white font-bold text-4xl">
                ${totalYearly}
              </h12>
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
