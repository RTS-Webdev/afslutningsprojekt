"use client";

import { useState } from "react"
import { pageContent } from "../lib/util";
import { MoveLeft, MoveRight } from 'lucide-react'
import Image from "next/image"

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + pageContent.length) % pageContent.length)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % pageContent.length)
    }

    return (
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
                        src={`/img/${currentIndex + 1}.png`}
                        alt="Slider Image"
                        width={600}
                        height={400}
                        className="object-contain rounded-lg"
                    />
                </figure>
            </div>
        </article>
    )
}
