import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const GenerateQR = lazy(() => import("../pages/GenerateQR"));
const ReadQRcode = lazy(() => import("../pages/ReadQRcode"));
const NotfoundPages = lazy(() => import("../pages/NotfoundPages"));

type Props = {};

const Routed = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<GenerateQR />} />
      <Route path='/read' element={<ReadQRcode />} />
      <Route path='*' element={<NotfoundPages />} />
    </Routes>
  );
};

export default Routed;
