---
import React from 'react'
// Your task is to explain why the console.log shows the older value of count
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // You will see the older value of count in console
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App


** IN the above example the console.log() shows the older value because the setCount(setter function) is async in nature it will schedule the task for doing it later until all the other non async tasks are completed and console.log() is a synchronous in nature it prints the older value of the count; **
---









---
import React from 'react'

// Your task is to explain why count value is not updated to 3 as expected
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
		console.log(count);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App


** In this code snippets count is not getting updated to 3 as expected duo to React's batching React batches multiple state updates together for performance optimization and because count is same for all three calling of setCount it is getting updated by only 1 not by 3 **
---