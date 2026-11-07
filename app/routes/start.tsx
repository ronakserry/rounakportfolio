import { motion } from "motion/react";

import cloudBig from "../assests/cloudBig.png";
import cloudSmall from "../assests/cloudsSmall.png";
import cloudsBig from "../assests/cloudsBig.png";
import button from "../assests/button.png";

import "../styles/start.css";
import { useNavigate } from "react-router";

export default function Start() {
  const navigate = useNavigate()
  return (
    <section className="start">
      <motion.img
        src={cloudsBig}
        alt="clouds-big"
        className="clouds-big"
        animate={{ x: [0, 8, 16, 24, 32] }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <motion.img
        src={cloudBig}
        alt="cloud-big"
        className="cloud-big"
        animate={{ x: [0, 8, 16, 24, 32] }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <motion.img
        src={cloudSmall}
        alt="cloud-small"
        className="cloud-small"
        animate={{ x: [0, 6, 12, 18, 24] }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <motion.img
        src={button}
        alt="button"
        className="button"
        onClick={() => navigate("/landing")}
      />
    </section>
  );
}