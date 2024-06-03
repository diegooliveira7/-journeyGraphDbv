import { Chart } from "react-google-charts";


const App = () => {

  const data = [
    ["Element", "Density", { role: "style" }],
    ["Arqueiras", 8.94, "#ac9b84"],
    ["Atalaia", 10.49, "#ac9b84"],
    ["Cavaleiros", 19.3, "#ac9b84"],
    ["Guarita", 19.3, "#ac9b84"],
    ["Sentinela", 19.3, "#ac9b84"],
    ["Vedeta", 21.45, "#ac9b84"],
  ];

  return(
    <>
      <div>
      <Chart
        chartType="ColumnChart"
        data= {data}
        width="100%"
        height="400px"
        legendToggle
      />
      </div>
    </>
  );
};

export default App;