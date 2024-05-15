"use client"
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../../assets/documents/nixatcv.pdf"

const Resume = () => {
    const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div>
        <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
    </div>
  )
}

export default Resume;