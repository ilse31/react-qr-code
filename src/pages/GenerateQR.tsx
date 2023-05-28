import React from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
type Props = {};

const GenerateQR = (props: Props) => {
  const [value, setValue] = React.useState("");
  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-gray-100'>
      <div className='h-screen items-center flex gap-5 flex-col w-1/2'>
        <Link to='/read'> Read QR Code </Link>
        <input
          className='bg-white text-black border border-gray-400 rounded py-2 px-4 mt-5 w-full focus:outline-none focus:border-blue-500'
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && <QRCode value={value} />}
      </div>
    </div>
  );
};

export default GenerateQR;
