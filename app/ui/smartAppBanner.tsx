"use client";
import { detectPlatform } from "@/app/lib/utils";
import Image from "next/image";
import React from "react";

const SmartAppBanner = () => {
  const detectedPlatform = detectPlatform();
  console.log("detected platform is", detectedPlatform);
  return (
    <div className="bg-red-400">
      {detectedPlatform === "ios" && (
        <div className="ios-banner">
          <a
            href="https://apps.apple.com/app/835599320"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="@public/tiktok.webp"
              alt="Download TIK TOK on the App Store"
              width={100}
              height={100}
            />
            get TIK TOK
          </a>
        </div>
      )}
      {detectedPlatform === "android" && (
        <div className="android-banner">
          <a
            href="https://play.google.com/store/apps/details?835599320"
            target="_blank"
            rel="noopener noreferrer"
          >
            test android
          </a>
        </div>
      )}

      {detectedPlatform === "unknown" && (
        <div className="default-banner">
          <p>Download our app from the App Store or Google Play.</p>
        </div>
      )}
    </div>
  );
};

export default SmartAppBanner;
