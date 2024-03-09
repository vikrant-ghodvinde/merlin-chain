import React from "react";
import Container from "../Container/Container";

const NewsLetter = () => {
  return (
    <section className="relative py-14">
      <Container>
        <div className="relative p-16 max-md:p-5 rounded-3xl bg-purple-600">
          <div className="grid grid-cols-12 items-center">
            <div className="relative col-span-6 max-lg:col-span-12 max-lg:text-center p-3 max-lg:px-0 max-lg:py-3">
              <h5 className="text-2xl">
                Sign up to our newsletter and get the latest news and updates.
              </h5>
            </div>
            <div className="relative col-span-6 max-lg:col-span-12 p-3 max-lg:px-0 max-lg:py-3">
              <form className="grid grid-cols-12 items-center gap-4 max-lg:gap-x-0 max-lg:gap-y-4">
                <div className="relative col-span-8 max-lg:col-span-12">
                  <input
                    type="text"
                    className="w-full h-11 p-3 rounded-xl border border-white bg-transparent outline-none"
                  />
                </div>
                <div className="relative col-span-4 max-lg:col-span-12 max-lg:text-center">
                  <button type="submit" className="button button-dark">
                    Subscribe
                  </button>
                </div>
                <div className="relative col-span-12 max-lg:flex max-lg:justify-center">
                  <div className="form-control">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox custom-checkbox"
                      />
                      <span className="text-white text-sm">I agree to the Terms and Agreements.</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;
