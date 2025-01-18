import { useState } from "react";
import Button from "../../compoents/Button";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

export default function FormPage() {
  const [step, setStep] = useState(1);

  const stepsLength = [1, 2, 3, 4];
  const goToNextStep = (e) => {
    e.preventDefault();
    if (step < 4) setStep(step + 1);
  };

  return (
    <form className="w-full ">
      <header>
        <h1 className=" text-center">Multi Step Form</h1>
      </header>

      <hr className="my-4" />
      {/* {steps} */}
      <div className="p-4 flex gap-4 justify-between max-w-80 mx-auto ">
        {stepsLength.map((st, index) => (
          <div
            className={`text-xs w-8 h-8 flex justify-center items-center rounded-full ${st<= step? "bg-indigo-500 text-white":" text-indigo-600  bg-gray-200"} `}
            key={index}
          >
            {st}
          </div>
        ))}
      </div>

      {/* {fom content} */}
      <div className="min-h-56 my-3 bg-gray-200 ">
        {step === 1 ? (
        <Step1/>
    ) : step === 2 ? (
    <Step2/>
    ) : step === 3 ? (
    <Step3/>
    ) :  (
    <Step4/> 
    )}
    </div>

      {/* {button} */}

     <div className="w-full flex justify-center">
     <Button
        className="bg-indigo-500 text-white"
        label={step===4? "finish":"next"}
        onClick={goToNextStep}
      />
     </div>
    </form>
  );
}
