import React from "react";
import { ProgressBar } from "~/components";
import img1 from "~/images/course_1_image.png";

const CourseIndex = () => {
  return (
    <div>
      <img
        className="hidden lg:block h-40 w-auto"
        src={img1}
        alt="Course Image"
      />
      <ProgressBar />
    </div>
  );
};

export default CourseIndex;
