"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/contexts/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

export function CartSidebar() {
  const {
    isOpen,
    setIsOpen,
    items,
    removeItem,
    updateQuantity,
    subtotal,
    totalItems,
  } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader className="space-y-4 pr-6">
          <SheetTitle className="text-2xl font-bold">Your Cart</SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </SheetHeader>

        <div className="mt-8 h-full flex flex-col">
          <ScrollArea className="flex-1 -mx-6 px-6">
            {items.length === 0 ? (
              <div className="text-center py-6 text-gray-500">
                Your cart is empty!
              </div>
            ) : (
              <AnimatePresence initial={false}>
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.title}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          By {item.author}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() =>
                              updateQuantity(item.title, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() =>
                              updateQuantity(item.title, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${item.price}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-600 mt-2"
                          onClick={() => removeItem(item.title)}
                        >
                          Remove
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            )}
          </ScrollArea>

          <div className="border-t mt-auto pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">
                Cart subtotal ({totalItems} items):
              </span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <Button
              className="w-full bg-primary hover:bg-[#3b4f50]"
              disabled={items.length === 0}
            >
              Continue to Checkout
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
