"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";

export function Layout221_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <Dialog>
            <DialogTrigger className="relative order-2 flex w-full items-center justify-center overflow-hidden rounded-image lg:order-1">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
              <span className="absolute inset-0 z-10 bg-black/50" />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
            </DialogTrigger>
            <DialogContent>
              <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
            </DialogContent>
          </Dialog>
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 md:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Why Choose Us
                </h6>
                <p>
                  Expertise in digital marketing tailored to elevate your
                  brand's online presence.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Comprehensive Solutions
                </h6>
                <p>
                  From web development to SEO, we cover all your digital needs.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Proven Results
                </h6>
                <p>
                  Our strategies drive traffic and boost conversions for your
                  business.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Client-Centric Approach
                </h6>
                <p>
                  We prioritize your goals, ensuring customized solutions that
                  fit your vision.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Sign Up"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
