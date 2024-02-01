import { useState } from "react";
import "./App.css";
import DataDisplay from "./components/DataDisplay";

function App() {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [isrendered, setIsrenndered] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    setErrors(null);
    try {
      console.log("inside async func");
      // throw new Error("opps .. Something went wrong...")
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let finalRes = await res.json();
      setData(finalRes);
      setIsLoading(false);
      setIsrenndered(true);
    } catch (error) {
      console.log(error.message);
      setErrors(error.message);
      setIsLoading(false);
    }
  }

  console.log("rendering", Date.now());

  return (
    <>
      {data.length == 0 && <button onClick={fetchData}>Fetch the Data</button>}
      {isLoding && <h4>Loading...</h4>}

      {data.length === 0 && isrendered ? (
        <p>Data not Found</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "40px",
            margin: "20px",
          }}
        >
          <DataDisplay data={data} />
        </div>
      )}

      {errors && <p>{errors}</p>}
    </>
  );
}

export default App;
