import React, { useState, useEffect } from "react";
import axios from "axios";

import Chart from "react-apexcharts";
const Visualization = () => {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const Country = [];
    const Deaths = [];

    axios
      .get("https://corona.lmao.ninja/v2/countries")
      .then((response) => {
        console.log("response", response);
        response.data.map((item) => {
          console.log("item", item);
          Country.push(item.country);
          Deaths.push(item.deaths);
        });
        setCategory(Deaths);
        setData(Country);

        console.log("Country", Deaths, Country);
      })
      .catch((e) => {
        // alert(e);
      });
  }, []);

  return (
    <Chart
      options={{
        chart: {
          id: "apexchart-example"
        },
        xaxis: {
          categories: data
        }
      }}
      series={[
        {
          name: "deaths",
          data: category
        }
      ]}
      type="line"
      width={800}
      height={500}
    />
  );
};

export default Visualization ;
