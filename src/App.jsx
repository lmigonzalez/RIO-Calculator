import { useEffect, useState } from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
function App() {
  const initialValues = {
    salesGoal: "1000000.00",
    salesIncrease: "10.00",
    profitMargin: "50.00",
    numSalesReps: "40",
    numSupportStaff: "3",
    numSalesManagers:"10",
  };  

  const initialResult = {
    annualIncreasePerRep:0,
    annualNetProfitPerRep:0,
    annualCostPerUser:0,
    totalAnnualCost:0,
    expectedSalesIncreaseForAllUsers:0,
    expectedTotalNetProfitIncrease: 0,
    roi:0,
  };

  const [values, setValues] = useState(initialValues);
  const [explanationNum, setExplanationNum] = useState(0);
  const [{ annualIncreasePerRep,
    annualNetProfitPerRep,
    annualCostPerUser,
    totalAnnualCost,
    expectedSalesIncreaseForAllUsers,
    expectedTotalNetProfitIncrease,
    roi }, SetResult] = useState(initialResult)

  function onChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }
 

  function getResults() {
    SetResult(calculateROI(values));   
  }

  return (
    <main>
      <h1 className="mb-16 mt-10 text-center text-4xl">ROI Calculator</h1>
      <div className="m-auto flex w-full max-w-[1200px] flex-col items-center justify-between px-2 lg:flex-row">
        <div className="lg:w-3/5 flex w-full flex-col gap-4 px-2 py-4">
          {/* row 1 */}
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 1 && (
                <div className="absolute bottom-full z-10 rounded bg-gray-100 px-6 py-1">
                  <p>The average sales goal per sales rep.</p>
                </div>
              )}

              <label className="flex items-center" htmlFor="">
                Average Sales Rep Annual Goal{' '}
                <AiFillExclamationCircle
                  fill="#99afc4ff"
                  className="cursor-pointer"
                  onMouseEnter={() => setExplanationNum(1)}
                  onMouseLeave={() => setExplanationNum(0)}
                />{' '}
              </label>
              <input
                type="text"
                name="salesGoal"
                value={formatNumberInput(values.salesGoal)}
                onChange={onChange}
                className="h-8 rounded border-[2px] border-gray-300 px-2"
              />
            </div>
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 2 && (
                <div className="absolute bottom-full z-10 rounded bg-gray-100 px-6 py-1">
                  <p>The expected increase in sales by rep by using.</p>
                </div>
              )}
              <label className="flex items-center" htmlFor="">
                Expected Increase by Using Identifee{' '}
                <AiFillExclamationCircle
                  fill="#99afc4ff"
                  className="cursor-pointer"
                  onMouseEnter={() => setExplanationNum(2)}
                  onMouseLeave={() => setExplanationNum(0)}
                />
              </label>
              <input
                type="text"
                name="salesIncrease"
                value={formatNumberInput(values.salesIncrease)}
                onChange={onChange}
                className="h-8 rounded border-[2px] border-gray-300 px-2"
              />
            </div>
          </div>

          {/* row 2 */}
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 3 && (
                <div className="absolute bottom-full z-10 rounded bg-gray-100 px-6 py-1">
                  <p>The net profit margin.</p>
                </div>
              )}
              <label className="flex items-center" htmlFor="">
                Profit Margin{' '}
                <AiFillExclamationCircle
                  fill="#99afc4ff"
                  className="cursor-pointer"
                  onMouseEnter={() => setExplanationNum(3)}
                  onMouseLeave={() => setExplanationNum(0)}
                />
              </label>
              <input
                type="text"
                name="profitMargin"
                value={formatNumberInput(values.profitMargin)}
                onChange={onChange}
                className="h-8 rounded border-[2px] border-gray-300 px-2"
              />
            </div>
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 4 && (
                <div className="absolute bottom-full z-10 rounded bg-gray-100 px-6 py-1">
                  <p>The total number of client facing reps.</p>
                </div>
              )}
              <label className="flex items-center" htmlFor="">
                Total Number of Sales Rep{' '}
                <AiFillExclamationCircle
                  fill="#99afc4ff"
                  className="cursor-pointer"
                  onMouseEnter={() => setExplanationNum(4)}
                  onMouseLeave={() => setExplanationNum(0)}
                />
              </label>
              <input
                type="text"
                name="numSalesReps"
                value={formatNumberInput(values.numSalesReps)}
                onChange={onChange}
                className="h-8 rounded border-[2px] border-gray-300 px-2"
              />
            </div>
          </div>

          {/* row 3 */}

          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 5 && (
                <div className="absolute bottom-full z-10 rounded bg-gray-100 px-6 py-1">
                  <p> The total number of support staff.</p>
                </div>
              )}
              <label className="flex items-center" htmlFor="">
                Total Number of Support Staff{' '}
                <AiFillExclamationCircle
                  fill="#99afc4ff"
                  className="cursor-pointer"
                  onMouseEnter={() => setExplanationNum(5)}
                  onMouseLeave={() => setExplanationNum(0)}
                />
              </label>
              <input
                type="text"
                name="numSupportStaff"
                value={formatNumberInput(values.numSupportStaff)}
                onChange={onChange}
                className="h-8 rounded border-[2px] border-gray-300 px-2"
              />
            </div>
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 6 && (
                <div className="absolute bottom-full z-10 rounded bg-gray-100 px-6 py-1">
                  <p>The total number of sales managers.</p>
                </div>
              )}
              <label className="flex items-center" htmlFor="">
                Total Number of Sales Managers{' '}
                <AiFillExclamationCircle
                  fill="#99afc4ff"
                  className="cursor-pointer"
                  onMouseEnter={() => setExplanationNum(6)}
                  onMouseLeave={() => setExplanationNum(0)}
                />
              </label>
              <input
                type="text"
                name="numSalesManagers"
                value={formatNumberInput(values.numSalesManagers)}
                onChange={onChange}
                className="h-8 rounded border-[2px] border-gray-300 px-2"
              />
            </div>
          </div>

          <p className="text-center text-sm">
            Support staff is included in the identifee costs, but does not add
            to the annual profit figure.
          </p>

          <div className="mt-10 flex justify-center">
            <button
              onClick={getResults}
              className="h-10 w-1/2 rounded bg-[#FFE194] text-lg  transition-all hover:scale-95"
            >
              Calculate
            </button>
          </div>
        </div>

        <div className="mt-10 w-full space-y-4 rounded-md bg-[#1B9C85] px-2 py-4 font-light text-white lg:mt-0 lg:w-2/5">
          <p className="text-center text-4xl font-bold text-[#]">{formatNumberInput(roi.toString())}</p>
          <p className="text-center">
            Expected Return on Investment Per Year with Indentifee
          </p>
          <div className="flex items-start justify-between gap-4">
            <p>Expected annual sales increase per sales rep:</p>
            <p className="font-semibold"> {formatNumberInput(annualIncreasePerRep.toString())}</p>
          </div>
          <div className="flex items-start justify-between gap-4">
            <p>Expected annual net profit per sales rep:</p>
            <p className="font-semibold"> {formatNumberInput(annualNetProfitPerRep.toString())}</p>
          </div>
          <div className="flex items-start justify-between gap-4">
            <p>Annual Identifee cost per user:</p>
            <p className="font-semibold"> {formatNumberInput(annualCostPerUser.toString())}</p>
          </div>
          <div className="flex items-start justify-between gap-4">
            <p>Total annual Identifee cost for all users:</p>
            <p className="font-semibold"> {formatNumberInput(totalAnnualCost.toString())}</p>
          </div>
          <div className="flex items-start justify-between gap-4">
            <p>Expected annual sales increase for all users:</p>
            <p className="font-semibold"> {formatNumberInput(expectedSalesIncreaseForAllUsers.toString())}</p>
          </div>
          <div className="flex items-start justify-between gap-4 ">
            <p>Expected total net profit increase for all users:</p>
            <p className="font-semibold"> {formatNumberInput(expectedTotalNetProfitIncrease.toString())}</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="h-8 rounded bg-[#FFE194] px-4 text-black">
              Share Your ROI
            </button>
            <button className="h-8 border-[1px] border-[#FFE194] px-4 text-[#FFE194]">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </main>
  );
}

