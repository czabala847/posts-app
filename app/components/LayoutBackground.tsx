"use client";
import React, { useState, useEffect } from "react";
import { GradientBlurPoint } from "./GradientBlurPoint";
import { COLORS } from "../themes/vars";

export const LayoutBackground = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed border top-0 left-0 right-0 z[1]" style={{ height }}>
      <GradientBlurPoint
        background={COLORS.lightBlue}
        size={200}
        left={-100}
        top={60}
        blur={80}
      />
      <GradientBlurPoint
        background={COLORS.lightYellow}
        size={400}
        right={-150}
        top={height / 2}
        blur={120}
      />
    </div>
  );
};
