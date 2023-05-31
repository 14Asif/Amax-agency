import React from 'react';

const PDFLink = () => {
  const openPDF = () => {
    window.open('/assets/portfolio.pdf', '_blank');
  };

  return (
    <button onClick={openPDF}>
      Our Works
    </button>
  );
};

export default PDFLink;
