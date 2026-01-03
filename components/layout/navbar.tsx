"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

interface SubMenuItem {
  name: string;
  href: string;
  description?: string;
}

const services: SubMenuItem[] = [
  {
    name: "Full Listing Optimization",
    href: "/services/full-listing-optimization",
    description: "Complete Amazon listing optimization",
  },
  {
    name: "Keyword Ranking",
    href: "/services/keyword-ranking",
    description: "Improve your keyword visibility",
  },
  {
    name: "A+/EBC Content",
    href: "/services/a-ebc-content",
    description: "Enhanced brand content creation",
  },
  {
    name: "Account Management",
    href: "/services/account-management",
    description: "Full Amazon account management",
  },
  {
    name: "PPC Management",
    href: "/services/ppc-management",
    description: "Advertising optimization",
  },
  {
    name: "Brand Storefronts",
    href: "/services/brand-storefronts",
    description: "Build your Amazon storefront",
  },
];

const resourcesMenu: SubMenuItem[] = [
  {
    name: "Case Studies",
    href: "/case-study",
    description: "Real client results",
  },
  { name: "FAQ", href: "/faq", description: "Common questions answered" },
  {
    name: "ROI Calculator",
    href: "/resources/roi-calculator",
    description: "Estimate your potential profit",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href?: string, label?: string) => {
    if (href) return pathname === href;
    if (label === "Services") return pathname.startsWith("/services");
    if (label === "Resources") return pathname.startsWith("/faq");
    return false;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-brand-dark shadow-lg" : "bg-transparent"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="relative h-12 w-36">
              <Image
                src="/assets/logo-wt.png"
                alt="MERXPERT"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - shadcn NavigationMenu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              {/* Home */}
              <NavigationMenuItem>
                <Link
                  href="/"
                  className={cn(
                    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors",
                    isActive("/")
                      ? "bg-brand-primary text-white"
                      : "text-white hover:text-brand-accent"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    isActive(undefined, "Services") &&
                      "bg-brand-primary text-white"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={cn(
                          "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                        )}
                      >
                        <div className="text-sm font-semibold text-gray-900">
                          {service.name}
                        </div>
                        {service.description && (
                          <p className="text-xs text-gray-600 mt-1">
                            {service.description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Portfolio */}
              <NavigationMenuItem>
                <Link
                  href="/portfolio"
                  className={cn(
                    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors",
                    isActive("/portfolio")
                      ? "bg-brand-primary text-white"
                      : "text-white hover:text-brand-accent"
                  )}
                >
                  Portfolio
                </Link>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className={cn(
                    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors",
                    isActive("/about")
                      ? "bg-brand-primary text-white"
                      : "text-white hover:text-brand-accent"
                  )}
                >
                  About
                </Link>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    isActive(undefined, "Resources") &&
                      "bg-brand-primary text-white"
                  )}
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3">
                    {resourcesMenu.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className={cn(
                          "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                        )}
                      >
                        <div className="text-sm font-semibold text-gray-900">
                          {resource.name}
                        </div>
                        {resource.description && (
                          <p className="text-xs text-gray-600 mt-1">
                            {resource.description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/audit"
              className="hidden sm:inline-block bg-brand-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-accent transition-colors text-sm"
            >
              Free Audit
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-brand-primary/20 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-brand-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
            {/* Home */}
            <Link
              href="/"
              className="block px-4 py-3 text-white hover:bg-brand-primary/20 rounded-lg transition-colors text-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Services */}
            <div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left px-4 py-3 text-white hover:bg-brand-primary/20 rounded-lg transition-colors text-sm font-semibold"
              >
                Services
              </button>
              <div className="mt-2 space-y-1 pl-4 border-l-2 border-brand-primary">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-gray-300 hover:text-brand-accent transition-colors text-sm rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <Link
              href="/portfolio"
              className="block px-4 py-3 text-white hover:bg-brand-primary/20 rounded-lg transition-colors text-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="block px-4 py-3 text-white hover:bg-brand-primary/20 rounded-lg transition-colors text-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Resources */}
            <div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left px-4 py-3 text-white hover:bg-brand-primary/20 rounded-lg transition-colors text-sm font-semibold"
              >
                Resources
              </button>
              <div className="mt-2 space-y-1 pl-4 border-l-2 border-brand-primary">
                {resourcesMenu.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="block px-4 py-2 text-gray-300 hover:text-brand-accent transition-colors text-sm rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <Link
              href="/audit"
              className="block w-full text-center mt-4 bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-accent transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
