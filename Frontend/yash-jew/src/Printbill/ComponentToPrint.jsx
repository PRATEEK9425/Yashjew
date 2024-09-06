import React from 'react'
import Printingpdf from './Printingpdf';


export const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <Printingpdf/>
        </div>
    );
  });