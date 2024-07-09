import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import styles from "./Hero.module.css";
import Countdown from "../components/Countdown";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className={`${styles.container} flex flex-col items-center max-w-[900px] mt-16`}
    >
      <div className={`${styles.imageContainer} flex flex-col`}>
        <Image
          src="/moonmouse-welcome-text.png"
          alt=""
          width={360}
          height={360}
          className="mx-auto image-glow-purple -mt-[120px]"
        />

        <div className="mt-5 md:mt-0 flex-1 w-full flex flex-col items-end gap-5 mb-8 ml-4">
          <div className="flex w-fit mx-auto shadow-[0_0_30px_5px_#995df9b0] animate-pulse items-center justify-center flex-col gap-5 backdrop-blur bg-[#33026d88] border border-white/5 rounded-3xl p-6">
            <Countdown />
            <a
              target="_blank"
              href="https://www.pinksale.finance/solana/launchpad/jJnqZfEhfQc8HabiMafDgMv2XkuXSrywDYkfgPYQasd"
              className=""
            ></a>
            <div className="flex flex-row items-center gap-3 pb-4">
              <div className="flex flex-col items-center gap-3">
                <Button className="from-primaryLight to-primaryLight w-36 text-xl">
                  <Link href="https://www.pinksale.finance/solana/launchpad/jJnqZfEhfQc8HabiMafDgMv2XkuXSrywDYkfgPYQasd" target="_blank">
                    <div className="flex ml-[48px]">
                      <img
                        src="/pinksale-icon.svg"
                        width="32px"
                        className="mr-2"
                      />
                      {"PinkSale"}
                    </div>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/moonmouse-big.png"
          alt=""
          width="50%"
          height="50%"
          className="mx-auto image-glow-yellow hidden md:block"
        />
        <img
          src="/text-panel.png"
          alt=""
          width="100%"
          height="100%"
          className="mx-auto -mt-[40%]  hidden md:block"
        />
        <img
          src="/moonmouse-big.png"
          alt=""
          width="50%"
          height="50%"
          className="mx-auto image-glow-yellow block md:hidden"
        />
        <img
          src="/text-panel-mobile.png"
          alt=""
          width="100%"
          height="100%"
          className="mx-auto -mt-[75%] block md:hidden"
        />
      </div>
      <div className={`${styles.buttonContainer} flex flex-row`}>
        <a href="https://t.me/moonmousecoin" target="_blank">
          <Button className={`${styles.button} ${styles.buttonShadow}`}>
            <div className="flex ml-[32px]">
              <img src="/telegram-icon.svg" width="32px" className="mr-2" />
              Telegram
            </div>
          </Button>
        </a>
        <a href="https://x.com/moonmouse24" target="_blank">
          <Button className={`${styles.button} ${styles.buttonShadow}`}>
            <div className="flex ml-[42px]">
              <img src="/x-icon.svg" width="32px" className="mr-2" />
              Twitter
            </div>
          </Button>
        </a>
        <a href="https://www.pinksale.finance/solana/launchpad/jJnqZfEhfQc8HabiMafDgMv2XkuXSrywDYkfgPYQasd" target="_blank">
          <Button className={`${styles.button} ${styles.buttonShadow}`}>
            <div className="flex ml-[60px]">
              <img src="/pinksale-icon.svg" width="32px" className="mr-2" />
              Buy
            </div>
          </Button>
        </a>
        <a href="https://coinsult.net/projects/moonmouse" target="_blank">
          <Button className={`${styles.button} ${styles.buttonShadow}`}>
            <div className="flex ml-[44px]">
              <img src="/cfgninja-icon.png" width="32px" className="mr-2" />
              Audit
            </div>
          </Button>
        </a>
        <a href="https://docs.moonmouse.io/" target="_blank">
          <Button className={`${styles.button} ${styles.buttonShadow}`}>
            <div className="flex ml-[22px]">
              <img src="/pdf-icon.svg" width="32px" className="mr-1" />
              Whitepaper
            </div>
          </Button>
        </a>
      </div>
    </div>
  );
}
