import React from "react";
import { ProgressBar } from "~/components";

const CourseIndex = () => {
  return (
    <div>
       <img
          className="hidden lg:block h-40 w-auto"
          src="/../../../public/images/course_1_image.png"
          alt="Course Image"
        />
      <ProgressBar />
    </div>
  );
};

export default CourseIndex;
