import Container from "@/components/Container/Container";
import LandingWrapper from "@/components/LandingWrapper/LandingWrapper";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import UpcomingProjectCard from "@/components/UpcomingProjectCard/UpcomingProjectCard";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <LandingWrapper>
      <section className="relative py-14">
        <Container>
          <div className="relative w-full bg-dark p-20 max-md:p-5 rounded-3xl z-10">
            <Image
              src="/images/dots.png"
              alt=""
              width={300}
              height={300}
              className="absolute left-4 top-4 w-36 -z-10"
            />
            <Image
              src="/images/dots.png"
              alt=""
              width={300}
              height={300}
              className="absolute right-4 bottom-4 w-36 rotate-180 -z-10"
            />
            <div className="text-center">
              <h2 className="text-6xl max-md:text-4xl font-bold tracking-wide uppercase font-bebas-neue mb-6">
                Discover Toshipad
              </h2>
              <p className="mb-1.5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                voluptates placeat unde eum temporibus distinctio, consectetur
                dolorem totam molestiae tempore neque cumque sit earum
                repudiandae obcaecati ab aspernatur assumenda ducimus!
              </p>
              <p className="mb-1.5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                accusantium ex explicabo blanditiis facilis ea praesentium nihil
                repellendus, sapiente officiis!
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="relative py-14">
        <Container>
          <div className="relative text-center mb-12">
            <h2 className="text-5xl max-md:text-4xl font-bebas-neue">Upcoming Projects</h2>
          </div>
          <div className="grid grid-cols-12 items-center gap-x-8 max-md:gap-x-0 max-md:gap-y-8">
            <div className="relative col-span-4 max-md:col-span-12">
              <UpcomingProjectCard />
            </div>
            <div className="relative col-span-4 max-md:col-span-12">
              <UpcomingProjectCard />
            </div>
            <div className="relative col-span-4 max-md:col-span-12">
              <UpcomingProjectCard />
            </div>
          </div>
        </Container>
      </section>
      <NewsLetter />
    </LandingWrapper>
  );
};

export default page;
