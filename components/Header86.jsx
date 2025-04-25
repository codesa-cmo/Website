"use client";

import {
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

export function Header86() {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <Card className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Build Your Dream PC with CodeSA
            </h1>
            <p className="md:text-md">
              At CodeSA, we empower you to create a custom PC tailored to your
              needs. Experience seamless performance and cutting-edge technology
              with our expert guidance.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Start" variant="primary">
                Start
              </Button>
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Dialog>
              <DialogTrigger className="relative flex size-full items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                  alt="Relume placeholder image"
                  className="size-full rounded-r-card object-cover"
                />
                <span className="absolute inset-0 z-10 bg-black/50" />
                <FaCirclePlay className="absolute z-20 size-16 text-white" />
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </div>
        </Card>
      </div>
    </section>
  );
}
