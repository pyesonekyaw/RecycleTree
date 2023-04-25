import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(async () => await import("react-apexcharts"), {
  ssr: false,
});

const RecycleStats = () => {
  const details = {
    options: {
      chart: {
        id: "RecyclingRates",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
          2021,
        ],
      },
      title: {
        text: "Recycling Rates (%) in Singapore",
        align: "center",
      },
    },
    series: [
      {
        name: "Percentage",
        data: [22, 20, 20, 20, 19, 19, 21, 21, 22, 17, 13, 13],
      },
    ],
  };
  return (
    <div className="app" data-cy="recycle-stats">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={details.options}
            series={details.series}
            type="bar"
            width={"100%"}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default RecycleStats;
