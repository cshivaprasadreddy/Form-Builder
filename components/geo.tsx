"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function GeoTracker() {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (!isSignedIn) return;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("📍 User GPS Location:", latitude, longitude);
        },
        (error) => {
          console.error("❌ Geolocation error:", error.message);
        }
      );
    } else {
      console.warn("🌐 Geolocation not supported in this browser.");
    }
  }, [isSignedIn]);

  return null;
}
