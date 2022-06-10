import React from "react";
import resume from "../IMG/HOSSAIN's resume.pdf";

const Resume = () => {
  return (
    <div>
      <p>
        Open a PDF file <a href={resume}>example</a>.
        {/* <iframe src={`${resume}#view=fitH`} title="testPdf" height="100%" width="100%" /> */}
      </p>
    </div>
  );
};

export default Resume;
