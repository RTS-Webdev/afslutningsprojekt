import Footer from "../components/footer";
import Navbar from "../components/nav";

export default function Home() {
    return (
        <>
            <header className="bg-white/80 backdrop-blur-sm border-b border-primary/10 fixed w-full top-0 z-10">
                <Navbar />
            </header>
            <main className="min-h-screen w-full bg-background flex flex-col justify-center pt-32 px-8">
                <h1 className="text-4xl font-bold mb-8">Åbningstider og kontakt information</h1>
                <p className="text-lg mb-12">Find information om åbningstider og kontaktoplysninger nedenfor.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Secretariat Section */}
                    <div className="space-y-4 bg-slate-100 p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold">Sekretariat og booking-telefon</h2>
                        <ul className="list-none space-y-2">
                            <li>Mandag - 10:00-15:00</li>
                            <li>Tirsdag - 10:00-15:00</li>
                            <li>Onsdag - 10:00-15:00</li>
                            <li>Torsdag - 10:00-15:00</li>
                            <li>Fredag - lukket</li>
                            <li>Lørdag - lukket</li>
                            <li>Søn-/helligdage - lukket</li>
                        </ul>
                        <div className="space-y-2">
                            <p>Sekretariat tlf: <a href="tel:46315199" className="underline">46 31 51 99</a></p>
                            <p>Mail: <a href="mailto:byenshus@roskilde.dk" className="underline">byenshus@roskilde.dk</a></p>
                        </div>
                    </div>

                    {/* House Host Section */}
                    <div className="space-y-4 bg-slate-100 p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold">Huset er åbent og du kan kontakte husværten for praktisk hjælp</h2>
                        <ul className="list-none space-y-2">
                            <li>Mandag - kl. 8:00-21:00</li>
                            <li>Tirsdag - kl. 8:00-21:00</li>
                            <li>Onsdag - kl. 8:00-21:00</li>
                            <li>Torsdag - kl. 8:00-21:00</li>
                            <li>Fredag - kl. 8:00-21:00</li>
                            <li>Lørdag - kl. 8:00-21:00</li>
                            <li>Søn-/helligdage - kl. 10:00-16:00</li>
                        </ul>
                        <p>Husvært tlf: <a href="tel:20534805" className="underline">20 53 48 05</a> (hjælp til praktiske opgaver i huset)</p>
                        <div className="space-y-2 text-sm">
                            <p><strong>OBS!</strong> Indgangen til Den Gamle Byrådssal er kun åben ved arrangementer</p>
                            <p>Arrangementer kan foregå 7-22.30, hvis der er booket et lokale.</p>
                            <p><strong>OBS!</strong> Du skal bruge kode for at komme ind før kl. 8 og efter kl. 21, denne kode ses i din booking bekræftelse</p>
                        </div>
                    </div>

                    {/* Public Toilets Section */}
                    <div className="space-y-4 bg-slate-100 p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold">Nødtørften/De offentlige toiletter</h2>
                        <ul className="list-none space-y-2">
                            <li>Mandag - kl. 8:00-21:00</li>
                            <li>Tirsdag - kl. 8:00-21:00</li>
                            <li>Onsdag - kl. 8:00-21:00</li>
                            <li>Torsdag - kl. 8:00-21:00</li>
                            <li>Fredag - kl. 8:00-21:00</li>
                            <li>Lørdag - kl. 8:00-21:00</li>
                            <li>Søn-/helligdage - kl. 10:00-16:00</li>
                        </ul>
                        <p>Opsyn tlf (husvært): <a href="tel:20534805" className="underline">20 53 48 05</a></p>
                    </div>
                </div>
            </main>
            <footer className="w-full bg-black/10 border-t border-primary/10 mt-16">
                <Footer />
            </footer>
        </>
    )
}  