import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
const Result = () => {
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    setData(params);
  }, []);
  console.log(data);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mt-10 flex h-auto w-full flex-col justify-between space-y-4 rounded-md bg-[#F4F7F8] px-4 py-6 font-light text-black md:mt-0 lg:mt-0 lg:w-2/5">
        <p className="text-center text-5xl font-bold text-[#539165]">
          {data && data.roi}
        </p>
        <p className="text-center text-base font-medium">
          Expected Return on Investment Per Year with Indentifee
        </p>
        <div className="flex items-start justify-between gap-4">
          <p>Total annual Identifee cost for all users:</p>
          <p className="font-semibold">{data.totalAnnualCost}</p>
        </div>
        <div className="flex items-start justify-between gap-4">
          <p>Expected annual sales increase for all users:</p>
          <p className="font-semibold">
            {data.expectedSalesIncreaseForAllUsers}
          </p>
        </div>
        <div className="flex items-start justify-between gap-4 ">
          <p>Expected total net profit increase for all users:</p>
          <p className="font-semibold">{data.expectedTotalNetProfitIncrease}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <button className="h-12 rounded-xl bg-[#172DE1] px-6 text-white transition-all hover:scale-95">
            Share Your ROI
          </button>
          <button className="h-12 rounded-xl border-[1px] border-[#172DE1] px-6 text-[#172DE1] transition-all hover:scale-95">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
