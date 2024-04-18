import { Inter } from "next/font/google";
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ["latin"] });

export default function Activiteiten() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-6 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Navigation></Navigation>
      </div>
      <p className= "text-center lg:max-w-5xl lg:w-full m-auto">
        Lijst van takken en activiteiten hier, vraag met getServerSideProps
      </p>
    </main>
  );
}
