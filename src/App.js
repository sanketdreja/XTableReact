import logo from "./logo.svg";
import "./App.css";
import DataTable from "./DataTable";

function App() {
  // Initial data array
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  return (
    <div>
      <h1>Date and Views Table</h1>
      {/* Pass initial data to the DataTable component */}
      <DataTable initialData={initialData} />
    </div>
  );
}

export default App;
