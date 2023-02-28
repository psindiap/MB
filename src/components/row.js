import React, { useState } from 'react';

function Row({ ind, def, t, l, w, img }) {
  const [selected, setSelected] = useState(false);

  img = require('../Srcs' + img.substring(1));

  const handleClick = () => {
    setSelected(!selected);
  };

  const borderStyle = selected ? 'border-blue-500' : 'border-gray-400';
  const cursorStyle = selected ? 'cursor-default' : 'cursor-pointer';

  return (
    <div
      className={`mt-1 shadow-xl rounded-xl flex flex-row-reverse border-solid border-4 p-4 mx-4 w-9/12 md:w-initial md:w-11/12  hover:cursor-pointer ${borderStyle} ${cursorStyle}`}
    //   hover:border-blue-500
      onClick={handleClick}
    >
      <img className="w-7/12 object-fill" src={img} alt={`${ind + 1}.jpg`} />
      <div className="flex flex-col w-5/12 p-4 items-center justify-center">
        <h2 className="font-semibold text-lg">Design {ind + 1}</h2>
        <h2 className="font text-sm">Deflection: {def} mm </h2>
        <h2 className="font text-sm">Thickness: {t} mm</h2>
        <h2 className="font text-sm">Length: {l} mm </h2>
        <h2 className="font text-sm">Width: {w} mm</h2>
      </div>
    </div>
  );
}

export default Row;
