import { useState } from "react";
//use of useState
const App = () => {
  const [count, setCount] = useState(0);

  const addNumber = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="title">Counter</div>
      <div className="number">{count}</div>
      <div className="add">
        <button onClick={addNumber}>add</button>
      </div>

      {count > 4 ? <>goodjob</> : <>not good job </>}
      {count === 5 && <>very good job</>}
    </>
  );
};

export default App;
