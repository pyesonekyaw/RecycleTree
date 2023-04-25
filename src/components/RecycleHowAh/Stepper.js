import React, { useState } from "react";

const steps = [
  {
    title: "Is it contaminated with food/drinks?",
    content:
      "Before throwing your recyclables into the recycling bins, remember to rinse and dry them! If they are contaminated with oil stains, food residues, or anything else, not only does it make them non-recyclable, but it will cross-contaminate everything near it. A staggering 40% of items are contaminated in Singapore, and you surely do not want your recycling efforts to go to waste because of one contaminated bottle",
  },
  {
    title: "Is it made up of more than one material?",
    content:
      "Certain objects made up of more than one material, such as coffee cups made of paper with a thin layer of plastic coating on the inside, cannot be recycled unless the materials are separated, which required a special machine. Either make sure that the item you are recycling is made up of all materials that are recyclable, or make sure it is only made up of one (recyclable) material.",
  },
  {
    title: "Does it contain hazardous waste?",
    content:
      "Hazardous waste has substantial or potential threats to public health and the environment. So make sure the item you are disposing are free of such waste, such as clinical waste, paint, flammable substances, etc.",
  },
  {
    title: "Is it a disposable item?",
    content:
      "Disposable items are usually made up of materials which are not recyclable. Even if the disposable is made up of biodegradable material, it is not clear that it can be recycled like other normal recyclables.",
  },
];

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [noRecyclable, setNoRecyclable] = useState(false);
  const handleNo = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      setActiveStep(5);
      setCompleted(true);
    }
  };

  const handleYes = () => {
    setActiveStep(5);
    setNoRecyclable(true);
    setCompleted(true);
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(false);
    setNoRecyclable(false);
  };

  return (
    <div className="flex flex-col items-center py-6" data-cy="stepper">
      <div className="flex flex-col items-start min-w-full max-w-md p-4 bg-white shadow-md rounded-lg ">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center" data-cy="step">
            <div
              className={`w-8 h-8 ${
                index === activeStep
                  ? "bg-green-200 text-green-700"
                  : index < activeStep
                  ? "bg-gray-300 text-gray-500"
                  : "bg-gray-100 text-gray-400"
              } rounded-full flex items-center justify-center font-bold`}
            >
              {index + 1}
            </div>
            <div
              className={` ml-4 w-full  rounded-lg p-4  ${
                index === activeStep
                  ? "border-solid border-2 border-green-300"
                  : ""
              } `}
            >
              <h2
                className={`text-xl font-semibold  ${
                  index === activeStep ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {step.title}
              </h2>
              {index === activeStep && (
                <>
                  <p className="mt-2 text-gray-600">{step.content}</p>
                  <div className="mt-4 flex justify-left space-x-2">
                    {activeStep > 0 && (
                      <button
                        onClick={handleBack}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                      >
                        Back
                      </button>
                    )}
                    <button
                      onClick={handleYes}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    >
                      Yes
                    </button>
                    <button
                      onClick={handleNo}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg"
                    >
                      No
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {completed && (
        <div className="flex flex-col items-center mt-4 w-full max-w-md p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            {noRecyclable ? "Not recyclable!" : "Recyclable!"}
          </h2>
          <p className="mt-2 text-gray-600">
            {noRecyclable
              ? "As you answer Yes to one of the questions above, the item cannot be recycled!"
              : "As you answered NO to all of the questions above, the item can be recycled!"}
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default Stepper;
