"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
   <footer className="flex justify-center items-center py-4 bg-purple-900/20 text-white w-full backdrop-blur-md">
     <div className="text-center">
       <p className="text-white">© 2024 Moon Mouse</p>
       <p className="text-white">All Rights Reserved</p>
     </div>
   </footer>
  );
}
