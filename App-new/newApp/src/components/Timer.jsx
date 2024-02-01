import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    let intervalId;
    if (count > 0) {
       intervalId = setInterval(() => {
        setCount((prev) => prev - 1);
        console.log(count)
      }, 1000);
    }

    return function () {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <>
      <h2>{count}</h2>
    </>
  );
}

export default Timer;
