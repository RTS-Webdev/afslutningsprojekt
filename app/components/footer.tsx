import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
    return (
        <div className="container px-4 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Brand and Contact */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">Byens hus</h2>
                    <address className="not-italic space-y-2 text-primary/80">
                        <p>Stændertorvet 1</p>
                        <p>4000 Roskilde</p>
                    </address>
                    <dl className="space-y-2">
                        <div>
                            <dt className="inline text-primary/80">Tlf. </dt>
                            <dd className="inline">
                                <a href="tel:46315199" className="hover:underline text-primary/80 hover:text-primary transition-colors">
                                    46 31 51 99
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="inline text-primary/80">Mail: </dt>
                            <dd className="inline">
                                <a href="mailto:byenshus@roskilde.dk" className="hover:underline text-primary/80 hover:text-primary transition-colors">
                                    byenshus@roskilde.dk
                                </a>
                            </dd>
                        </div>
                    </dl>
                </section>

                {/* Social Links */}
                <section className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Følg os</h3>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon" className="hover:bg-primary/10 border-primary/20" asChild>
                            <a href="https://www.facebook.com/ByensHusRoskilde" target="_blank" rel="noopener noreferrer" aria-label="Find os på Facebook">
                                <Facebook className="h-5 w-5 text-primary" />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" className="hover:bg-primary/10 border-primary/20" asChild>
                            <a href="https://www.instagram.com/byenshus_roskilde/" target="_blank" rel="noopener noreferrer" aria-label="Følg os på Instagram">
                                <Instagram className="h-5 w-5 text-primary" />
                            </a>
                        </Button>
                    </div>
                    <div className="space-y-2 pt-4">
                        <p className="text-sm text-primary/70">#ALLETIDERSROSKILDE</p>
                        <p className="text-sm text-primary/70">#ALLETIDERSDEMOKRATI</p>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Links</h3>
                    <nav className="space-y-2" aria-label="Footer navigation">
                        <Link href="/kontakt" className="block text-sm text-primary/80 hover:text-primary transition-colors hover:underline">
                            Kontakt
                        </Link>
                        <Link href="/cookies" className="block text-sm text-primary/80 hover:text-primary transition-colors hover:underline">
                            Cookies
                        </Link>
                        <Link href="/databeskyttelse" className="block text-sm text-primary/80 hover:text-primary transition-colors hover:underline">
                            Databeskyttelse
                        </Link>
                        <Link href="/tilgaengelighed" className="block text-sm text-primary/80 hover:text-primary transition-colors hover:underline">
                            Tilgængelighedserklæring
                        </Link>
                    </nav>
                </section>

                {/* Logo */}
                <section className="flex justify-start md:justify-end items-center">
                    <Image
                        src="/roskildekommune.svg"
                        alt="Roskilde Kommune"
                        width={300}
                        height={80}
                        className="object-contain"
                    />
                </section>
            </div>

            <Separator className="my-8 bg-primary/20" />

            <div className="text-center text-sm text-primary/70">
                <p>&copy; {new Date().getFullYear()} Roskilde Kommune. Alle rettigheder forbeholdes.</p>
            </div>
        </div>
    )
}
