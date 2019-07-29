import React, { useState, useEffect } from "react";

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [jsonValue, setValue] = useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:3001/api/one/test");
    res
      .json()
      .then(res => setValue(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(jsonValue)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default App;