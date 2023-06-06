import React from 'react';

const PDFLink = () => {
  const openPDF = () => {
    window.open('/assets/portfolio.pdf', '_blank');
  };

  return (
    <button onClick={openPDF}>
      See More
    </button>
  );
};

export default PDFLink;
