import React from "react";
type Props = {};
import "./App.css";

const App = (props: Props) => {
  return (
    <div className='bg-blue-700 h-screen'>
      <p className="text-white">@tailwind base; @tailwind components; @tailwind utilities;</p>
    </div>
  );
};

export default App;
