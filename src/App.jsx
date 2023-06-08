import { useState } from 'react';

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
      <div className="flex w-full items-center justify-between px-2">
        <div className="flex w-3/5 flex-col gap-4 px-2 py-4">
          {/* row 1 */}
          <div className="flex justify-between gap-4">
            <div className="flex w-1/2 flex-col">
              <label htmlFor="">Average Sales Rep Annual Goal</label>
              <input
                type="text"
                name="input1"
                value={values.input1}
                onChange={onChange}
                className="h-8 rounded border-[2px] border-gray-300 px-2"
              />
            </div>
            <div className="flex w-1/2 flex-col">
              <label htmlFor="">Expected Increase by Using Identifee</label>
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
          <div className="flex justify-between gap-4">
            <div className="flex w-1/2 flex-col">
              <label htmlFor="">Profit Margin</label>
              <input
                type="text"
                name="input3"
                value={values.input3}
                onChange={onChange}
                className="h-8 rounded border-[2px] border-gray-300 px-2"
              />
            </div>
            <div className="flex w-1/2 flex-col">
              <label htmlFor="">Total Number of Sales Rep</label>
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

          <div className="flex justify-between gap-4">
            <div className="flex w-1/2 flex-col">
              <label htmlFor="">Total Number of Support Staff</label>
              <input
                type="text"
                name="input5"
                value={values.input5}
                onChange={onChange}
                className="h-8 rounded border-[2px] border-gray-300 px-2"
              />
            </div>
            <div className="flex w-1/2 flex-col">
              <label htmlFor="">Total Number of Sales Managers</label>
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
              className="h-10 w-1/2 rounded bg-[#E55807] text-lg text-white transition-all hover:scale-95"
            >
              Calculate
            </button>
          </div>
        </div>

        <div className="space-y-4 rounded-md bg-[#617A55] px-2 py-4 font-light text-white">
          <p className="text-center text-4xl font-bold text-[#]">629%</p>
          <p>Expected Return on Investment Per Year with Indentifee</p>
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
            <p>Expected total net profit increase for all users</p>
            <p className="font-semibold"> $1,682,000</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="h-8 rounded bg-[#E55807] px-4">
              Share Your ROI
            </button>
            <button className="h-8 border-[1px] border-white px-4 text-white">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
