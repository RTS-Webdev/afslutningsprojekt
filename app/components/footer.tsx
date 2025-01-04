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
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Byens hus</h2>
                    <address className="not-italic space-y-2">
                        <p>Stændertorvet 1</p>
                        <p>4000 Roskilde</p>
                    </address>
                    <div className="space-y-2">
                        <p>Tlf. <a href="tel:46315199" className="hover:underline">46 31 51 99</a></p>
                        <p>Mail: <a href="mailto:byenshus@roskilde.dk" className="hover:underline">byenshus@roskilde.dk</a></p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Følg os</h3>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon" asChild>
                            <a href="https://www.facebook.com/ByensHusRoskilde" target="_blank" rel="noopener noreferrer" aria-label="Find os på Facebook">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <a href="https://www.instagram.com/byenshus_roskilde/" target="_blank" rel="noopener noreferrer" aria-label="Følg os på Instagram">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                    <div className="space-y-2 pt-4">
                        <p className="text-sm text-muted-foreground">#ALLETIDERSROSKILDE</p>
                        <p className="text-sm text-muted-foreground">#ALLETIDERSDEMOKRATI</p>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Links</h3>
                    <nav className="space-y-2">
                        <Link href="/kontakt" className="block text-sm hover:underline">
                            Kontakt
                        </Link>
                        <Link href="/cookies" className="block text-sm hover:underline">
                            Cookies
                        </Link>
                        <Link href="/databeskyttelse" className="block text-sm hover:underline">
                            Databeskyttelse
                        </Link>
                        <Link href="/tilgaengelighed" className="block text-sm hover:underline">
                            Tilgængelighedserklæring
                        </Link>
                    </nav>
                </div>

                {/* Logo */}
                <div className="flex justify-start md:justify-end items-start">
                    <Image
                        src="/roskildekommune.svg"
                        alt="Roskilde Kommune"
                        width={200}
                        height={80}
                        className="object-contain"
                    />
                </div>
            </div>

            <Separator className="my-8" />

            <div className="text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Roskilde Kommune. Alle rettigheder forbeholdes.</p>
            </div>
        </div>
    )
}
