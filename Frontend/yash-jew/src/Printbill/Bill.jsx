import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';

const CustomerBill = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button className=" border-4 hover:border-teal-500 md:hover:text-2xl font-serif  md:hover:font-bold  text-xl text-white rounded-xl  h-16 w-[270px]  md:h-16 md:w-[280px] bg-gradient-to-r from-orange-400 via-rose-500 to-teal-700 ..." onClick={handlePrint}>
        GENERATE BILL 👨‍⚖️</button>
    </div>
  );
};

export {CustomerBill}