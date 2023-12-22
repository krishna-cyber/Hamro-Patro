/** @format */

import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=' container mx-auto'>
        <Navbar />
      </div>
    </>
  );
}

export default App;
