import React from "react";
import { ProgressBar } from "~/components";
import img1 from "~/images/course_1_image.png";
import { Link } from "react-router-dom";

const CourseIndex = () => {
  return (
    <div className="flex justify-center p-10">
      <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white-800 dark:border-gray-300">
          <img className="rounded-t-lg mx-auto pt-2" src={img1} alt="" />
          <div className="p-5">
              <p className="mb-3 font-normal text-black-700 dark:text-gray-400">Take control of your personal financial education. Improve your financial literacy by learning key financial topics such as corporate finance, risk management, M&A, pricing models, and money markets on edX today. You will also learn more about deal structures, economic policy, financial-decision making, and more with online classes in finance from top institutions worldwide.</p>
          </div>
      </div>
      <div className="pl-10 pt-10">
        <ProgressBar />
        <div className="pt-10 space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
        <Link
          to="/home/learn/123/quiz"
          className="btn-primary w-min whitespace-nowrap self-end">
          Take Quiz
        </Link>
      </div>
      </div>
    </div>
  );
};

export default CourseIndex;
