/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { restApiClient } from "~/utils";
import Badge from "./Badge";

// const courses = await restApiClient.getCourse(courseTier);
const products = [
  {
    id: 1,
    name: "Wealth Building 101",
    href: "#",
    imageSrc: "../../assets/images/course_1_image.png",
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
    imageSrc: "../../assets/images/course_2_image.png",
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
    imageSrc: "../../assets/images/course_3_image.png",
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
    imageSrc: "../../assets/images/course_4_image.png",
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
    imageSrc: "../../assets/images/course_5_image.png",
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
    imageSrc: "../../assets/images/course_6_image.jpg",
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
    imageSrc: "../../assets/images/course_7_image.jpg",
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
    imageSrc: "../../assets/images/course_8_image.jpg",
    imageAlt: "course_8 Introduction Video",
    estTime: "20 HR",
    tier: (
      <Badge color="red" size="big">
        Tier 3
      </Badge>
    ),
  },
  // More products...
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
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-right object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
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
