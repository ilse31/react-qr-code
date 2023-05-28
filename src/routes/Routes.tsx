import React from "react";
import { Route, Routes } from "react-router-dom";
import GenerateQR from "src/pages/GenerateQR";
type Props = {};

const Routed = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<GenerateQR />} />
    </Routes>
  );
};

export default Routed;
