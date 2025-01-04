"use client";

import Link from "next/link";
import { useState } from "react";
import { X, Menu } from 'lucide-react';
import {
    Accordion,
    AccordionItem,
} from "@/components/ui/accordion"
import { navItems } from "../lib/util";
import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="container flex items-center justify-between p-4 md:p-6">
            <Link href="/" className="relative z-50 md:p-8">
                <Image
                    src="/logo.png"
                    alt="Byens Hus Logo"
                    width={200}
                    height={100}
                    className="transition-transform hover:scale-105"
                />
            </Link>

            <button
                className="md:hidden relative z-50 text-primary hover:text-primary/80 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
            >
                {isMenuOpen ? <X className="w-12 h-12" /> : <Menu className="w-12 h-12" />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 flex-grow justify-end">
                {navItems.map((item) => (
                    <div key={item.title} className="relative group">
                        <Link
                            href={item.href}
                            className="text-primary/90 hover:text-primary py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 scroll-smooth"
                        >
                            {item.title.toUpperCase()}
                        </Link>
                    </div>
                ))}
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                id="mobile-menu"
                className={`fixed right-0 top-0 min-h-screen w-full transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } md:hidden bg-white/95 backdrop-blur-sm`}
            >
                <nav className="flex flex-col justify-between h-full" aria-label="Mobile navigation">
                    <div className="flex flex-col pt-24 px-6">
                        <Accordion type="single" collapsible className="w-full space-y-2">
                            {navItems.map((item, index) => (
                                <AccordionItem value={`item-${index}`} key={item.title} className="border-none">
                                    <Link
                                        href={item.href}
                                        className="py-4 text-2xl font-medium text-primary hover:text-primary/80 transition-colors block"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </nav>
            </div>
        </nav>
    );
}
