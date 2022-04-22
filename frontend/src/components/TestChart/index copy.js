import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const TestChart = () => {
    return (
      <>
        <Line
          datasetIdKey="id"
          data={{
            labels: ["18-29 years", "Jul", "Aug"],
            datasets: [
              {
                id: 1,
                label: "",
                data: [5, 6, 7]
              },
              {
                id: 2,
                label: "",
                data: [3, 2, 1]
              }
            ]
          }}
        />
      </>
    );
  };
  
  export default TestChart;
  