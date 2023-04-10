import React from "react";
import ReactEcharts from 'echarts-for-react';
import { data } from '../data/Wine-Data'
import { AlcoholData } from "../types";

interface ScatterPlotProps {

}
const ScatterPlot: React.FC<ScatterPlotProps> = () => {
  const option = {
    xAxis: {
      type: "value",
      name: "Color Intensity"
    },
    yAxis: {
      type: "value",
      name: "Hue"
    },
    series: [
      {
        data: data.map((d) => [d["Color intensity"], d["Hue"]]),
        type: "scatter"
      }
    ]
  };

  return <ReactEcharts option={option} />;
};

interface BarChartProps {

}
const BarChart: React.FC<BarChartProps> = () => {
// extracting the desired alcohol data
  const alcoholData: AlcoholData = {};
  data.forEach((d) => {
    if (alcoholData[d.Alcohol]) {
      alcoholData[d.Alcohol].push(d["Malic Acid"]);
    } else {
      alcoholData[d.Alcohol] = [d["Malic Acid"]];
    }
  });

  const option = {
    xAxis: {
      type: "category",
      data: Object.keys(alcoholData),
      name: "Alcohol"
    },
    yAxis: {
      type: "value",
      name: "Average Malic Acid"
    },
    series: [
      {
        data: Object.values(alcoholData).map(
          (values) =>
            values.reduce((total, value) => total + value) / values.length
        ),
        type: "bar"
      }
    ]
  };

  return <ReactEcharts option={option} />;
};

const Charts = () => {
  return (
    <div>
      <ScatterPlot />
      <BarChart />
    </div>
  );
};

export default Charts;