export default App;

function calculateROI({
  salesGoal,
  salesIncrease,
  profitMargin,
  numSalesReps,
  numSupportStaff,
  numSalesManagers,
}) {
  salesGoal = parseFloat(salesGoal.replace(/\s/g, ""));
  salesIncrease = parseFloat(salesIncrease.replace(/\s/g, ""));
  profitMargin = parseFloat(profitMargin.replace(/\s/g, ""));
  numSalesReps = parseFloat(numSalesReps.replace(/\s/g, ""));
  numSupportStaff = parseFloat(numSupportStaff.replace(/\s/g, ""));
  numSalesManagers = parseFloat(numSalesManagers.replace(/\s/g, ""));

  const annualIncreasePerRep = salesGoal * (salesIncrease / 100);
  const annualNetProfitPerRep = annualIncreasePerRep * (profitMargin / 100);
  const annualCostPerUser = 6000;
  const totalAnnualCost =
    annualCostPerUser * (numSalesReps + numSupportStaff + numSalesManagers);
  const expectedSalesIncreaseForAllUsers = annualIncreasePerRep * numSalesReps;
  const expectedTotalNetProfitIncrease =
    annualNetProfitPerRep * numSalesReps - totalAnnualCost;
  const roi = (expectedTotalNetProfitIncrease / totalAnnualCost) * 100;

  return {
    annualIncreasePerRep,
    annualNetProfitPerRep,
    annualCostPerUser,
    totalAnnualCost,
    expectedSalesIncreaseForAllUsers,
    expectedTotalNetProfitIncrease,
    roi
  };
}

function formatNumberInput(inputValue) {
  if (inputValue.charAt(inputValue.length - 1) === '.') return inputValue;
  // Remove all non-digit characters except the decimal point
  const cleanedValue = inputValue.replace(/[^\d.]/g, "");

  // Split the cleaned value into integer and decimal parts
  const [integerPart, decimalPart] = cleanedValue.split(".");

  // Format the integer part with space separators
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  // Reconstruct the formatted number with the decimal part (if present)
  const formattedNumber = decimalPart
    ? `${formattedInteger}.${decimalPart.length>2? decimalPart.slice(0,2):decimalPart}`
    : formattedInteger;

  return formattedNumber;
}


