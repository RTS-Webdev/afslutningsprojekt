import Circle from "@/components/ui/circle";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import Button2 from "@/components/ui/button2";

export default function Home() {
    return (
        <>
            <header className="bg-white/80 backdrop-blur-sm border-b border-primary/10 fixed w-full top-0 z-10">
                <Navbar />
            </header>
            <main className="min-h-screen w-full bg-background flex flex-col items-start justify-center pt-32 md:pt-64 px-4 md:px-8">
                <section className="py-16 justify-center flex flex-col items-center max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-7xl font-bold mb-8">Lån et lokale i Byens hus</h1>
                    <p className="text-base md:text-lg mb-12 max-w-3xl text-center">
                        Du kan låne lokaler i Byens hus til almennyttige formål og afprøvning af ideer. Her kan du læse mere om booking af lokaler og om lokalerne i Byens hus.
                    </p>
                    <button className="p-4 bg-black text-white rounded-lg">Send en bookinganmodning</button>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Circle size={24} children className="mr-4" />
                            <h2 className="text-xl md:text-2xl font-bold">
                                Lånebetingelser, lokaler i Byens hus
                            </h2>
                        </div>
                        <p className="text-base max-w-[20rem] md:max-w-7xl md:text-lg mb-12">
                            Byens hus er for alle. Vilkårene for lån af lokaler i Byens hus afhænger af formålet. Læs lånebetingelserne, før du laver en bookinganmodning.
                        </p>
                        <Button2>Læs lånebetingelser</Button2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Circle size={24} children className="mr-4" />
                            <h2 className="text-xl md:text-2xl font-bold">
                                Hvårnår får du svar? Svartid på bookinganmodninger
                            </h2>
                        </div>
                        <p className="text-base max-w-[20rem] md:max-w-7xl md:text-lg mb-12">
                            Du kan forvente svar indenfor 2 hverdage, når du laver en bookinganmodning.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Circle size={24} children className="mr-4" />
                            <h2 className="text-xl md:text-2xl font-bold">
                                Ad-hoc bookinger
                            </h2>
                        </div>
                        <p className="text-base max-w-[20rem] md:max-w-7xl md:text-lg mb-12">
                            Hvis du står og mangler et lokale her-og-nu, kan du på selve dagen kontakte husværten og spørge om det er muligt at låne et lokale. Vi kalder det en ad-hoc booking, her i Byens hus.
                            <br /><br />
                            Kontakt oplysninger til husværten finder du længere nede på denne side, samt i alle lokaler i Byens hus.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Circle size={24} children className="mr-4" />
                            <h2 className="text-xl md:text-2xl font-bold">
                                Byens hus lokaler
                            </h2>
                        </div>
                        <p className="text-base max-w-[20rem] md:max-w-7xl md:text-lg mb-12">
                            Her ses de lokaler, der kan bruges i Byens hus. Lokalerne er vidt forskellige i størrelse og indretning.
                        </p>
                        <Button2>Byens hus lokaler</Button2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Circle size={24} children className="mr-4" />
                            <h2 className="text-xl md:text-2xl font-bold">
                                Placering af Byens hus lokaler
                            </h2>
                        </div>
                        <p className="text-base max-w-[20rem] md:max-w-7xl md:text-lg mb-12">
                            Se hvor lokalerne er placeret i Byens hus.
                        </p>
                        <Button2>Placering af lokalerne i Byens huz</Button2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Circle size={24} children className="mr-4" />
                            <h2 className="text-xl md:text-2xl font-bold">
                                Synliggør din arrangement
                            </h2>
                        </div>
                        <p className="text-base max-w-[20rem] md:max-w-7xl md:text-lg mb-12">
                            Her kan du få inspiration til, hvordan du kan markedsføre dit arrangement. Som minimum skal offentlige arrangementer lægges på RoskildeLive - Roskilde Kommunes kalender for alt, hvad der rør sig af aktiviteter i kommunen.
                        </p>
                        <Button2>Arrangørguiden</Button2>
                    </div>
                </section>
            </main>
            <footer className="w-full bg-black/10 border-t border-primary/10 mt-16">
                <Footer />
            </footer>
        </>
    )
}