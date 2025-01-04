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
        <nav className="w-full flex items-center justify-between p-4 md:p-6 bg-transparent bg-inherit/30 backdrop-blur-sm">
            <Link href="/" className="text-2xl font-bold dark:text-white z-50 p-8">
                <Image
                    src={"/logo.png"}
                    alt="Byens Hus Logo"
                    width={200}
                    height={100}
                />
            </Link>

            <button
                className="md:hidden dark:text-white relative z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? <X className="w-12 h-12" /> : <Menu className="w-12 h-12" />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 flex-grow">
                {navItems.map((item) => (
                    <div key={item.title} className="relative group">
                        <Link
                            href={item.href}
                            className="hover:bg-gray-100 hover:bg-opacity-10 hover:text-neutral-300 rounded-full px-4 py-2 transition-colors flex items-center text-xl"
                        >
                            {item.title.toUpperCase()}
                        </Link>
                    </div>
                ))}
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`fixed right-0 top-0 min-h-screen w-full transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } md:hidden bg-inherit/30 md:backdrop-blur-sm`}
            >
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col pt-24 px-6">
                        <Accordion type="single" collapsible className="w-full space-y-2">
                            {navItems.map((item, index) => (
                                <AccordionItem value={`item-${index}`} key={item.title} className="border-none">
                                    <Link
                                        href={item.href}
                                        className="py-4 text-2xl font-medium dark:text-white block"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </nav>
    );
}
