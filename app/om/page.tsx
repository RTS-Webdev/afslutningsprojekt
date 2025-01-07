import Circle from "@/components/ui/circle";
import Footer from "../components/footer";
import Navbar from "../components/nav";

export default function Home() {
    return (
        <>
            <header className="bg-white/80 backdrop-blur-sm border-b border-primary/10 fixed w-full top-0 z-10">
                <Navbar />
            </header>
            <main className="min-h-screen w-full bg-background flex flex-col items-start justify-center pt-32 md:pt-64 px-4 md:px-8">
                <section className="py-16 justify-center flex flex-col items-center max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-7xl font-bold mb-8">Om Byens hus</h1>
                    <p className="text-base md:text-lg mb-12 max-w-3xl text-center">
                        Byens hus er sat i verden som et kommunalt demokratihus. Her kan du låne lokaler, møde andre, fordybe dig, blive inspireret og bygge løsninger. Du er en vigtig del af demokratiet. Tak fordi du deltager lokalt.
                    </p>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Circle size={24} className="mr-4" />
                            <h2 className="text-xl md:text-2xl font-bold">
                                Dit moderne medborgerhus
                            </h2>
                        </div>
                        <p className="text-base max-w-[20rem] md:max-w-7xl md:text-lg mb-12">
                            Som medborger kan du låne lokaler i Byens hus til almennyttige formål og afprøvning af nye ideer. Du kan selvfølgelig også deltage i aktiviteter, som dine med-borgere har planlagt. Har du et kommercielt formål eller bor udenfor Roskilde Kommune, skal du betale lokaleleje.
                            <br /><br />
                            Her er både plads til planlagte og tilfældige møder mellem mennesker: Større borgermøder, midlertidige udstillinger, intime netværksmøder, forsøg med nye initiativer og klassisk foreningsarbejde.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Circle size={24} className="mr-4" />
                            <h2 className="text-xl md:text-2xl font-bold">
                                Et godt sted og starte og et trygt sted og teste
                            </h2>
                        </div>
                        <p className="text-base md:text-lg mb-12 max-w-3xl">
                            De fleste lokaler giver god plads til fortolkning, og du kan derfor i vid udstrækning bruge dem som du vil. Så længe du også påtager dig et medansvar. Du nemt låne ét eller flere lokaler til møder, netværk eller arrangementer. Det er gratis, hvis formålet ikke er kommercielt. Og du kan ikke booke lokaler til arrangementer af privat karakter.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Circle size={24} className="mr-4" />
                            <h2 className="text-xl md:text-2xl font-bold">
                                Bygningerne i Byens hus
                            </h2>
                        </div>
                        <p className="text-base md:text-lg mb-12 max-w-3xl">
                            Byens &quot;hus&quot; er faktisk to huse lige midt på Stændertorvet i Roskildes historiske bymidte. Det er både den gamle rådhusbygning og den gamle hospitalsbygning. Sammenlagt ca. 3.000 m2.
                            <br /><br />
                            De mange m2 fordeler sig på en række vidt forskellige lokaler. Det mindste er Mellemrummet på ca. 12 m2, hvor der kun er et bord og 6 stole. Det største er Den Gamle Byrådssal med 135 år gammelt bevaringsværdigt interiør.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Circle size={24} className="mr-4" />
                            <h2 className="text-xl md:text-2xl font-bold">
                                Udviklingen af Byens hus Roskilde. Den politiske vision
                            </h2>
                        </div>
                        <p className="text-base md:text-lg mb-4 max-w-3xl">
                            Ideen om et Byens hus i Roskilde startede med Byrådets beslutning om, at udlåne den tidligere byrådssal til kulturelle, almennyttige og foreningsformål. Det var den 26. juni 2013. Siden har der været en grundig proces med en stor grad af borgerinddragelse. Resultatet blev en vision for Byens hus (både det tidligere Rådhus og det tidligere Duebrødre Hospital), der blev vedtaget politisk den 22. oktober 2014. Visionen beskriver at Byens hus skal være:
                        </p>
                        <ul className="list-disc ml-4 mb-2 text-base">
                            <li>Et permanent folkemøde</li>
                            <li>En forpost for alle aktører</li>
                            <li>En katalysator for byliv</li>
                            <li>Et sted for studerende</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <p className="text-base md:text-lg max-w-3xl">
                            Byens hus er et godt sted at starte & et trygt sted at teste.
                            <br /><br />
                            Et kommunalt demokratihus med lokaler til initiativer og almennyttige formål. Et sted for forsamlinger og samtaler, om små og store spørgsmål.
                            <br /><br />
                            <strong>Principperne i Byens hus er:</strong>
                        </p>
                        <ul className="list-disc ml-4 mb-2 text-base">
                            <li>For Alle</li>
                            <li>Fælles Ansvar</li>
                            <li>Bare Spørg</li>
                        </ul>
                    </div>
                </section>
            </main>
            <footer className="w-full bg-black/10 border-t border-primary/10 mt-16">
                <Footer />
            </footer>
        </>
    )
}