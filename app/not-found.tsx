import Link from 'next/link'
import { CircleAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center h-screen text-black'>
        <CircleAlert className="w-16 h-16 mb-5 text-primary" />
        <h1 className="text-3xl md:text-4xl">Kunne ikke finde siden...</h1>
        <p className="text-balance max-w-[100%] md:max-w-[50%] text-center mt-4">
            Vi kunne ikke finde den side, du ledte efter. Prøv at gå tilbage til forsiden. For at komme
            til forsiden, kan du trykke på knappen herunder.
        </p>
        <Link href="/" className="mt-8 px-4 py-2 bg-primary text-white rounded-full">
            Gå til forsiden
        </Link>
    </main>
  )
}
