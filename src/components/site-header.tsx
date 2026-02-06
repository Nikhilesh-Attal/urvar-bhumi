"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { User, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navigationLinks = [
  { href: "/#solution", label: "Our Mission" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/resources", label: "Resources" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const logoImage = PlaceHolderImages.find((img) => img.id === "logo-icon");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
        isScrolled ? "border-border/40 bg-background/90 backdrop-blur-sm" : ""
      )}
    >
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
           {logoImage && (
              <Image
                src={logoImage.imageUrl}
                alt="Urvar Bhumi Logo"
                width={32}
                height={32}
                data-ai-hint={logoImage.imageHint}
              />
            )}
          <span className="font-bold font-headline text-xl tracking-wider">
            Urvar Bhumi
          </span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm">
            {navigationLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 transition-colors hover:text-foreground font-medium"
                >
                {link.label}
                </Link>
            ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                <User />
            </Button>
            <ThemeToggle />
            
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col gap-6 pt-12">
                    <Link href="/" className="mb-4 flex items-center space-x-2">
                      {logoImage && (
                          <Image
                            src={logoImage.imageUrl}
                            alt="Urvar Bhumi Logo"
                            width={24}
                            height={24}
                            data-ai-hint={logoImage.imageHint}
                          />
                        )}
                      <span className="font-bold font-headline text-lg tracking-wider">
                        Urvar Bhumi
                      </span>
                    </Link>

                    {navigationLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                    <hr className="my-4 border-border" />
                    <SheetClose asChild>
                        <Link href="#" className="flex items-center gap-2 text-lg font-medium text-foreground/80 transition-colors hover:text-foreground">
                            <User /> Join / Sign In
                        </Link>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
