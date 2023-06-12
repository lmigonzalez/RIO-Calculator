/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useParams } from 'react-router-dom';
function Result() {
  const location = useLocation();
  const {
    salesGoal,
    salesIncrease,
    profitMargin,
    numSalesReps,
    numSupportStaff,
    numSalesManagers,} =useParams()
  const navigate = useNavigate()  

  const initialValues = {
    salesGoal: salesGoal ??"",
    salesIncrease: salesIncrease??"",
    profitMargin: profitMargin??"50",
    numSalesReps: numSalesReps??"",
    numSupportStaff: numSupportStaff??"",
    numSalesManagers: numSalesManagers??"",
  };

  const [values, setValues] = useState(initialValues);
  const [explanationNum, setExplanationNum] = useState(0);
  const [
    {
      // annualIncreasePerRep,
      // annualNetProfitPerRep,
      // annualCostPerUser,
      totalAnnualCost,
      expectedSalesIncreaseForAllUsers,
      expectedTotalNetProfitIncrease,
      roi,
    },
    SetResult,
  ] = useState(calculateROI(values));

  const [url, setUrl] = useState('');

  function onChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }
  useEffect(() => {
    const mainPath = window.location.href;
    const result = calculateROI(values);
    const rs = mainPath.indexOf("result");
    SetResult(result);
    setUrl(
          `${rs !== -1?mainPath.substring(0,rs):mainPath}result/${values.salesGoal===""?"NaN":values.salesGoal}/${values.salesIncrease===""?"NaN":values.salesIncrease}/${values.salesIncrease===""?"NaN":values.salesIncrease}/${values.profitMargin===""?"NaN":values.profitMargin}/${values.numSalesReps===""?"NaN":values.numSalesReps}/${values.numSupportStaff===""?"NaN":values.numSupportStaff}/${values.numSalesManagers===""?"NaN":values.numSalesManagers}`

    );
  }, [values]);


  return (
   <main className="font-display">
      <div className="h-14"></div>
      <div className="m-auto flex w-full max-w-[1400px] flex-col  justify-between gap-4 px-2 lg:flex-row">
        <div className="flex w-full flex-col gap-6 rounded-md bg-[#F4F7F8] p-10 lg:w-3/5">
          {/* row 1 */}
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 1 && (
                <div className="absolute bottom-full z-10 rounded bg-white px-6 py-1 shadow-lg">
                  <p>The average sales goal per sales rep.</p>
                </div>
              )}

              <label className="flex items-center text-sm" htmlFor="">
                Average Sales Rep Annual Goal{' '}
                <AiFillExclamationCircle
                  fill="#99afc4ff"
                  className="cursor-pointer"
                  onMouseEnter={() => setExplanationNum(1)}
                  onMouseLeave={() => setExplanationNum(0)}
                />{' '}
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="salesGoal"
                  placeholder="Add value"
                  value={formatNumberInput(values.salesGoal)}
                  onChange={onChange}
                  className="h-10 w-full rounded border-[1px] border-gray-300 px-12"
                />
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-l border-[1px] border-gray-300 bg-gray-200">
                  $
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 2 && (
                <div className="absolute bottom-full z-10 rounded bg-white px-6 py-1 shadow-lg">
                  <p>The expected increase in sales by rep by using.</p>
                </div>
              )}
              <label className="flex items-center text-sm" htmlFor="">
                Expected Increase by Using Identifee{' '}
                <AiFillExclamationCircle
                  fill="#99afc4ff"
                  className="cursor-pointer"
                  onMouseEnter={() => setExplanationNum(2)}
                  onMouseLeave={() => setExplanationNum(0)}
                />
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="salesIncrease"
                  placeholder="Add value"
                  value={formatNumberInput(values.salesIncrease)}
                  onChange={onChange}
                  className="h-10 w-full rounded border-[1px] border-gray-300 px-2 pr-10"
                />
                <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-r border-[1px] border-gray-300 bg-gray-200">
                  %
                </div>
              </div>
            </div>
          </div>

          {/* row 2 */}
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 3 && (
                <div className="absolute bottom-full z-10 rounded bg-white px-6 py-1 shadow-lg">
                  <p>The net profit margin.</p>
                </div>
              )}
              <label className="flex items-center text-sm" htmlFor="">
                Gross Margin{' '}
                <AiFillExclamationCircle
                  fill="#99afc4ff"
                  className="cursor-pointer"
                  onMouseEnter={() => setExplanationNum(3)}
                  onMouseLeave={() => setExplanationNum(0)}
                />
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="profitMargin"
                  placeholder="Add value"
                  value={formatNumberInput(values.profitMargin)}
                  onChange={onChange}
                  className="h-10 w-full rounded border-[1px] border-gray-300 px-2 pr-10"
                />
                <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-r border-[1px] border-gray-300 bg-gray-200">
                  %
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 4 && (
                <div className="absolute bottom-full z-10 rounded bg-white px-6 py-1 shadow-lg">
                  <p>The total number of client facing reps.</p>
                </div>
              )}
              <label className="flex items-center text-sm" htmlFor="">
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
                placeholder="Add value"
                value={formatNumberInput(values.numSalesReps)}
                onChange={onChange}
                className="h-10 rounded border-[1px] border-gray-300 px-2"
              />
            </div>
          </div>

          {/* row 3 */}

          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 5 && (
                <div className="absolute bottom-full z-10 rounded bg-white px-6 py-1 shadow-lg">
                  <p> The total number of support staff.</p>
                </div>
              )}
              <label className="flex items-center text-sm" htmlFor="">
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
                placeholder="Add value"
                value={formatNumberInput(values.numSupportStaff)}
                onChange={onChange}
                className="h-10 rounded border-[1px] border-gray-300 px-2"
              />
            </div>
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 6 && (
                <div className="absolute bottom-full z-10 rounded bg-white px-6 py-1 shadow-lg">
                  <p>The total number of sales managers.</p>
                </div>
              )}
              <label className="flex items-center text-sm" htmlFor="">
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
                placeholder="Add value"
                value={formatNumberInput(values.numSalesManagers)}
                onChange={onChange}
                className="h-10 rounded border-[1px] border-gray-300 px-2"
              />
            </div>
          </div>

          <p className="text-center text-sm">
            Support staff is included in the identifee costs, but does not add
            to the annual profit figure.
          </p>
        </div>

        <div className="mt-10 h-full w-full space-y-4 rounded-md bg-[#F4F7F8] px-8 py-10 font-light text-black md:mt-0 lg:mt-0 lg:w-2/5">
          <div className="text-center">
            <p className="mb-4 font-semibold">YOUR RETURN ON INVESTMENT</p>

            <p className="text-center text-5xl font-bold text-[#539165]">              
              {isNaN(roi) ?"": formatNumberInput(roi.toString(), '%')}
             {!isNaN(roi) &&<span className="text-3xl font-light text-black"> /year</span>}
            </p>
          </div>

          <p className="text-center text-base font-medium">With Identifee</p>
          <div className="flex items-start justify-between gap-4">
            <p>Total Annual Cost:</p>
            <p className="font-semibold">
              {' '}
              {isNaN(totalAnnualCost)?"":formatNumberInput(totalAnnualCost.toString(), '$')}
            </p>
          </div>

          <hr className="" />
          <div className="flex items-start justify-between gap-4">
            <p>Annual Sales Increase:</p>
            <p className="font-semibold">
              {' '}
              {isNaN(expectedSalesIncreaseForAllUsers) ?"":formatNumberInput(
                expectedSalesIncreaseForAllUsers.toString(),
                '$'
              )}
            </p>
          </div>
          <hr className="" />
          <div className="flex items-start justify-between gap-4 ">
            <p>Profit Increase:</p>
            <p className="font-semibold">
              {' '}
              {isNaN( expectedTotalNetProfitIncrease)?"": formatNumberInput(
                expectedTotalNetProfitIncrease.toString(),
                '$'
              )}
            </p>
          </div>
          <hr className="" />
          <div className="flex items-center justify-between">
            <CopyToClipboard text={url} options={{ message: 'link copied' }}>
              <button
                className={`h-12 cursor-pointer  rounded-[5px] bg-[#172DE1] px-[15px] text-white transition-all hover:scale-95 `}
              >
                Share Your ROI
              </button>
            </CopyToClipboard>
            <button className="h-12 rounded-[5px] border-[1px] border-[#172DE1] px-[15px] text-[#172DE1] transition-all hover:scale-95">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </main>
  );
}

