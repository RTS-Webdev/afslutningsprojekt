'use client'

import { MoveLeft, MoveRight } from 'lucide-react'
import { useState } from "react"
import { pageContent } from './lib/util'
import Image from "next/image"
import Navbar from "./components/nav"

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + pageContent.length) % pageContent.length)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % pageContent.length)
    }

    return (
        <>
            <header className="fixed top-0 right-0 left-0 z-50">
                <Navbar />
            </header>
            <main className="min-h-screen w-full bg-background bg-[radial-gradient(#a8a29e_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_70%,#000_60%,transparent_100%)] flex items-center justify-center px-4 py-16">
                <article className="w-full max-w-7xl bg-white rounded-2xl border border-gray-200 p-6 md:p-12 relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <header className="relative">
                            <div className="space-y-6 min-h-[300px]">
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                                    {pageContent[currentIndex].title}
                                </h1>
                                <p className="text-lg md:text-xl text-gray-700">
                                    {pageContent[currentIndex].description}
                                </p>
                            </div>
                            <div className="bottom-0 left-0 flex items-center gap-4">
                                <button
                                    onClick={handlePrevious}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    aria-label="Previous slide"
                                >
                                    <MoveLeft className="w-8 h-8 text-primary" />
                                </button>
                                <span className="text-lg font-medium min-w-[4rem] text-center">
                                    {String(currentIndex + 1).padStart(2, '0')} af {String(pageContent.length).padStart(2, '0')}
                                </span>
                                <button
                                    onClick={handleNext}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    aria-label="Next slide"
                                >
                                    <MoveRight className="w-8 h-8 text-primary" />
                                </button>
                            </div>
                        </header>
                        <figure className="flex justify-center">
                            <Image
                                src="/1.svg"
                                alt="Julebillede"
                                width={600}
                                height={400}
                                className="object-contain rounded-lg"
                            />
                        </figure>
                    </div>
                </article>
            </main>
        </>
    )
}
