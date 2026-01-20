"use client";

import { UserButton, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user";
import { Plus } from "lucide-react";
import { Ticket } from "lucide-react";
import { Building } from "lucide-react";

const Header = () => {
  const { isLoading } = useStoreUser();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
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
            />
            {/* Pro badg */}
          </Link>


          {/* search and location - Desktop only */}
          {/* right side action */}
          <div className="flex items-center">
            <Button variant={"ghost"} size="sm" onClick={()=>setShowUpgradeModal(true)}>
              Pricing
            </Button>

            <Button variant="ghost" size="sm" asChild className={"mr-2"}>
              <Link href="/explore">Explore</Link>
            </Button>

            <Authenticated>
              <Button size="sm" asChild className="flex gap-2 mr-4">
                {/*//? related to proxy.js protected Route */}
                <Link href="/create-event">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Create Event</span>
                </Link>
              </Button>

              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Tickets"
                    labelIcon={<Ticket size={16} />}
                    href="/my-tickets"
                    />
                    {/* //? related to proxy.js protected Route */}

                  <UserButton.Link
                    label="My Events"
                    labelIcon={<Building size={16} />}
                    href="/my-events"
                  />

                 
                  <UserButton.Action label="manageAccount" />
                </UserButton.MenuItems>

              </UserButton>
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
