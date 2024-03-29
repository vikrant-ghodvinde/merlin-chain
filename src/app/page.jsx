import React from "react";
import Container from "@/components/Container/Container";
import LandingWrapper from "@/components/LandingWrapper/LandingWrapper";
import Link from "next/link";
import { CardWallet, Telegram, X } from "iconoir-react";
import Image from "next/image";
import UpcomingProjectCard from "@/components/UpcomingProjectCard/UpcomingProjectCard";

const Home = () => {
  return (
    <LandingWrapper>
      <section className="banner">
        <Container>
          <div className="relative w-full py-14 flex flex-col items-center justify-center gap-y-7 text-center min-h-[calc(100vh-95px)]">
            <h1 className="text-7xl max-md:text-5xl font-bold uppercase font-chakra-petch">
              Incubating Future Merlin Projects
            </h1>
            <p>Elixir - A community driven open platform for Merlin chain</p>
            <Link
              href="https://forms.gle/FQbkAHY7GEXNDRWA8"
              target="_blank"
              rel="noreferrer"
              className="button bg-primary-gradient z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:rounded-3xl before:bg-black before:opacity-0 hover:before:opacity-30 before:transition-all before:duration-300 before:-z-10"
            >
              Launch Your Project
            </Link>
            <div className="flex items-center flex-wrap gap-3">
              <Link
                href="https://twitter.com/MerlinElixir"
                target="_blank"
                rel="noReferrer"
                className="relative w-12 h-12 rounded-full text-xs inline-flex items-center justify-center bg-light dark:bg-dark overflow-hidden z-10 text-black dark:text-white hover:text-white transition-all duration-300 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-primary-gradient before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300"
              >
                <X />
              </Link>
              <Link
                href="https://t.me/merlin_elixir"
                target="_blank"
                rel="noReferrer"
                className="relative w-12 h-12 rounded-full text-xs inline-flex items-center justify-center bg-light dark:bg-dark overflow-hidden z-10 text-black dark:text-white hover:text-white transition-all duration-300 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-primary-gradient before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300"
              >
                <Telegram />
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="relative py-14">
        <Container>
          <div className="grid grid-cols-12 items-center gap-x-10 max-lg:gap-x-0 max-xl:gap-y-10">
            <div className="relative col-span-6 max-lg:col-span-12">
              <Image
                src="/images/logo.png"
                alt=""
                width={200}
                height={200}
                priority
                className="w-24 mb-8"
              />
              <div className="relative flex flex-col gap-3">
                <p className="font-chakra-petch">Powered by</p>
                <h2 className="text-5xl max-md:text-4xl font-bold">
                  Elixir & The Grand Wizards
                </h2>
                <p className="text-lg">
                  Join our visionary collective at the forefront of the Merlin
                  Chain. Comprised of seasoned founders, strategists, managers,
                  influencers, and networkers, our team boasts a wealth of
                  experience. Backed by renowned advisors and partners within
                  the web3 sphere, we invite you to embark on this
                  transformative journey with us.
                </p>
              </div>
              {/* <div className="relative mt-8">
                <Link
                  href="/"
                  target="_blank"
                  rel="noReferrer"
                  className="button button-primary"
                >
                  Meet The Council
                </Link>
              </div> */}
            </div>
            <div className="relative col-span-6 max-lg:col-span-12">
              <Image
                src="/images/image-1.jpg"
                alt=""
                width={500}
                height={500}
                className="w-full mb-8"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="relative py-14">
        <Container>
          <div className="relative text-center mb-12">
            <h2 className="text-5xl max-md:text-4xl font-chakra-petch">
              Upcoming Projects
            </h2>
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
      <section className="relative py-14">
        <Container>
          <div className="relative text-center mb-12">
            <h2 className="text-5xl max-md:text-4xl font-chakra-petch">
              How it Works
            </h2>
          </div>
          <div className="grid grid-cols-12">
            <div className="relative col-span-6 max-lg:col-span-12 p-3 max-lg:px-0 max-lg:py-3">
              <div className="relative w-full h-full p-5 bg-light dark:bg-heavy-dark rounded-xl transition-colors duration-300">
                <h4 className="text-2xl font-semibold mb-6">Builders</h4>
                <ul className="list-disc ps-4 flex flex-col gap-5">
                  <li className="">
                    Apply for initial funding assistance for your innovative
                    startup project.
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative col-span-6 max-lg:col-span-12 p-3 max-lg:px-0 max-lg:py-3">
              <div className="relative w-full h-full p-5 bg-light dark:bg-heavy-dark rounded-xl transition-colors duration-300">
                <h4 className="text-2xl font-semibold mb-6">Users</h4>
                <ul className="list-disc ps-4 flex flex-col gap-5">
                  <li className="">
                    By holding $ELXR Tokens, you gain eligibility for whitelist
                    access and participation in presale project minting.
                  </li>
                  <li className="">
                    Take part and enjoy the benefits of workflow assignments and
                    early-stage project development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="relative py-14">
        <Container>
          <div className="grid grid-cols-12 items-center gap-x-10 max-lg:gap-x-0 max-xl:gap-y-10">
            <div className="relative col-span-6 max-lg:col-span-12">
              <Image
                src="/images/wizard-image.png"
                alt=""
                width={500}
                height={500}
                className="w-full mb-8"
              />
            </div>
            <div className="relative col-span-6 max-lg:col-span-12">
              <div className="relative flex flex-col gap-3">
                <h2 className="text-5xl max-md:text-4xl font-bold">
                  What is Elixir?
                </h2>
                <p className="text-lg">
                  Elixir serves as a community-powered open platform on the
                  Merlin Chain, aiming to establish itself as the primary
                  incubator. Our mission is to offer a collaborative space for
                  individuals to create, contribute, and shape the future of
                  projects within the Merlin ecosystem.
                </p>
              </div>
              {/* <div className="relative mt-8">
                <Link
                  href="/"
                  target="_blank"
                  rel="noReferrer"
                  className="button button-primary"
                >
                  See More
                </Link>
              </div> */}
            </div>
          </div>
        </Container>
      </section>
      <section className="relative py-14">
        <Container>
          <div className="relative text-center mb-12">
            <h2 className="text-5xl md:text-4xl font-chakra-petch">
              Join Our Community
            </h2>
            <p className="pt-5">
              Be part of our journey. Follow us, stay informed, and contribute
              to the blockchain revolution. Let&apos;s shape the future
              together.
            </p>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-3">
            <Link
              href="https://twitter.com/MerlinElixir"
              target="_blank"
              rel="noReferrer"
              className="relative inline-flex items-center justify-center gap-1 py-3 px-6 text-xs rounded-3xl bg-light dark:bg-dark overflow-hidden z-10 hover:text-white transition-all duration-300 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-primary-gradient before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300"
            >
              <X /> <span className="text-sm">Twitter</span>
            </Link>
            <Link
              href="https://t.me/merlin_elixir"
              target="_blank"
              rel="noReferrer"
              className="relative inline-flex items-center justify-center gap-1 py-3 px-6 text-xs rounded-3xl bg-light dark:bg-dark overflow-hidden z-10 hover:text-white transition-all duration-300 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-primary-gradient before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300"
            >
              <Telegram /> <span className="text-sm">Telegram</span>
            </Link>
            <Link
              href="https://dexscreener.com/merlinchain/0x6ad427c4df1055772ac0c3d58523776855478b31"
              target="_blank"
              rel="noReferrer"
              className="relative inline-flex items-center justify-center gap-1 py-3 px-6 text-xs rounded-3xl bg-light dark:bg-dark overflow-hidden z-10 hover:text-white transition-all duration-300 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-primary-gradient before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300"
            >
              <CardWallet /> <span className="text-sm">Buy</span>
            </Link>
          </div>
        </Container>
      </section>
    </LandingWrapper>
  );
};

export default Home;
