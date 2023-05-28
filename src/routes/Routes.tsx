import React from "react";
import { Route, Routes } from "react-router-dom";
import { GenerateQR, ReadQRcode } from "src/pages";
type Props = {};

const Routed = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<GenerateQR />} />
      <Route path='/read' element={<ReadQRcode />} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  );
};

export default Routed;
