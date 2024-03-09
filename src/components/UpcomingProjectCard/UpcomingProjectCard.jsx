import React from "react";
import TimeCounter from "../TimeCounter/TimeCounter";
import Link from "next/link";
import Image from "next/image";

const UpcomingProjectCard = () => {
  return (
    <div className="relative w-full max-w-[422px] mx-auto bg-dark rounded-xl overflow-hidden">
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
            className="absolute left-0 -bottom-12 w-14 h-14 p-1.5 bg-dark rounded-full"
          />
        </div>
        <div className="relative">
          <h4 className="text-lg font-bebas-neue font-semibold tracking-wide">
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
            <Link href="/project/id" className="button w-full bg-black">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjectCard;
