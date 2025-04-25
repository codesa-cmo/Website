"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Product2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Featured</p>
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              Products
            </h1>
            <p className="md:text-md">
              Explore our top-rated tech components and accessories.
            </p>
          </div>
          <div className="hidden md:flex">
            <Button variant="secondary" size="primary" title="View all">
              View all
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-start gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Gaming Mouse</h3>
                <div className="text-sm">Wireless</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$55</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Mechanical Keyboard</h3>
                <div className="text-sm">RGB</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$75</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Graphics Card</h3>
                <div className="text-sm">NVIDIA</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$299</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">CPU Cooler</h3>
                <div className="text-sm">Silent</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$45</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">SSD Drive</h3>
                <div className="text-sm">Fast</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$120</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Power Supply</h3>
                <div className="text-sm">Reliable</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$80</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Monitor Stand</h3>
                <div className="text-sm">Adjustable</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$30</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Webcam HD</h3>
                <div className="text-sm">1080p</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$60</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Add to cart"
              className="mt-3 w-full md:mt-4"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
