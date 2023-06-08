import { useState } from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
function App() {
  const initialValues = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
  };

  const [values, setValues] = useState(initialValues);
  const [explanationNum, setExplanationNum] = useState(0);

  function onChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function getResults() {
    console.log(values);
  }

  return (
    <main>
      <h1 className="mb-16 mt-10 text-center text-4xl">ROI Calculator</h1>
      <div className="m-auto flex w-full max-w-[1200px] flex-col items-center justify-between px-2 lg:flex-row">
        <div className="ld:w-3/5 flex w-full flex-col gap-4 px-2 py-4">
          {/* row 1 */}
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 1 && (
                <div className="absolute bottom-full z-10 rounded bg-gray-100 px-6 py-1">
                  <p>Explanation text</p>
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
                name="input1"
                value={values.input1}
                onChange={onChange}
                className="h-8 rounded border-[2px] border-gray-300 px-2"
              />
            </div>
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 2 && (
                <div className="absolute bottom-full z-10 rounded bg-gray-100 px-6 py-1">
                  <p>Explanation text</p>
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
                name="input2"
                value={values.input2}
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
                  <p>Explanation text</p>
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
                name="input3"
                value={values.input3}
                onChange={onChange}
                className="h-8 rounded border-[2px] border-gray-300 px-2"
              />
            </div>
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 4 && (
                <div className="absolute bottom-full z-10 rounded bg-gray-100 px-6 py-1">
                  <p>Explanation text</p>
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
                name="input4"
                value={values.input4}
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
                  <p>Explanation text</p>
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
                name="input5"
                value={values.input5}
                onChange={onChange}
                className="h-8 rounded border-[2px] border-gray-300 px-2"
              />
            </div>
            <div className="relative flex w-full flex-col md:w-1/2">
              {explanationNum === 6 && (
                <div className="absolute bottom-full z-10 rounded bg-gray-100 px-6 py-1">
                  <p>Explanation text</p>
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
                name="input6"
                value={values.input6}
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
          <p className="text-center text-4xl font-bold text-[#]">629%</p>
          <p className="text-center">
            Expected Return on Investment Per Year with Indentifee
          </p>
          <div className="flex items-start justify-between gap-4">
            <p>Expected annual sales increase per sales rep:</p>
            <p className="font-semibold"> $100,000</p>
          </div>
          <div className="flex items-start justify-between gap-4">
            <p>Expected annual net profit per sales rep:</p>
            <p className="font-semibold"> $50,000</p>
          </div>
          <div className="flex items-start justify-between gap-4">
            <p>Annual Identifee cost per user:</p>
            <p className="font-semibold"> $6,000</p>
          </div>
          <div className="flex items-start justify-between gap-4">
            <p>Total annual Identifee cost for all users:</p>
            <p className="font-semibold"> $318,000</p>
          </div>
          <div className="flex items-start justify-between gap-4">
            <p>Expected annual sales increase for all users:</p>
            <p className="font-semibold"> $2,000,000</p>
          </div>
          <div className="flex items-start justify-between gap-4 ">
            <p>Expected total net profit increase for all users:</p>
            <p className="font-semibold"> $1,682,000</p>
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
