"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wallet, Mail, Key, ArrowLeft, X } from "lucide-react";
import Image from "next/image";

type Screen = "main" | "wallet";

const wallets = [
  { id: "phantom", name: "Phantom", icon: "" },
  { id: "metamask", name: "MetaMask", icon: "" },
  { id: "coinbase", name: "Coinbase Wallet", icon: "" },
  { id: "walletconnect", name: "WalletConnect", icon: "" },
];

export function AuthDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>("main");
  const [connectingWallet, setConnectingWallet] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    onOpenChange(false);
  };

  const handleWalletConnect = async (walletId: string) => {
    setConnectingWallet(walletId);
    // Simulate wallet connection
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setConnectingWallet(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AnimatePresence mode="wait">
        {open && (
          <DialogContent className="sm:max-w-md" showClose={false}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden"
            >
              <div className="relative">
                {currentScreen === "wallet" && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-0 -top-7"
                    onClick={() => setCurrentScreen("main")}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                )}

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 -top-7"
                  onClick={() => onOpenChange(false)}
                >
                  <X className="h-4 w-4" />
                </Button>

                {/* Logo */}
                <div className="flex justify-center mb-6 mt-8">
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Image
                      src="./logo.svg"
                      alt="Sendit Logo"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </motion.div>
                </div>

                <AnimatePresence mode="wait">
                  {currentScreen === "main" ? (
                    <motion.div
                      key="main"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                      className="px-3"
                    >
                      <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold text-center mb-6"
                      >
                        Connect to Sendit
                      </motion.h2>

                      <motion.form
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        onSubmit={handleSubmit}
                        className="space-y-4 mb-4"
                      >
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-[#223D40] hover:bg-[#3b4f50] transition-colors"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            "Submit"
                          )}
                        </Button>
                      </motion.form>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Button
                          variant="outline"
                          className="w-full mb-4 group hover:border-[#223D40] hover:text-[#223D40] transition-colors"
                          onClick={() => setCurrentScreen("wallet")}
                        >
                          <Wallet className="mr-2 h-5 w-5 group-hover:text-[#223D40] transition-colors" />
                          Continue with a wallet
                        </Button>
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center"
                      >
                        <Button
                          variant="link"
                          className="text-sm text-gray-500 hover:text-[#223D40]"
                        >
                          <Key className="mr-2 h-4 w-4" />I have a passkey
                        </Button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="wallet"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 px-3"
                    >
                      <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold text-center mb-6"
                      >
                        Connect Wallet
                      </motion.h2>

                      <div className="space-y-3">
                        {wallets.map((wallet, index) => (
                          <motion.div
                            key={wallet.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                          >
                            <Button
                              variant="outline"
                              className="w-full justify-start group hover:border-[#223D40] hover:text-[#223D40] transition-colors"
                              onClick={() => handleWalletConnect(wallet.id)}
                              disabled={!!connectingWallet}
                            >
                              <div className="w-6 h-6 mr-3 relative">
                                <Image
                                  src={wallet.icon || "/bank-icon.svg"}
                                  alt={wallet.name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              {wallet.name}
                              {connectingWallet === wallet.id && (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                  }}
                                  className="ml-auto w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                                />
                              )}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Privy Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 text-center text-xs text-gray-400"
                >
                  Protected by Privy
                </motion.div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
