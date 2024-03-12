"use client";
import Container from "@/components/Container/Container";
import LandingWrapper from "@/components/LandingWrapper/LandingWrapper";
import TimeCounter from "@/components/TimeCounter/TimeCounter";
import Image from "next/image";
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
                <a>Home</a>
              </li>
              <li>
                <a>Launchpad</a>
              </li>
              <li>ELXR - Public Sale</li>
            </ul>
          </div>
          <div className="grid grid-cols-12 gap-5 max-lg:gap-x-0 max-lg:gap-y-5">
            <div className="relative col-span-12">
              <div className="flex gap-4">
                <div className="relative w-16 min-w-16 h-16 max-lg:w-12 max-lg:min-w-12 max-lg:h-12 rounded-full bg-light dark:bg-dark overflow-hidden transition-colors duration-300">
                  <Image
                    src="/images/10n8-banner.png"
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis nobis vitae provident ipsam, unde enim animi
                    consequuntur error et id porro aspernatur accusantium vero,
                    delectus minima. Ullam non laborum ex?
                  </p>
                </div>
              </div>
            </div>
            <div className="relative col-span-8 max-lg:col-span-12">
              <div className="relative w-full min-w-72 h-full p-5 bg-light dark:bg-dark rounded-3xl overflow-hidden transition-colors duration-300">
                <Image
                  src="/images/10n8-banner.png"
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
                    <div className="absolute h-full bg-primary-gradient transition-all duration-300" style={{width: `${progress}%`}}></div>
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
                      <p className="mb-3">
                        Their ultimate mission is to bring Bitcoin to every
                        household on the wings of the Little dragon—a conduit
                        and a medium that taps into every teenager&apos;s
                        computer and phone. They aim to raise every kid to
                        become a Bitcoiner through the little dragon lore.
                      </p>
                      <Image
                        src="/images/01.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-full mb-3"
                      />
                      <p className="mb-3">
                        Now, how do they exactly turn this vision into reality?
                        They are going to do this in three ways:
                      </p>
                      <ul className="mb-3 flex flex-col gap-y-2 list-disc ps-7">
                        <li>
                          Financial Literacy via DeFi built on dragon lore.
                        </li>
                        <li>
                          Entertainment via gaming through the dragon lore.
                        </li>
                        <li>
                          Immersive experience through the little dragon
                          Metaverse.
                        </li>
                      </ul>
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
                      <p className="mb-3">
                        Due to The Council Ecosystem’s spiral value mechanics,
                        the value to Builders of launching through Merlin Pad
                        will continue to increase. As the market cap of TSHX
                        increases, so does the incentive to launch through
                        Merlin Pad. This creates a continuously expanding market
                        advantage for Merlin Pad. In addition, we offer full
                        service incubation including strategy, marketing,
                        connectivity, legal, and funding, as well as a full
                        ecosystem of waiting users. We anticipate accumulating a
                        dominant share of the Ordinals launchpad market prior to
                        the upcoming bullrun. Our core ethic however is not
                        competitive, it is collaborative. Our mission is to
                        bring more attention, capital, and cross-web3-Builders
                        into Ordinals by providing professional tier tools and
                        infrastructure to the Ordinals space.
                      </p>
                      <Image
                        src="/images/Toshipad-Tokenomics.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-full max-w-[80%] max-sm:max-w-full mx-auto"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full p-5 bg-light dark:bg-dark rounded-3xl overflow-hidden transition-colors duration-300">
                    <h4 className="text-xl font-chakra-petch font-semibold text-semi-dark">
                      Tokenomics
                    </h4>
                    <div className="relative">
                      <h3 className="text-2xl font-bold my-5">Tokenomics</h3>
                      <ul className="mb-4 flex flex-col gap-y-2 list-disc ps-7 text-sm">
                        <li>
                          5 % - Community Treasury: Tokens reserved for use by
                          future community DAO. May also be used to invest in
                          the community.
                        </li>
                        <li>
                          5 % - Public Sale: Available tokens for public sale to
                          join the ecosystem.
                        </li>
                        <li>
                          5 % - Team Growth Fund: Tokens available for talent
                          acquisition and growth.
                        </li>
                        <li>
                          15 % - Liquidity Provisions: Liquidity to ensure
                          stability and viability of the ecosystem
                        </li>
                        <li>
                          20 % - Ecosystem Rewards: Given back to the ecosystem
                          as rewards.
                        </li>
                        <li>
                          50 % - Ecosystem Growth: Tokens held for ecosystem
                          growth including developer grants, partnerships, and
                          shared value flows.
                        </li>
                      </ul>
                      <Image
                        src="/images/Toshipad-Road-Map.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-full max-w-[80%] max-sm:max-w-full mx-auto"
                      />
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
