import React from 'react';
import NavR from './navResume';
import '../style/resume.css'
import PDF from './pdfResume';
// import { PDFViewer } from '@react-pdf/renderer';
import { Document , Page } from 'react-pdf';
import MyResume from './test.pdf'
// import PDFViewer from './components/PDFViewer/PDFViewer';







function Resume() {
  return (
    <div className='resume'>
      <NavR />  
      <PDF />


    </div>
  );
}

export default Resume;


