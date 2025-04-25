"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer6() {
  const formState = useForm();
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="rb-6 mb-6 lg:mb-0">
            <h1 className="font-semibold md:text-md">Subscribe to updates</h1>
            <p>Stay informed with the latest news and offers.</p>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="Your email here"
                value={formState.email}
                onChange={formState.handleSetEmail}
              />
              <Button title="Join" variant="secondary" size="sm">
                Join
              </Button>
            </form>
            <p className="text-xs">
              By subscribing, you accept our Privacy Policy.
            </p>
          </div>
        </div>
        <div className="py-12 md:py-18 lg:py-20">
          <div className="h-px w-full bg-black" />
        </div>
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Quick Links</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  About Us
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Contact Support
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Privacy Policy
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Terms of Service
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Resources</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Blog Posts
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Case Studies
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Testimonials
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Careers
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Support Center</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Help Desk
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  User Guides
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Contact Us
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Feedback
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Social Media</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Follow Us
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Instagram
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Facebook
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Twitter
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Newsletter</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Sign Up Here
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Get Updates Now
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Join Our Community
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Stay Connected
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Latest News
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Company Info</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Subscribe for Updates
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Get In Touch
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Join Our Team
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Explore More
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Stay Tuned
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col items-start pt-6 pb-4 text-sm sm:flex-row sm:items-center sm:justify-between md:pt-8 md:pb-0">
          <a href="#" className="mb-6 sm:mb-0">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </a>
          <p className="text-sm">© 2024 Relume. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
