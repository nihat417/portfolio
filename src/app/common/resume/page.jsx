"use client";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../../assets/documents/nixatcv.pdf";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-4 mt-[100px] lg:mt-4">
      <a href={pdf} download="Nihat_Akremi_Resume.pdf" className="mt-8 px-6 py-2 bg-green-500 text-white rounded shadow hover:bg-green-700 transition duration-300 transform hover:scale-110">
        Download Resume
      </a>

      <div id="resume" className="mt-8 flex justify-center">
        <Document file={pdf}  >
          <Page pageNumber={1} scale={width > 786 ? 1.4 : 0.6} />
        </Document>
      </div>

      <a href={pdf} download="Nihat_Akremi_Resume.pdf" className="mt-8 px-6 py-2 bg-green-500 text-white rounded shadow hover:bg-green-700 transition duration-300 transform hover:scale-110">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
