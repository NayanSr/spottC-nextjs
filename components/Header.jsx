"use client";

import { UserButton, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user";

const Header = () => {
  const { isLoading } = useStoreUser();
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* logo   */}
          <Link href={"/"} className="flex items-center ">
            <Image
              alt="Logo"
              src="/spott.png"
              width={500}
              height={500}
              className="w-full h-11"
              priority
            ></Image>
          </Link>
          {/* search and location - Desktop only */}
          {/* right side action */}
          <div className="flex items-center">
            <Authenticated>
              {/* create events */}
              <UserButton />
            </Authenticated>
            <Unauthenticated>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            </Unauthenticated>
          </div>
        </div>
        {/* Mobile search and location - Bellow Header */}
        {/* Loader */}

        {isLoading && (
          <div className="absolute left-0 bottom-0 w-full">
            <BarLoader width={"100%"} color="#660000" />
          </div>
        )}
      </nav>
      {/* Modals */}
    </>
  );
};

export default Header;
