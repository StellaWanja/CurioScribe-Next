"use client";
import React from "react";
import { MotionConfig } from "framer-motion";

// Motion Config to allow for motion disabling if set by user
function RespectMotionPreferences({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default RespectMotionPreferences;
