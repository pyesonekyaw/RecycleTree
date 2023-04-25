const Recyclables = () => {
  const materials = [
    {
      name: "Paper",
      Yes: "Paper envelopes, carton juice boxes, newspapers, magazines, cardboard, boxes",
      No: "Tissues, paper towels, disposable wooden chopsticks, wax paper",
    },
    {
      name: "Plastic",
      Yes: "Plastic bottles, detergent bottles, skincare containers, food containers, clothes hanger",
      No: "Film covers (eg.chopsticks, crisp packets), disposable cutlery",
    },
    {
      name: "Metal",
      Yes: "Metal can, aerosol can, clean aluminium trays and aluminium foil",
      No: "Metal cans that are contaminated with food or liquid waste",
    },
    {
      name: "Glass",
      Yes: "Cleaned food jars, Glass drink/liquor/condiment bottles, glassware",
      No: "Mirror, ceramic/pyrex or other heat resistant products, light bulb, ",
    },
    {
      name: "Others",
      Yes: "Electronic waste (eg. Used mobile phones, tabliets and laptops)",
      No: "Food waste, batteries, nappies, stationery (pen and pencil)",
    },
  ];

  return (
    <div
      className="flex min-h-screen items-center justify-center my-2"
      data-cy="recyclables"
    >
      <div className="grid grid-cols-3 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-80 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="static/materials/paper.jpg"
              alt="paper-image"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-2xl font-bold text-white">
              {materials[0].name}
            </h1>
            <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-lime-500 py-1">
                Yes:{" "}
              </span>
              {materials[0].Yes}
            </p>
            <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-red-500 py-1">No: </span>
              {materials[0].No}
            </p>
          </div>
        </div>

        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-80 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="static/materials/plastic.jpg"
              alt="plastic-image"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-2xl font-bold text-white">
              {materials[1].name}
            </h1>
            <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-lime-500 py-1">
                Yes:{" "}
              </span>
              {materials[1].Yes}
            </p>
            <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-red-500 py-1">No: </span>
              {materials[1].No}
            </p>
          </div>
        </div>

        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-80 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="static/materials/metal.jpg"
              alt="metals-image"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-2xl font-bold text-white">
              {materials[2].name}
            </h1>
            <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-lime-500 py-1">
                Yes:{" "}
              </span>
              {materials[2].Yes}
            </p>
            <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-red-500 py-1">No: </span>
              {materials[2].No}
            </p>
          </div>
        </div>

        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-80 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="static/materials/glass.jpg"
              alt="glass-image"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-2xl font-bold text-white">
              {materials[3].name}
            </h1>
            <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-lime-500 py-1">
                Yes:{" "}
              </span>
              {materials[3].Yes}
            </p>
            <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-red-500 py-1">No: </span>
              {materials[3].No}
            </p>
          </div>
        </div>

        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-80 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="static/materials/others.jpg"
              alt="others-image"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-2xl font-bold text-white">
              {materials[4].name}
            </h1>
            <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-lime-500 py-1">
                Yes:{" "}
              </span>
              {materials[4].Yes}
            </p>
            <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-red-500 py-1">No: </span>
              {materials[4].No}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recyclables;
