import { Link, Outlet } from "@remix-run/react";
import clsx from "clsx";
import img1 from "~/images/course_1_image.png";
import img2 from "~/images/course_2_image.png";
import img3 from "~/images/course_3_image.png";
import img4 from "~/images/course_4_image.png";
import img5 from "~/images/course_5_image.png";
import img6 from "~/images/course_6_image.jpg";
import img7 from "~/images/course_7_image.jpg";
import img8 from "~/images/course_8_image.jpg";

import Badge from "./Badge";

// const courses = await restApiClient.getCourse(courseTier);
const products = [
  {
    id: 1,
    name: "Wealth Building 101",
    href: "/home/learn/1", // change file
    imageSrc: img1,
    imageAlt: "course_1 Introduction Video",
    estTime: "4 HR",
    tier: (
      <Badge color="green" size="big">
        Tier 1
      </Badge>
    ),
  },
  {
    id: 2,
    name: "Introduction: Citi Wealth Management",
    href: "#",
    imageSrc: img2,
    imageAlt: "course_2 Introduction Video",
    estTime: "2 HR",
    tier: (
      <Badge color="green" size="big">
        Tier 1
      </Badge>
    ),
  },
  {
    id: 3,
    name: "Introduction: Market Risk",
    href: "#",
    imageSrc: img3,
    imageAlt: "course_3 Introduction Video",
    estTime: "8 HR",
    tier: (
      <Badge color="green" size="big">
        Tier 1
      </Badge>
    ),
  },
  {
    id: 4,
    name: "Basics of Developing a Portfolio",
    href: "#",
    imageSrc: img4,
    imageAlt: "course_4 Introduction Video",
    estTime: "8 HR",
    tier: (
      <Badge color="green" size="big">
        Tier 1
      </Badge>
    ),
  },
  {
    id: 5,
    name: "Currency Trading Market",
    href: "#",
    imageSrc: img5,
    imageAlt: "course_5 Introduction Video",
    estTime: "12 HR",
    tier: (
      <Badge color="yellow" size="big">
        Tier 2
      </Badge>
    ),
  },
  {
    id: 6,
    name: "Unit Trusts 101",
    href: "#",
    imageSrc: img6,
    imageAlt: "course_6 Introduction Video",
    estTime: "15 HR",
    tier: (
      <Badge color="yellow" size="big">
        Tier 2
      </Badge>
    ),
  },
  {
    id: 7,
    name: "Stock Market: Basics of ETFs",
    href: "#",
    imageSrc: img7,
    imageAlt: "course_7 Introduction Video",
    estTime: "20 HR",
    tier: (
      <Badge color="red" size="big">
        Tier 3
      </Badge>
    ),
  },
  {
    id: 8,
    name: "Stock Market: Diversification",
    href: "#",
    imageSrc: img8,
    imageAlt: "course_8 Introduction Video",
    estTime: "20 HR",
    tier: (
      <Badge color="red" size="big">
        Tier 3
      </Badge>
    ),
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Hello Kim, Lets Resume Learning!
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div
                className={clsx(
                  "w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none",
                  [5, 6, 7, 8].includes(product.id) && "blur-sm"
                )}
              >
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-right object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <div>{product.tier}</div>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.estTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
