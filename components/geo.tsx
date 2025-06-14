// File: components/GeoTracker.tsx
"use client";

import { useEffect } from "react";

export default function GeoTracker() {
  useEffect(() => {
    async function sendGeoData() {
      let ip = "Unknown";
      try {
        const res = await fetch("https://api64.ipify.org?format=json");
        const json = await res.json();
        ip = json.ip;
      } catch (e) {
        // fail silently
      }

      const send = (location: { lat: number | null; lng: number | null }) => {
        fetch("/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip, location }),
        });
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => send({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
          () => send({ lat: null, lng: null })
        );
      } else {
        send({ lat: null, lng: null });
      }
    }

    sendGeoData();
  }, []);

  return null;
}

/*
//this is for client viewing the geo location 
// "use client";

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
*/
