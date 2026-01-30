"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/#purpose", label: "Purpose" },
  { href: "/#solution", label: "Solution" },
  { href: "/#journey", label: "Journey" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      // Only scroll if on the homepage
      if (pathname === "/") {
        scrollTo(href.substring(1));
      } else {
        // If on another page, navigate to homepage and then scroll
        window.location.href = href;
      }
    }
    // For direct links like /gallery, the default Link behavior will work
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
        isScrolled ? "border-border/40 bg-background/95 backdrop-blur-sm" : ""
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold font-headline text-lg">
            उर्वर भूमि <span className="font-body text-base font-normal text-muted-foreground">Urvar Bhumi</span>
          </span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center gap-6 text-sm">
          {navigationLinks.map((link) => (
             <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" onClick={() => scrollTo('#get-involved')}>Get Involved</Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
