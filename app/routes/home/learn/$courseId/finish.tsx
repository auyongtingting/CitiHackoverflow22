import { Link } from "@remix-run/react";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import qrcode from "~/images/qrcode.png";

const finish = () => {
  return (
    <div className="bg-white flex flex-col items-center h-screen">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Congratulations</span>
          <span className="block">You have completed the course.</span>
        </h2>

        <CheckCircleIcon
          width={64}
          height={64}
          className="ml-auto mr-auto my-8"
          color="green"
        />
        <div className="max-w-[80%] ml-auto mr-auto flex flex-col items-center gap-y-5">
          <p className="text-lg font-medium">
            You scored above 80% and have earned yourself a certification in the
            following category: Wealth building
          </p>
          <p className="text-lg">
            Scan the QR code to retrieve your verifiable credentials of your
            course certification.
          </p>
          <img className="" src={qrcode} alt="QRCode" />
          <p className="link text-lg">
            Learn more about Verifiable Credentials
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Link to="/home" className="btn-primary">
              Back to home
            </Link>
          </div>
          <div className="ml-3 inline-flex">
            <Link to="/home" className="btn-primary">
              Claim your rewards(s)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default finish;
