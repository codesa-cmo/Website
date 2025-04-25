"use client";

import {
  Card,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

export function Stats36() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Empower</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Transform Your Online Presence
          </h1>
          <p className="md:text-md">
            Unlock your business potential with our web solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-[0.5fr_1fr] lg:gap-x-8 lg:gap-y-8">
          <div className="flex flex-col justify-center gap-x-6 gap-y-6 md:flex-row md:gap-y-8 lg:flex-col lg:gap-x-8">
            <Card className="flex w-full flex-col p-8">
              <p className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                50%
              </p>
              <h3 className="text-md leading-[1.4] font-bold md:text-xl">
                Why Choose Us?
              </h3>
              <p className="mt-2">
                Expertise that drives results for your business.
              </p>
            </Card>
            <Card className="flex w-full flex-col p-8">
              <p className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                40%
              </p>
              <h3 className="text-md leading-[1.4] font-bold md:text-xl">
                Tailored Solutions for You
              </h3>
              <p className="mt-2">
                Custom strategies to meet your unique business needs.
              </p>
            </Card>
            <Card className="flex w-full flex-col p-8">
              <p className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                60%
              </p>
              <h3 className="text-md leading-[1.4] font-bold md:text-xl">
                Get Started Today!
              </h3>
              <p className="mt-2">Let’s build something amazing together.</p>
            </Card>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <Dialog>
              <DialogTrigger className="relative flex size-full w-full items-center justify-center overflow-hidden rounded-image">
                <img
                  src="https://assets-global.website-files.com/624380709031623bfe4aee60/6243807090316259584aee68_placeholder-video-thumbnail.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
                <span className="absolute inset-0 z-10 bg-black/50" />
                <FaCirclePlay className="absolute z-20 size-16 text-white" />
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
