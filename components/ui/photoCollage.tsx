"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/animations/variants";
import image1 from "@/public/images/profile/profile1.jpeg";
import image2 from "@/public/images/profile/profile2.jpg";
import image3 from "@/public/images/profile/profile3.jpeg";

interface Props {
  inView?: object;
}

const defaultInView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, amount: 0.2 },
};

export default function PhotoCollage({ inView = defaultInView }: Props) {
  return (
    <motion.div
      variants={staggerContainer(0.2, 0.2)}
      {...inView}
      // Fixed height canvas — images positioned absolutely inside
      className="relative flex-shrink-0 w-[320px] h-[420px] md:w-[380px] md:h-[500px]"
    >
      {/* ── Large portrait — left side, slight counter-clockwise tilt ── */}
      <motion.div
        variants={staggerChild}
        whileHover={{ scale: 1.03, rotate: 0, zIndex: 30 }}
        style={{ rotate: -3 }}
        className="absolute left-0 top-8 w-[55%] h-[75%] overflow-hidden rounded-2xl shadow-2xl z-10 cursor-pointer"
      >
        <Image
          src={image1}
          alt="Profile 1"
          fill
          sizes="180px"
          className="object-cover brightness-75 grayscale transition-all duration-700 hover:brightness-100 hover:grayscale-0"
        />
      </motion.div>

      {/* ── Top-right — slight clockwise tilt ── */}
      <motion.div
        variants={staggerChild}
        whileHover={{ scale: 1.03, rotate: 0, zIndex: 30 }}
        style={{ rotate: 4 }}
        className="absolute right-0 top-0 w-[47%] h-[42%] overflow-hidden rounded-2xl shadow-2xl z-20 cursor-pointer"
      >
        <Image
          src={image2}
          alt="Profile 2"
          fill
          sizes="160px"
          className="object-cover brightness-75 grayscale transition-all duration-700 hover:brightness-100 hover:grayscale-0"
        />
      </motion.div>

      {/* ── Bottom-right — slight counter-clockwise tilt ── */}
      <motion.div
        variants={staggerChild}
        whileHover={{ scale: 1.03, rotate: 0, zIndex: 30 }}
        style={{ rotate: -2 }}
        className="absolute right-0 bottom-0 w-[47%] h-[54%] overflow-hidden rounded-2xl shadow-2xl z-20 cursor-pointer"
      >
        <Image
          src={image3}
          alt="Profile 3"
          fill
          sizes="160px"
          className="object-cover brightness-75 grayscale transition-all duration-700 hover:brightness-100 hover:grayscale-0"
        />
      </motion.div>
    </motion.div>
  );
}