"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useMediaQuery } from "react-responsive";

const PartnersContext = createContext<PartnersContextValue>({
  isSwiping: false,
  onSwipeStart: () => {},
  onSwipeMove: () => {},
  onSwipeEnd: () => {},
});

type PartnersContextValue = {
  isSwiping: boolean;
  onSwipeStart: (e: React.PointerEvent<HTMLDivElement>) => void;
  onSwipeMove: (e: React.PointerEvent<HTMLDivElement>) => void;
  onSwipeEnd: () => void;
};

const usePartners = (): PartnersContextValue => {
  return useContext(PartnersContext);
};

type PartnersContextProps = {
  children: React.ReactNode;
};

const PartnersContextProvider: React.FC<PartnersContextProps> = ({
  children,
}) => {
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(0);
  const partnersContainerRef = useRef<HTMLDivElement | null>(null);

  const swipeStartTimeout = useRef<ReturnType<typeof setTimeout>>();

  const handleSwipeStart = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") {
      // No delay for touch events
      setIsSwiping(true);
      setStartX(e.clientX);
    } else {
      if (swipeStartTimeout.current) {
        clearTimeout(swipeStartTimeout.current);
      }

      swipeStartTimeout.current = setTimeout(() => {
        setIsSwiping(true);
        setStartX(e.clientX);
      }, 300);
    }
  };

  const handleSwipeMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isSwiping) return;
    if (!partnersContainerRef.current) return;

    const currentX = e.clientX;
    const diffX = currentX - startX;

    // Scroll the container based on the swipe movement
    partnersContainerRef.current.scrollLeft =
      partnersContainerRef.current.scrollLeft - diffX;
    setStartX(currentX);
  };

  const handleSwipeEnd = () => {
    if (swipeStartTimeout.current) {
      clearTimeout(swipeStartTimeout.current);
    }

    setTimeout(() => {
      setIsSwiping(false);
    }, 100);
  };

  return (
    <PartnersContext.Provider
      value={{
        isSwiping,
        onSwipeStart: handleSwipeStart,
        onSwipeMove: handleSwipeMove,
        onSwipeEnd: handleSwipeEnd,
      }}
    >
      <div
        className="partners-scroll-container mt-3"
        ref={partnersContainerRef}
        onPointerDown={handleSwipeStart}
        onPointerMove={handleSwipeMove}
        onPointerUp={handleSwipeEnd}
        onPointerCancel={handleSwipeEnd}
        onPointerLeave={handleSwipeEnd}
      >
        {children}
      </div>
    </PartnersContext.Provider>
  );
};

interface Partner {
  src: string;
  alt: string;
  href: string;
}

const partnersData: Partner[] = [
  {
    src: "/partner-pinksale.png",
    alt: "PinkSale",
    href: "https://www.pinksale.finance/solana/launchpad/jJnqZfEhfQc8HabiMafDgMv2XkuXSrywDYkfgPYQasd",
  },
  {
    src: "/partner-dexview.png",
    alt: "DEXView",
    href: "https://www.dexview.com/solana/MMm5bNGg5PynP1pp2KMxLCT5UdB7cjQvwUx9yz6AnHU",
  },
  {
    src: "/partner-3.png",
    alt: "CoinGecko",
    href: "https://coingecko.com",
  },
  {
    src: "/partner-2.png",
    alt: "DEXTools",
    href: "https://dextools.io",
  },
  {
    src: "/partner-solidproof.png",
    alt: "SolidProof",
    href: "https://github.com/solidproof/projects/tree/main/2024/MoonMouse",
  },
  {
    src: "/partner-coinsult.png",
    alt: "Coinsult",
    href: "https://coinsult.net/projects/moonmouse",
  },
];

const PartnersFragment = ({ partner }: { partner: Partner }) => {
  const width = 325;
  const height = 100;
  const { isSwiping } = useContext(PartnersContext);

  const handleClick = (url: string) => {
    if (
      (!isSwiping && navigator.maxTouchPoints === 0) ||
      (isSwiping && navigator.maxTouchPoints > 0)
    ) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="badge" onClick={() => handleClick(partner.href)}>
      <div
        className="btn-simple"
        draggable={false}
        style={{ pointerEvents: isSwiping ? "none" : "auto" }}
      >
        <Image
          src={partner.src}
          alt={partner.alt}
          height={height}
          width={width}
          draggable={false}
          className="badge-image h-[50px] md:h-[100px] w-[180px] md:w-[325px]"
        />
      </div>
    </div>
  );
};

export default function Partnerships() {
  const { isSwiping } = usePartners();

  return (
    <div
      className={`${styles.container} flex flex-col items-center w-full`}
      style={{
        backgroundImage: "url(/background6.jpg)",
        backgroundSize: "cover",
      }}
      id="partnerships"
    >
      <Image
        src="/Partnerships.png"
        alt=""
        width={480}
        height={480}
        className="mx-auto image-glow-purple mt-[20px]"
      />
      <div className="w-screen flex justify-center flex-col mt-10 overflow-x-hidden mb-20">
        <div className="max-w-screen-lg w-full mx-auto flex flex-col items-center justify-between px-4">
          <div className="w-full relative mt-16 mb-8 md:mb-20">
            <Image
              src="/Partnerships-logo.png"
              alt=""
              width={240}
              height={240}
              className="mx-auto absolute top-[0px] md:top-[-60px] right-[-50px] md:right-[-90px] z-10 w-[120px] md:w-[240px] h-[120px] md:h-[240px]"
            />

            <Image
              src="/Partnerships-logo.png"
              alt=""
              width={240}
              height={240}
              className="mx-auto absolute top-[0px] md:top-[-60px] left-[-50px] md:left-[-90px] z-10 scale-x-[-1] w-[120px] md:w-[240px] h-[120px] md:h-[240px]"
            />

            <PartnersContextProvider>
              <div
                className="badges mt-4 mb-4"
                style={{
                  display: "flex",
                  whiteSpace: "nowrap",
                  alignItems: "center",
                  pointerEvents: isSwiping ? "none" : "auto", // Disable pointer events when swiping
                }}
              >
                {[
                  ...partnersData,
                  ...partnersData,
                  ...partnersData,
                  ...partnersData,
                ].map((partner, index) => (
                  <PartnersFragment
                    key={`${partner.alt}-${index}`}
                    partner={partner}
                  />
                ))}
              </div>
            </PartnersContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
