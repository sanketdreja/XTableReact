import React, { useState } from "react";

function DataTable({ initialData }) {
  // State for managing data
  const [data, setData] = useState(initialData);

  // Function to sort data by date (descending)
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (b.date === a.date) {
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date);
    });
    setData(sortedData);
  };

  // Function to sort data by views (descending)
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (b.views === a.views) {
        return new Date(b.date) - new Date(a.date);
      }
      return b.views - a.views;
    });
    setData(sortedData);
  };

  return (
    <div>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
