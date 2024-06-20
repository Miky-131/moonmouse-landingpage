import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import styles from "./Hero.module.css";

export default function Roadmap() {
  return (
    <div
      className={`${styles.container} flex flex-col items-center`}
      id="roadmap"
    >
      <div className={`${styles.imageContainer} flex flex-col w-[100vw] overflow-hidden`}>
        <Image
          src="/roadmap.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto image-glow-purple mt-[20px]"
        />
        <Image
          src="/stages.png"
          alt=""
          width={800}
          height={480}
          className="mx-auto mt-16 hidden md:block"
        />
        <Image
          src="/stages-mobile.png"
          alt=""
          width={800}
          height={480}
          className="mx-auto mt-16 block md:hidden"
        />
      </div>
    </div>
  );
}
