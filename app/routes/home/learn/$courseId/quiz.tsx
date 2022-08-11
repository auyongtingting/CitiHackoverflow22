import { Link, useParams } from "@remix-run/react";
import { QuizQuestion } from "~/components";

const question = [
  {
    q: "1. Which of the following is the BEST explanation of investment?",
    option: [
      "Spending money to make money",
      "Buying assets and commodities",
      "Buying stocks and bonds",
      "Hiring people",
    ],
  },
  {
    q: "2. Which of the following terms basically describes activity that is the opposite of investment?",
    option: ["Loss", "Liability", "Spending", "Consumption"],
  },
  {
    q: "3. Which of the following is NOT a style of government investment?",
    option: ["Infrastructure", "Research", "Subsidies", "Interest payments"],
  },
];

const CourseQuiz = () => {
  const { courseId } = useParams();

  return (
    <div className="flex ml-auto mr-auto flex-col px-4 py-8 max-w-lg">
      <p className="text-lg font-bold text-center py-8">
        Citibank Academy Certification Quiz
      </p>
      {question.map((item, id) => (
        <div key={id} className="justify-center items-center">
          <p>{item.q}</p>
          <QuizQuestion options={item.option} />
        </div>
      ))}
      <Link
        to={`/home/learn/${courseId}/finish`}
        className="btn-primary w-min whitespace-nowrap self-end"
      >
        Submit
      </Link>
    </div>
  );
};

export default CourseQuiz;
