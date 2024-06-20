import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div
      className={`${styles.container} flex flex-col items-center backdrop-blur-3xl w-full pb-8`}
      id="tokenomics"
      style={{
        backgroundImage: "url(/background5.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className={`${styles.imageContainer} flex flex-col`}>
        <Image
          src="/tokenomics.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto image-glow-purple mt-[20px]"
        />
        <Image
          src="/tokenomics-content.png"
          alt=""
          width={800}
          height={480}
          className="mx-auto mt-[20px] hidden md:block"
        />
        <Image
          src="/tokenomics-mobile.png"
          alt=""
          width={800}
          height={480}
          className="mx-auto mt-[20px] block md:hidden"
        />
      </div>
    </div>
  );
}
