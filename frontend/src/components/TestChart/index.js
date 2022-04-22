import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const TestChart = () => {
    return (
      <>
        <Bar
          label={'By Age Group'}
          datasetIdKey="id"
          data={{
            labels: ["Under 1 year", "1-4 Years", "5-14"],
            datasets: [
              {
                id: 1,
                label: "Total Deaths",
                data: [41, 6, 7]
              },
              {
                id: 2,
                label: "Covid 19 Deaths",
                data: [3, 2, 1]
              }
            ]
          }}
        />
      </>
    );
  };
  
  export default TestChart;
  