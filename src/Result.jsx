import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

const Result = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    setData(params);
  }, []);
  console.log(data);

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

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mt-10 h-full w-full space-y-4 rounded-md bg-[#F4F7F8] px-4 py-8 font-light text-black md:mt-0 lg:mt-0 lg:w-2/5">
        <p className="text-center text-5xl font-bold text-[#539165]">
          {formatNumberInput(data.roi,'%')}
        </p>
        <p className="text-center text-base font-medium">
          Expected Return on Investment Per Year with Indentifee
        </p>
        <div className="flex items-start justify-between gap-4">
          <p>Total annual Identifee cost for all users:</p>
          <p className="font-semibold"> {data.totalAnnualCost}</p>
        </div>
        <div className="flex items-start justify-between gap-4">
          <p>Expected annual sales increase for all users:</p>
          <p className="font-semibold">
            {' '}
            {formatNumberInput(data.expectedSalesIncreaseForAllUsers,'$')}
          </p>
        </div>
        <div className="flex items-start justify-between gap-4 ">
          <p>Expected total net profit increase for all users:</p>
          <p className="font-semibold">
            {' '}
            {formatNumberInput(data.expectedTotalNetProfitIncrease,'$')}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => navigate('/')}
            className="h-10 rounded-md bg-[#172DE1] px-6 text-white  transition-all hover:scale-95"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
