

import React, { useState } from "react";

const excelData = [
  { Month: "onboarding call", cell1: "", cell2: "", cell3: "", cell4: "" },
  { Month: "onboarding console", cell1: "", cell2: "", cell3: "", cell4: "" },
  {
    Month: '"Google Console Access',
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
  },
  {
    Month: "Technical Audit",
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
  },
  {
    Month: "Website Access",
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
  },
  {
    Month: " Anchor Text and Semantic Access",
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
  },
  {
    Month: "  Competitor Analysis",
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
  },
  {
    Month: "   Anchor Text URL Mapping",
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
  },
  {
    Month: "   Google Data Studio Report + Local Repository Suite",
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
  },
  {
    Month: " Site Level Optimization",
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
  },
  {
    Month: "On-Page Optimization",
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
  },
  {
    Month: "Content Creation",
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
  },
  {
    Month: "Content Publishing",
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
  },
  {
    Month: "Authority Niche Placement",
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
  },
];

function Table() {
  const [editedData, setEditedData] = useState([...excelData]);

  const handleSave = async () => {
    try {
      const response = await fetch("any-api-end-point", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Data saved successfully:", responseData);
      } else {
        console.error(
          "Error saving data:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleInputChange = (index, column, value) => {
    const updatedData = [...editedData];
    updatedData[index][column] = value;

    setEditedData(updatedData);
    console.log(`Cell data for ${column} in row ${index}:`, value);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <button
        onClick={handleSave}
        className="bg-green-400 m-1 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Save
      </button>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
           

            {Object.keys(editedData[0]).map((column, columnIndex) => (
              <th key={columnIndex} scope="col" className="px-6 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {editedData.map((data, rowIndex) => (
            <tr
              key={rowIndex}
              className=" h-full bg-white border-b bg-black dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {Object.keys(data).map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  className="px-6  py-4 border-2  h-full relative"
                >
                  <input
                    className="  bg-gray-300  h-full w-full p-2 m-0 absolute inset-0 border-none outline-none"
                    value={data[column]}
                    onChange={(e) =>
                      handleInputChange(rowIndex, column, e.target.value)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
