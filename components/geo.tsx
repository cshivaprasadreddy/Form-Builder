"use client";

import { useEffect } from "react";

export default function GeoTracker() {
  useEffect(() => {
    // 🌍 Geolocation (browser-based)
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          console.log("📍 Location:", latitude, longitude);
        },
        (err) => {
          console.warn("❌ Geolocation error:", err.message);
        }
      );
    } else {
      console.warn("Geolocation not supported.");
    }

    // 🌐 IP Address
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => console.log("🌐 IP Address:", data.ip))
      .catch((err) => console.error("IP fetch error:", err));
  }, []);

  return null;
}
