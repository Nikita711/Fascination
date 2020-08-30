import React, { Component } from "react";
import "./Resume.css";
// import { Document, Page } from "react-pdf";

// import samplePDF from "./Resume.pdf";

// function Resume() {
//   const [numPages, setNumPages] = useState(null);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
//       {Array.from(new Array(numPages), (el, index) => (
//         <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//       ))}
//     </Document>
//   );
// }

class Resume extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>Have a look at my Dummy resume </h2>
        <p className="dummy">
          <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
            Click here
          </a>
        </p>
      </>
    );
  }
}

export default Resume;