export default Result;

function calculateROI({
  salesGoal,
  salesIncrease,
  profitMargin,
  numSalesReps,
  numSupportStaff,
  numSalesManagers,
}) {
  salesGoal = parseFloat(salesGoal.replace(/[$|%|,]+/g, ''));
  salesIncrease = parseFloat(salesIncrease.replace(',', ''));
  profitMargin = parseFloat(profitMargin.replace(',', ''));
  numSalesReps = parseFloat(numSalesReps.replace(',', ''));
  numSupportStaff = parseFloat(numSupportStaff.replace(',', ''));
  numSalesManagers = parseFloat(numSalesManagers.replace(',', ''));

  const annualIncreasePerRep = salesGoal * (salesIncrease / 100);
  const annualNetProfitPerRep = annualIncreasePerRep * (profitMargin / 100);
  const annualCostPerUser = 6000;
  const totalAnnualCost =
    annualCostPerUser * (numSalesReps + numSupportStaff + numSalesManagers);
  const expectedSalesIncreaseForAllUsers = annualIncreasePerRep * numSalesReps;
  const expectedTotalNetProfitIncrease =
    annualNetProfitPerRep * numSalesReps - totalAnnualCost;
  const roi = ((expectedTotalNetProfitIncrease / totalAnnualCost) * 100).toFixed();

  return {
    annualIncreasePerRep,
    annualNetProfitPerRep,
    annualCostPerUser,
    totalAnnualCost,
    expectedSalesIncreaseForAllUsers,
    expectedTotalNetProfitIncrease,
    roi,
  };
}

function formatNumberInput(inputValue, type) {
  if (inputValue.charAt(inputValue.length - 1) === '.') return inputValue;

  let modifier = '';
  if (inputValue.match(/^\$/g) || type === '$') modifier = '$';

  if (inputValue.match(/%$/g) || type === '%') modifier = '%';

  // Remove all non-digit characters except the decimal point
  const cleanedValue = inputValue.replace(/[^\d.]/g, '');

  // Split the cleaned value into integer and decimal parts
  const [integerPart, decimalPart] = cleanedValue.split('.');

  // Format the integer part with space separators
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Reconstruct the formatted number with the decimal part (if present)
  let formattedNumber = decimalPart
    ? `${formattedInteger}.${
        decimalPart.length > 2 ? decimalPart.slice(0, 2) : decimalPart
      }`
    : formattedInteger;

  if (modifier === '$') formattedNumber = '$' + formattedNumber;
  if (modifier === '%') formattedNumber += '%';

  return formattedNumber;
}
