import React from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
type Props = {};

const GenerateQR = (props: Props) => {
  const [value, setValue] = React.useState("");

  const onImageDownload = () => {
    const svg = document.getElementById("qrcode");
    const svgData = new XMLSerializer().serializeToString(
      svg as unknown as Node
    );
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-gray-100'>
      <div className='h-screen items-center flex gap-5 flex-col w-1/2'>
        <Link to='/read'> Read QR Code </Link>
        <input
          className='bg-white text-black border border-gray-400 rounded py-2 px-4 mt-5 w-full focus:outline-none focus:border-blue-500'
          type='text'
          placeholder='Enter text to generate QR Code'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && (
          <div className='flex flex-col items-center'>
            <QRCode id='qrcode' value={value} size={200} />
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'
              onClick={() => onImageDownload()}
            >
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateQR;
