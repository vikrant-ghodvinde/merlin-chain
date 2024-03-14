"use client";
import Container from "@/components/Container/Container";
import LandingWrapper from "@/components/LandingWrapper/LandingWrapper";
import React, { useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [about, setAbout] = useState({
    active: true,
    description: "",
    image: "",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tokenomics, setTokenomics] = useState({
    active: true,
    description: "",
    image: "",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [roadMap, setRoadMap] = useState({
    active: true,
    description: "",
    image: "",
  });
  return (
    <LandingWrapper>
      <Container>
        <div className="relative w-full p-5 bg-light dark:bg-dark rounded-3xl overflow-hidden transition-colors duration-300">
          <div className="grid grid-cols-12 gap-5">
            <div className="relative col-span-12">
              <div className="relative">
                <label className="block mb-2 text-sm">Project Title</label>
                <input
                  type="text"
                  className="w-full h-11 p-3 rounded-xl border border-white bg-transparent outline-none text-sm"
                />
              </div>
            </div>
            <div className="relative col-span-12">
              <div className="relative">
                <label className="block mb-2 text-sm">
                  Project Description
                </label>
                <textarea className="w-full h-36 p-3 rounded-xl border border-white bg-transparent outline-none text-sm"></textarea>
              </div>
            </div>
            <div className="relative col-span-12">
              <div className="relative">
                <label className="block mb-2 text-sm">Launch Date</label>
                <input
                  type="date"
                  className="w-full h-11 p-3 rounded-xl border border-white bg-transparent outline-none text-sm"
                />
              </div>
            </div>
            <div className="relative col-span-12">
              <div className="grid grid-cols-12 gap-10 mt-5">
                <div className="relative col-span-12">
                  {/* ABOUT */}
                  <div className="inline-block">
                    <label className="cursor-pointer flex items-center gap-3">
                      <span className="text-white text-xl">About Project</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={about.active}
                        onChange={() =>
                          setAbout({
                            ...about,
                            active: about.active === true ? false : true,
                          })
                        }
                      />
                    </label>
                  </div>
                  {about.active && (
                    <div className="grid grid-cols-12 gap-5 mt-5">
                      <div className="relative col-span-12">
                        <div className="relative">
                          <label className="block mb-2 text-sm">
                            About Description
                          </label>
                          <textarea className="w-full h-36 p-3 rounded-xl border border-white bg-transparent outline-none text-sm"></textarea>
                        </div>
                      </div>
                      <div className="relative col-span-12">
                        <div className="relative">
                          <label className="block mb-2 text-sm">
                            About Description
                          </label>
                          <input
                            type="file"
                            className="file-input file-input-bordered h-11 w-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative col-span-12">
                  {/* TOKENOMICS */}
                  <div className="inline-block">
                    <label className="cursor-pointer flex items-center gap-3">
                      <span className="text-white text-xl">Tokenomics</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={tokenomics.active}
                        onChange={() =>
                          setTokenomics({
                            ...tokenomics,
                            active: tokenomics.active === true ? false : true,
                          })
                        }
                      />
                    </label>
                  </div>
                  {tokenomics.active && (
                    <div className="grid grid-cols-12 gap-5 mt-5">
                      <div className="relative col-span-12">
                        <div className="relative">
                          <label className="block mb-2 text-sm">
                            Tokenomics Description
                          </label>
                          <textarea className="w-full h-36 p-3 rounded-xl border border-white bg-transparent outline-none text-sm"></textarea>
                        </div>
                      </div>
                      <div className="relative col-span-12">
                        <div className="relative">
                          <label className="block mb-2 text-sm">
                            Tokenomics Description
                          </label>
                          <input
                            type="file"
                            className="file-input file-input-bordered h-11 w-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative col-span-12">
                  {/* ROADMAP */}
                  <div className="inline-block">
                    <label className="cursor-pointer flex items-center gap-3">
                      <span className="text-white text-xl">Roadmap</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={roadMap.active}
                        onChange={() =>
                          setRoadMap({
                            ...roadMap,
                            active: roadMap.active === true ? false : true,
                          })
                        }
                      />
                    </label>
                  </div>
                  {roadMap.active && (
                    <div className="grid grid-cols-12 gap-5 mt-5">
                      <div className="relative col-span-12">
                        <div className="relative">
                          <label className="block mb-2 text-sm">
                            Roadmap Description
                          </label>
                          <textarea className="w-full h-36 p-3 rounded-xl border border-white bg-transparent outline-none text-sm"></textarea>
                        </div>
                      </div>
                      <div className="relative col-span-12">
                        <div className="relative">
                          <label className="block mb-2 text-sm">
                            Roadmap Description
                          </label>
                          <input
                            type="file"
                            className="file-input file-input-bordered h-11 w-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="relative col-span-12">
              <div className="relative text-center">
                <button type="button" className="button button-primary">
                  Add Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </LandingWrapper>
  );
};

export default page;
