"use client";

import { motion } from "framer-motion";

const VALID_TAGS = [
  "div", "section", "article", "aside", "header", "footer",
  "main", "nav", "span", "p", "ul", "li",
];

export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
  style = {},
  ...rest
}) {
  const tag = VALID_TAGS.includes(as) ? as : "div";
  const MotionTag = motion[tag];

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px" }}
      transition={{
        duration: 0.9,
        delay: delay / 1000,
        ease: [0.2, 0.7, 0.2, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
