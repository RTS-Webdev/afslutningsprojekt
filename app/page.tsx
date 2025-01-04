import Footer from "./components/footer"
import Navbar from "./components/nav"
import Slider from "./components/slider"

export default function Home() {
    return (
        <>
            <header className="fixed top-0 right-0 left-0 z-50">
                <Navbar />
            </header>
            <main className="min-h-screen w-full bg-background bg-[radial-gradient(#a8a29e_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_70%,#000_60%,transparent_100%)] flex items-center justify-center px-4 py-16">
                <Slider />
            </main>
            <footer className="w-full bg-white border-t">
                <Footer />
            </footer>
        </>
    )
}
