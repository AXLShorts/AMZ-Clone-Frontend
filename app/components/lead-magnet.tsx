"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FileText, ListChecks, Clipboard } from "lucide-react";
import { urlFor } from "@/lib/sanity.client";
import { SanityImageAsset } from "@/lib/types";

interface LeadMagnetProps {
  data?: {
    auditImage: SanityImageAsset;
  };
}

const deliverables = [
  {
    icon: FileText,
    title: "Conversion Report",
    description: "Detailed analysis of your listing performance",
  },
  {
    icon: Clipboard,
    title: "1-Page Audit",
    description: "Audit walkthrough of findings",
  },
  {
    icon: ListChecks,
    title: "Quick Fix Plan",
    description: "Actionable steps to boost conversions",
  },
];

const LeadMagnet = ({ data }: LeadMagnetProps) => {
  const auditImageUrl = data?.auditImage ? urlFor(data.auditImage).url() : null;

  return (
    <section
      className="w-full bg-white py-16 lg:py-24"
      aria-labelledby="lead-magnet-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-4 lg:mb-8">
            <h2
              id="lead-magnet-heading"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black leading-tight font-display uppercase font-semibold"
            >
              Start with your{" "}
              <span className="relative inline-block pb-2!">
                Free Amazon Conversion Audit
              </span>
            </h2>
            <p className="text-base sm:text-lg text-brand-primary font-bold">
              (worth $499)
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Copy */}
            <div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4!">
                Get a 1-page audit showing exactly:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Where your listings are losing sales
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    What conversion levers to fix first
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    How to boost ranking organically
                  </span>
                </li>
              </ul>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                {auditImageUrl && (
                  <Image
                    src={auditImageUrl}
                    alt="Amazon Conversion Audit Report Preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 bg-brand-dark text-brand-accent px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Worth $499
                </div>
              </div>
            </div>
          </div>

          {/* Deliverables Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-bold text-xs text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6 w-full flex flex-col items-center gap-4">
            <Link
              href="/audit"
              className="inline-block w-full sm:w-auto py-4 px-8 bg-brand-primary text-white text-center rounded-full font-bold hover:bg-brand-accent transition-all duration-300 text-sm lg:text-base shadow-lg hover:shadow-xl hover:scale-105"
            >
              Reserve My Audit Slot →
            </Link>
            <p className="text-xs sm:text-sm text-gray-600 mt-4 italic">
              &ldquo;We only take 3 new audits per month — secure your spot
              before it resets.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
