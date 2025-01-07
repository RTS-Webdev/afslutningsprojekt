import Footer from "./components/footer"
import Navbar from "./components/nav"
import Slider from "./components/slider"
import Image from "next/image"

export default function Home() {
    return (
        <>
            <header className="bg-white/80 backdrop-blur-sm border-b border-primary/10 fixed w-full top-0 z-10">
                <Navbar />
            </header>
            <main className="min-h-screen w-full bg-background flex flex-col items-center justify-center px-4 py-16 space-y-16">
                <Slider />
            </main>
            <footer className="w-full bg-black/10 border-t border-primary/10">
                <Footer />
            </footer>
        </>
    )
}