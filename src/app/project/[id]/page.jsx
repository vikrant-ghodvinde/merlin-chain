"use client";
import Container from "@/components/Container/Container";
import LandingWrapper from "@/components/LandingWrapper/LandingWrapper";
import TimeCounter from "@/components/TimeCounter/TimeCounter";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Project = () => {
  const [progress, setProgress] = useState(10);
  const [tabType, setTabType] = useState("about");
  return (
    <LandingWrapper>
      <section className="relative py-14">
        <Container>
          <div className="text-sm breadcrumbs mb-5">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/projects">Launchpad</Link>
              </li>
              <li>ELXR - Public Sale</li>
            </ul>
          </div>
          <div className="grid grid-cols-12 gap-5 max-lg:gap-x-0 max-lg:gap-y-5">
            <div className="relative col-span-12">
              <div className="flex gap-4">
                <div className="relative w-16 min-w-16 h-16 max-lg:w-12 max-lg:min-w-12 max-lg:h-12 rounded-full bg-light dark:bg-dark overflow-hidden transition-colors duration-300">
                  <Image
                    src="/images/_6382985d-ba66-4567-9591-760c3b9826db.jpeg"
                    alt=""
                    width={100}
                    height={100}
                    className="w-full h-full object-fill"
                  />
                </div>
                <div className="relative">
                  <h2 className="text-3xl max-lg:text-2xl font-bold uppercase mb-1.5">
                    ELXR - Public Sale
                  </h2>
                  <p>
                    Join our visionary collective at the forefront of the Merlin
                    Chain. Comprised of seasoned founders, strategists,
                    managers, influencers, and networkers, our team boasts a
                    wealth of experience. Backed by renowned advisors and
                    partners within the web3 sphere, we invite you to embark on
                    this transformative journey with us.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative col-span-8 max-lg:col-span-12">
              <div className="relative w-full min-w-72 h-full p-5 bg-light dark:bg-dark rounded-3xl overflow-hidden transition-colors duration-300">
                <Image
                  src="/images/_6382985d-ba66-4567-9591-760c3b9826db.jpeg"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
            <div className="relative col-span-4 max-lg:col-span-12">
              <div className="relative w-full p-5 bg-light dark:bg-dark rounded-3xl overflow-hidden transition-colors duration-300">
                <div className="relative">
                  <h4 className="text-lg font-bold font-chakra-petch">
                    ELXR - PUBLIC SALE
                  </h4>
                  <p className="text-xs">ELXR - PUBLIC SALE</p>
                </div>
                <div className="relative my-5">
                  <TimeCounter />
                </div>
                <div className="relative my-3">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <p className="text-sm font-chakra-petch">Progress</p>
                    <p className="text-sm font-chakra-petch">0.00%</p>
                  </div>
                  <div className="relative w-full h-1 bg-white dark:bg-black overflow-hidden rounded-xl transition-colors duration-300">
                    <div
                      className="absolute h-full bg-primary-gradient transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                <ul className="flex flex-col gap-y-2 my-4">
                  <li className="flex items-center justify-between gap-2 text-sm">
                    <p className="text-semi-dark">IDO Price</p>
                    <p>900 sats</p>
                  </li>
                  <li className="flex items-center justify-between gap-2 text-sm">
                    <p className="text-semi-dark">Goal</p>
                    <p>157894200 sats</p>
                  </li>
                  <li className="flex items-center justify-between gap-2 text-sm">
                    <p className="text-semi-dark">Raised</p>
                    <p>0 sats</p>
                  </li>
                </ul>
                <button type="button" className="button button-primary w-full">
                  Connect Wallet
                </button>
              </div>
            </div>
            <div className="relative col-span-12">
              <div className="relative">
                <div
                  role="tablist"
                  className="tabs tabs-bordered max-w-[95%] mx-auto"
                >
                  <a
                    role="tab"
                    className={`tab ${tabType === "about" ? "tab-active" : ""}`}
                    onClick={() => setTabType("about")}
                  >
                    About
                  </a>
                  <a
                    role="tab"
                    className={`tab ${
                      tabType === "roadMap" ? "tab-active" : ""
                    }`}
                    onClick={() => setTabType("roadMap")}
                  >
                    Road Map
                  </a>
                  <a
                    role="tab"
                    className={`tab ${
                      tabType === "tokenomics" ? "tab-active" : ""
                    }`}
                    onClick={() => setTabType("tokenomics")}
                  >
                    Tokenomics
                  </a>
                </div>
                {tabType === "about" ? (
                  <div className="relative w-full p-5 bg-light dark:bg-dark rounded-3xl overflow-hidden transition-colors duration-300">
                    <h4 className="text-xl font-chakra-petch font-semibold text-semi-dark">
                      About Project
                    </h4>
                    <div className="relative">
                      <h3 className="text-2xl font-bold my-5">About:</h3>
                      <p className="mb-3 last:mb-0">
                        Founded by a team of seasoned veterans and visionary
                        enthusiasts, Elixir represents the culmination of our
                        shared passion for decentralized finance and blockchain
                        technology. Our journey began with the vision of
                        creating a platform that not only provides unparalleled
                        opportunities for project incubation but also fosters a
                        vibrant and engaged community of like-minded
                        individuals.
                      </p>
                      <Image
                        src="/images/_6382985d-ba66-4567-9591-760c3b9826db.jpeg"
                        alt=""
                        width={500}
                        height={500}
                        className="w-full max-h-80 object-cover mb-3 last:mb-0"
                      />
                    </div>
                  </div>
                ) : tabType === "roadMap" ? (
                  <div className="relative w-full p-5 bg-light dark:bg-dark rounded-3xl overflow-hidden transition-colors duration-300">
                    <h4 className="text-xl font-chakra-petch font-semibold text-semi-dark">
                      Roadmap: Future of the Project
                    </h4>
                    <div className="relative">
                      <h3 className="text-2xl font-bold my-5">
                        Roadmap: Future of the Project
                      </h3>
                      <ul className="mb-3 last:mb-0 flex flex-col gap-y-2 list-disc ps-7">
                        <li>
                          Decentralized Launchpad: Our primary goal is to
                          develop a decentralized launchpad on Merlin Chain,
                          empowering anyone to launch a token and access the
                          benefits of blockchain technology.
                        </li>
                        <li>
                          Staking Platform for $ELXR: We&apos;re committed to
                          building a robust staking platform for the $ELXR
                          token, allowing holders to stake their tokens and earn
                          rewards while contributing to the stability and
                          security of the network.
                        </li>
                        <li>
                          Revenue Sharing: As part of our commitment to
                          community empowerment, we aim to implement
                          revenue-sharing mechanisms, ensuring that our
                          community members have a stake in the success of the
                          platform and are rewarded for their contributions.
                        </li>
                      </ul>
                      <p className="mb-3 last:mb-0">
                        This roadmap outlines our vision for Elixir and
                        highlights our commitment to building a vibrant and
                        sustainable ecosystem on Merlin Chain. Stay tuned for
                        updates as we work towards these milestones!
                        #Elixir #Roadmap #BlockchainInnovation
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full p-5 bg-light dark:bg-dark rounded-3xl overflow-hidden transition-colors duration-300">
                    <h4 className="text-xl font-chakra-petch font-semibold text-semi-dark">
                      Tokenomics
                    </h4>
                    <div className="relative">
                      <h3 className="text-2xl font-bold my-5">
                        $ELXR TOKENOMICS
                      </h3>
                      <ul className="mb-3 last:mb-0 flex flex-col gap-y-2 list-disc ps-7 text-sm">
                        <li>Total Supply - 21,000,000</li>
                        <li>65% - Liquidity Pool (Locked & Burned)</li>
                        <li>10% - Development</li>
                        <li>5% - Airdrop</li>
                        <li>20% - Presale</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </LandingWrapper>
  );
};

export default Project;
