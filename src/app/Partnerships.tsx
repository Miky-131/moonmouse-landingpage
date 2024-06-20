import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Partnerships() {
  return (
    <div
      className={`${styles.container} flex flex-col items-center w-full`}
      style={{
        backgroundImage: "url(/background6.jpg)",
        backgroundSize: "cover",
      }}
      id="partnerships"
    >
      <div className="mx-8">
        <Image
          src="/Partnerships.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto image-glow-purple mt-[20px]"
        />
        <Image
          src="/Partnerships-logo.png"
          alt=""
          width={480}
          height={480}
          className="mx-auto"
        />
        <div className={`${styles.imageContainer} flex flex-col`}>
          <Link
            href="https://coingecko.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.partnerLink} hover:brightness-125 transition duration-200`}
          >
            <Image
              src="/partner-3.png"
              alt=""
              width={800}
              height={480}
              className="mx-auto purple-glow"
            />
          </Link>

          <Link
            href="https://dextools.io"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.partnerLink} hover:brightness-125 transition duration-200`}
          >
            <Image
              src="/partner-2.png"
              alt=""
              width={800}
              height={480}
              className="mx-auto purple-glow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
