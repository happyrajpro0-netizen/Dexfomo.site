"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import WaitlistModal from "@/components/WaitlistModal";

interface WaitlistContextType {
  isWaitlistOpen: boolean;
  openWaitlist: () => void;
  closeWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <WaitlistContext.Provider value={{ isWaitlistOpen, openWaitlist, closeWaitlist }}>
      {children}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
}
