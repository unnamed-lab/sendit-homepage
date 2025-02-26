"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useSidebar } from "./sidebar-context";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { AuthDialog } from "./auth-dialog";
import { useCart } from "@/contexts/cart-context";

export function Navbar() {
  const { toggle } = useSidebar();
  const { setIsOpen } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-grey-200 z-40">
      <div className="h-full flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="lg:flex hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Sendit Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-2xl italic font-extrabold text-grey-900 hidden sm:inline">
              SENDIT
            </span>
          </Link>
        </div>

        {/* Mobile Search Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          {isSearchOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </Button>

        {/* Desktop Search */}
        <div className="hidden md:flex relative flex-1 max-w-2xl mx-4">
          <Input
            placeholder="Search for courses, trading bots and more..."
            className="bg-grey-50 border-grey-200 pr-10 w-full"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-grey-400" />
        </div>

        {/* Mobile Search Bar */}
        <div
          className={`absolute left-0 right-0 top-16 bg-white p-4 border-b border-grey-200 md:hidden transition-transform duration-200 ${
            isSearchOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="relative">
            <Input
              placeholder="Search..."
              className="bg-grey-50 border-grey-200 pr-10 w-full"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-grey-400" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-body-regular text-grey-600 hover:text-grey-900"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-body-regular text-grey-600 hover:text-grey-900"
          >
            Education
          </Link>
          <Link
            href="#"
            className="text-body-regular text-grey-600 hover:text-grey-900"
          >
            Crypto & Trading
          </Link>
          <Button
            variant="ghost"
            className="text-white bg-primary"
            onClick={() => setShowAuthDialog(true)}
          >
            Sign In
          </Button>
          <Button variant="ghost" className="text-grey-600 p-2">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-lg font-semibold text-grey-900">
                Services
              </Link>
              <Link href="#" className="text-lg font-semibold text-grey-900">
                Education
              </Link>
              <Link href="#" className="text-lg font-semibold text-grey-900">
                Crypto & Trading
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button className="w-full">Sign In</Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsOpen(true)}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} />
      </div>
    </header>
  );
}
