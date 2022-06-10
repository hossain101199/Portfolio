import React from "react";
import resume from "../IMG/HOSSAIN_s_resume.pdf";

const Resume = () => {
  return (
    <div>
      <iframe src={resume} frameborder="1" title="Resume.pdf">
        {resume}
      </iframe>
    </div>
  );
};

export default Resume;
