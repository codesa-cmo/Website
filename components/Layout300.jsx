"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout300() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <p className="mb-3 text-center font-semibold md:mb-4">Innovate</p>
            <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Unlock Your Digital Potential with Us
            </h2>
            <p className="text-center md:text-md">
              At CodeSA, we offer a comprehensive suite of services designed to
              elevate your online presence. From web development to digital
              marketing, we have the expertise to help you succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center rounded-image"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Expert Web Development Services Tailored for You
              </h3>
              <p className="text-center">
                Transform your ideas into reality with our custom web
                development solutions that engage and convert.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center rounded-image"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Reliable IT Support When You Need It
              </h3>
              <p className="text-center">
                Our dedicated IT support team is here to ensure your systems run
                smoothly and efficiently.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center rounded-image"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Build Your Dream PC with Ease
              </h3>
              <p className="text-center">
                Use our interactive tool to create a custom PC that fits your
                needs and budget.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center rounded-image"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Drive Results with Digital Marketing Expertise
              </h3>
              <p className="text-center">
                Leverage our digital marketing services to enhance your brand
                visibility and reach your target audience.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Explore" variant="secondary">
              Explore
            </Button>
            <Button
              title="Get Started"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
