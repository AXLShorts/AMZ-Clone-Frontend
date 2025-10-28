"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: boolean;
}

// Mock CMS API function
async function fetchServices(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "Amazon Product Photography",
        "Amazon Product Videography",
        "Amazon Listing Optimization",
        "Amazon PPC Management",
        "A+ Content/EBC Service",
        "Amazon Account Management",
        "Amazon 3D Rendering",
        "Amazon Keyword Ranking",
      ]);
    }, 1000);
  });
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", dropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Resources", dropdown: true },
];

const resourcesItems = [
  "Blog",
  "Documentation",
  "Case Studies",
  "Guides",
  "FAQ",
];

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [services, setServices] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    fetchServices().then((data) => {
      setServices(data);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if current path matches or is under a nav item
  const isActive = (href?: string, label?: string) => {
    if (href) {
      return pathname === href;
    }
    // For dropdowns like Services and Resources, check if we're on related pages
    if (label === "Services") {
      return (
        pathname.startsWith("/services") || pathname.startsWith("/portfolio")
      );
    }
    if (label === "Resources") {
      return pathname.startsWith("/resources") || pathname.startsWith("/blog");
    }
    return false;
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 text-white px-6 py-4 transition-all duration-300 ${
        isScrolled ? "bg-[#223145] shadow-lg" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
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

        {/* Desktop Nav Items */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.dropdown ? (
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`flex items-center gap-2 px-4 py-1 rounded-full font-semibold hover:bg-orange-600 transition-colors text-sm lg:text-base ${
                    openDropdown === item.label
                      ? "bg-orange-500 text-black"
                      : "text-white hover:text-orange-500"
                  }`}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href || "#"}
                  className={`inline-flex items-center gap-2 px-4 py-1 rounded-full font-semibold transition-colors text-sm lg:text-base ${
                    isActive(item.href, item.label)
                      ? "bg-orange-500 text-black"
                      : "text-white hover:text-orange-500"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && openDropdown === item.label && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg min-w-max z-50"
                  role="menu"
                  aria-label={`${item.label} menu`}
                >
                  <ul className="py-2">
                    {item.label === "Services"
                      ? services.map((service) => (
                          <li key={service}>
                            <Link
                              href={`/services/${service
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                              role="menuitem"
                            >
                              {service}
                            </Link>
                          </li>
                        ))
                      : resourcesItems.map((resource) => (
                          <li key={resource}>
                            <Link
                              href={`/resources/${resource.toLowerCase()}`}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                              role="menuitem"
                            >
                              {resource}
                            </Link>
                          </li>
                        ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="flex gap-4 items-center">
          <button className="hidden sm:block bg-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors">
            Start a Project
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 right-0 w-full bg-[#142337] bg-opacity-95 z-40">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-orange-500 text-black font-semibold hover:bg-orange-600 transition-colors"
                      aria-expanded={mobileDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ml-auto ${
                          mobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileDropdown === item.label && (
                      <ul className="mt-2 ml-4 space-y-2 border-l-2 border-orange-500 pl-4">
                        {item.label === "Services"
                          ? services.map((service) => (
                              <li key={service}>
                                <Link
                                  href={`/services/${service
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="text-left text-gray-300 hover:text-orange-500 transition-colors text-sm"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {service}
                                </Link>
                              </li>
                            ))
                          : resourcesItems.map((resource) => (
                              <li key={resource}>
                                <Link
                                  href={`/resources/${resource.toLowerCase()}`}
                                  className="text-left text-gray-300 hover:text-orange-500 transition-colors text-sm"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {resource}
                                </Link>
                              </li>
                            ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="block px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-black transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <button className="w-full bg-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors mt-4">
              Start a Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
