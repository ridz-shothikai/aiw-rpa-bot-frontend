"use client";

import axios from "axios";

// Create an axios instance
const http = axios.create({
  baseURL: process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URI, // api base_url
  // timeout: 5000, // request timeout
});

// Request interceptors
http.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    if (typeof window === "undefined") return config;

    const auth_token = localStorage.getItem("auth_token");
    if (auth_token) {
      // bearer token
      config.headers["Authorization"] = `Bearer ${auth_token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// export
export { http };
