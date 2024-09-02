"use client";

import axios from "axios";

// Create an axios instance
const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI, // api base_url
  // timeout: 5000, // request timeout
});

// Request interceptors
http.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    if (typeof window === "undefined") return config;

    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      // bearer token
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// export
export { http };
