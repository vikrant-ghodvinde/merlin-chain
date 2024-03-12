import React from "react";
import TimeCounter from "../TimeCounter/TimeCounter";
import Link from "next/link";
import Image from "next/image";

const UpcomingProjectCard = () => {
  return (
    <div className="relative w-full max-w-[422px] mx-auto bg-light dark:bg-dark shadow-md rounded-xl overflow-hidden transition-colors duration-300">
      <div className="relative p-4">
        <div className="relative w-full h-44 mb-14">
          <Image
            src="/images/10n8-banner.png"
            alt=""
            sizes="100%"
            fill
            className="w-full h-full object-cover rounded-xl"
          />
          <Image
            src="/images/10n8-banner.png"
            alt=""
            width={100}
            height={100}
            className="absolute left-0 -bottom-12 w-14 h-14 p-1.5 bg-light dark:bg-dark rounded-full transition-colors duration-300"
          />
        </div>
        <div className="relative">
          <h4 className="text-lg font-chakra-petch font-semibold">
            ELXR - Public Sale
          </h4>
          <div className="relative my-2">
            <div className="flex items-center justify-between gap-4 mb-1.5 text-sm">
              <p className="text-semi-dark">Fundraise Goal</p>
              <p>$141957.90</p>
            </div>
            <TimeCounter />
          </div>
          <div className="mt-8">
            <Link href="/project/id" className="button w-full bg-black overflow-hidden z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-primary-gradient before:-z-10 before:opacity-100 dark:before:opacity-0 hover:before:opacity-90 before:transition-all before:duration-300">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjectCard;
