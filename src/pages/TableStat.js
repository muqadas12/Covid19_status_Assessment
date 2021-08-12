import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";
import "./Table.css"
function TableStat() {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  const [input, setInput] = useState("");
const [sortedArray, setSortedArray] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    sortedArrayHandler();
  }, [sortedArray]);


  const getData = async () => {
    await Axios.get("https://corona.lmao.ninja/v2/countries").then((res) => {
      setloading(false);
      setstate(
        res.data.map((row) => ({
          Country: row.country,
          Deaths: row.deaths,
          Cases: row.cases,
          Recovered: row.recovered,
          Critical: row.critical,
          Active: row.active,

          id: row.active,
        }))
      );
    });
  };

  const columns = [
    {
      title: "Country",
      dataIndex: "Country",
      width: 150,
    },
    {
      title: "Deaths",
      dataIndex: "Deaths",
      width: 150,
    },
    {
      title: "Cases",
      dataIndex: "Cases",
      width: 150,
    },
    {
      title: "Recovered",
      dataIndex: "Recovered",
      width: 150,
    },
    {
      title: "Critical",
      dataIndex: "Critical",
      width: 150,
    },
    {
      title: "Active",
      dataIndex: "Active",
      width: 150,
    },
  ];

  const searchHandler = (e) => {
    e.preventDefault();

    const filterC = state.filter(
      (c) => c.Country.toLowerCase() == input.toLowerCase()
    );
    setstate(filterC);
  };

  const sortHandler = (e) => {
    const sortBy = e.target.value;
    const sortedArray = [...state];

    function GetSortOrder(prop) {
      return function (a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      };
    }

    setSortedArray(sortedArray.sort(GetSortOrder(sortBy)));
  };

  const sortedArrayHandler = () => {
    setstate(sortedArray);
  };

  
  return (
    <div>
       <form onSubmit={searchHandler}>
        <label className="searchlabel">Search By:</label>
        <input
        
      type="text"
          placeholder="Search"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      
      
      <label className="dropdownlabel">Sort By:</label>
      <select className="selectdropdown" id="dropdown" onChange={sortHandler}>
        <option value="Country">Country</option>
        <option value="Deaths">Deaths</option>
        <option value="Cases">Cases</option>
        <option value="Recovered">Recovered</option>
        <option value="Critical">Critical</option>
        <option value="Active">Active</option>
      </select>


      </form>
     
      <br/>
      {loading ? (
        "Loading..."
      ) : (
        <Table
          columns={columns}
          dataSource={state}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      )}
    </div>
  );
}

export default TableStat;

